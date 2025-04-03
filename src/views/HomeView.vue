<template>
  <div class="home-view">
      <div class="video-container">
          <video autoplay muted loop id="background-video">
              <source src="@/assets/bg-video.mp4" type="video/mp4">
          </video>
      </div>
      <h1 class="content">KL-STUDIO</h1>
  </div>
</template>

<script setup>
// 这里由于使用了script setup语法，不需要再像之前使用export default那样定义组件选项
</script>

<style scoped>
.video-container {
      position: relative;
      width: 100vw; /* 使用视口单位确保宽度占满视口 */
      height: 100vh; /* 使用视口单位确保高度占满视口 */
      overflow: hidden;
  }

.home-view {
      position: relative; /* 修改为相对定位 */
      width: 100%;
      height: 100%;
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
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      color: rgba(253, 253, 253, 0.944);
      text-align: center;
      text-shadow: 12px 12px 24px rgba(0, 0, 0, 0.5); /* 添加阴影颜色 */
      font-size: 60px;
  }
</style>