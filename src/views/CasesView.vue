<template>
  <div class="cases-view">
    <div class="section-header">
      <h1 class="section-title">KL-Design</h1>
      <p class="section-subtitle">KL-Media</p>
    </div>
    <div class="video-grid">
      <VideoCard
        v-for="(video, index) in videos"
        :key="index"
        :video="video"
      />
    </div>
  </div>
</template>

<script setup>
import VideoCard from '@/components/VideoCard.vue'
const videos = [
  {
    title: '中移动设计',
    cover: require('@/assets/chinamobile.jpg'),
    url: 'https://zcool-video.zcool.cn/alivod/67e0ff94a9db7tzv8xgf1y3516_H264_1_13ee59baf0907a1.mp4?k=d305e7f4f3d73a944aebddb54e79bbca&t=67eac96e'
  },
  {
    title: '黑暗森林概念',
    cover: require('@/assets/blackforest.jpg'),
    url: 'https://zcool-video.zcool.cn/alivod/67d1394dd9be29u0v19p7b1868_H264_1_198a6353ff5c6a.mp4?k=9884796e991eb0dbdf5663f18b5f45b2&t=67eaca85'
  },
  {
    title: '苏宁',
    cover: require('@/assets/suning.jpg'),
    url: 'https://zcool-video.zcool.cn/alivod/67d1394dd9be29u0v19p7b1868_H264_1_198a6353ff5c6a.mp4?k=9884796e991eb0dbdf5663f18b5f45b2&t=67eaca85'
  },
  {
    title: 'onemix鞋子',
    cover: require('@/assets/onemix.jpg'),
    url: 'https://zcool-video.zcool.cn/alivod/67d1394dd9be29u0v19p7b1868_H264_1_198a6353ff5c6a.mp4?k=9884796e991eb0dbdf5663f18b5f45b2&t=67eaca85'
  },
  {
    title: 'zazb椅子',
    cover: require('@/assets/zazb.jpg'),
    url: 'https://zcool-video.zcool.cn/alivod/67d1394dd9be29u0v19p7b1868_H264_1_198a6353ff5c6a.mp4?k=9884796e991eb0dbdf5663f18b5f45b2&t=67eaca85'
  },
  {
    title: '福宝',
    cover: require('@/assets/fubao.jpg'),
    url: 'https://zcool-video.zcool.cn/alivod/67d1394dd9be29u0v19p7b1868_H264_1_198a6353ff5c6a.mp4?k=9884796e991eb0dbdf5663f18b5f45b2&t=67eaca85'
  },
  {
    title: '数字人',
    cover: require('@/assets/human.jpg'),
    url: 'https://zcool-video.zcool.cn/alivod/67d1394dd9be29u0v19p7b1868_H264_1_198a6353ff5c6a.mp4?k=9884796e991eb0dbdf5663f18b5f45b2&t=67eaca85'
  },
  // 添加更多视频...
]
</script>

<style lang="scss" scoped>
.cases-view {
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width:100%;
  margin:0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

// 增强悬停效果
.video-card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: 
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    
    .hover-overlay {
      &::before {
        content: "点击观看 →";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgb(8, 8, 8);
        font-size: 1.2rem;
        text-shadow: 0 0 10px rgba(0,0,0,0.5);
      }
    }
  }
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 3px;
    background: #ffd700;
    margin: 1.5rem auto 0;
  }
}

.section-title {
  font-size: 2.5rem;
  color: #0a0a0a;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  letter-spacing: 2px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: rgba(14, 13, 13, 0.8);
  margin: 0;
}

</style>