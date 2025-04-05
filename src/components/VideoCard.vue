<template>
  <div ref="videoCardRef" class="video-card" @click="handleCardClick">
    <div class="cover-container">
      <div 
        v-if="!isPlaying && !loading && !error"
        class="video-cover"
        :style="{ backgroundImage: `url(${currentCover})` }"
      ></div>
      <div v-if="loading" class="loading">加载中...</div>
      <div v-if="error" class="error">视频无法加载</div>
      <iframe 
        v-if="isPlaying"
        ref="iframeRef"
        :src="iframeUrl"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        class="video-iframe"
        @load="onIframeLoad"
        @error="onError"
        sandbox="allow-same-origin allow-scripts allow-pointer-lock"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  video: {
    type: Object,
    required: true,
    validator: (value) => {
      return !!value.url.match(/bilibili\.com\/video\/(BV\w+)/);
    }
  }
});

const videoCardRef = ref(null);
const iframeRef = ref(null);
const activeVideoId = ref(null);
const isPlaying = ref(false);
const isFullScreen = ref(false);
const loading = ref(false);
const error = ref(false);
const currentCover = ref(props.video.cover);

const bvid = computed(() => {
  const match = props.video.url.match(/bilibili\.com\/video\/(BV\w+)(?:\?|\/)/);
  return match ? match[1] : null;
});

const page = computed(() => {
  const pageMatch = props.video.url.match(/[?&]p=(\d+)/);
  return pageMatch ? pageMatch[1] : 1;
});

const iframeUrl = computed(() => {
  return `https://player.bilibili.com/player.html?bvid=${bvid.value}&page=${page.value}&autoplay=1&danmaku=0`;
});

// 监听video变化重置状态
watch(() => props.video, (newVal) => {
  currentCover.value = newVal.cover;
  isPlaying.value = false;
  loading.value = false;
  error.value = false;
  activeVideoId.value = null;
});

const requestFullScreen = (element) => {
  if (!element) return;
  
  const requestMethod = element.requestFullscreen || 
    element.mozRequestFullScreen ||
    element.webkitRequestFullscreen ||
    element.msRequestFullscreen;
  
  requestMethod?.call(element);
};

const exitFullScreen = () => {
  const exitMethod = document.exitFullscreen || 
    document.mozCancelFullScreen ||
    document.webkitExitFullscreen ||
    document.msExitFullscreen;
  
  exitMethod?.call(document);
};

const handleCardClick = () => {
  if (isFullScreen.value) {
    exitFullScreen();
    return;
  }
  
  if (!isPlaying.value) {
    playCurrentVideo();
  }
  requestFullScreen(videoCardRef.value);
};

const playCurrentVideo = () => {
  activeVideoId.value = props.video.url;
  isPlaying.value = true;
  loading.value = true;
  error.value = false;
};

const stopVideo = () => {
  if (iframeRef.value && iframeRef.value.contentWindow) {
    iframeRef.value.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func: 'pauseVideo' }),
      '*'
    );
  }
  isPlaying.value = false;
  activeVideoId.value = null;
  iframeRef.value = null; // 确保引用被置空
};
const handleFullScreenChange = () => {
  isFullScreen.value = !!document.fullscreenElement;
  if (!isFullScreen.value) {
    stopVideo();
  }
};

const onIframeLoad = () => {
  loading.value = false;
  
};

// 修改 onError
const onError = () => {
  error.value = true;
  loading.value = false;
  isPlaying.value = false;
  iframeRef.value = null; // 移除 iframe 引用
};
onMounted(() => {
  document.addEventListener('fullscreenchange', handleFullScreenChange);
  document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
  document.addEventListener('mozfullscreenchange', handleFullScreenChange);
  document.addEventListener('MSFullscreenChange', handleFullScreenChange);
});

onBeforeUnmount(() => {
  document.removeEventListener('fullscreenchange', handleFullScreenChange);
  document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
  document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
  document.removeEventListener('MSFullscreenChange', handleFullScreenChange);
  stopVideo();
});
</script>

<style scoped>
.video-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.cover-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
}

.video-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
}

.loading, .error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 16px;
}

.video-card:fullscreen {
  background: #000;
  width: 100% !important;
  height: 100% !important;
}
</style>