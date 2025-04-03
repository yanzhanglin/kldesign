<template>
  <div class="home-view">
    <h1 class="content">KL-STUDIO</h1>
    <div class="video-container">
      <video autoplay muted loop id="background-video">
      <source src="@/assets/bg-video.mp4" type="video/mp4">
    </video>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.video-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.home-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
  /* 绝对定位 + 平移居中 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2; /* 确保文字在视频上方 */
  color: rgba(253, 253, 253, 0.944); /* 根据背景色调整 */
  text-align: center;
  text-shadow: 12px 12px 24px;
  font-size: 60px;
}
</style>

