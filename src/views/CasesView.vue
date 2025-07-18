<template>
  <div class="cases-view">
    <div class="section-header">
      <h1 class="section-title">KL-STUDIO</h1>
      <p class="section-subtitle">KL-MEDIA</p>
    </div>
    <div class="video-grid">
      <VideoCard class="video-card"
        v-for="video in videosList"
        :key="video.id"
        :video="video"
      />
    </div>
  </div>
</template>

<script setup>
import VideoCard from '@/components/VideoCard.vue'



const videosList = [
  { 
    id:1,
    title: '中移动设计',
    cover: require('@/assets/chinamobile.jpg'),
    url: 'https://mp.weixin.qq.com/s/Ex9L4GvWI5S1E3GhYjj-vw'
  },
  {
    id:2,
    title: '黑暗森林概念',
    cover: require('@/assets/blackforest.jpg'),
    url: 'https://www.bilibili.com/video/BV1ao4y1U71H?t=0.8'
  },
  {
    id:3,
    title: '苏宁',
    cover: require('@/assets/suning.jpg'),
    url: 'https://www.bilibili.com/video/BV1HvX6YdEer?t=9.6'
  },
  {
    id:4,
    title: 'onemix鞋子',
    cover: require('@/assets/onemix.jpg'),
    url: 'https://www.bilibili.com/video/BV1HvX6YdEer?t=9.6'
  },
  {
    id:5,
    title: 'zazb椅子',
    cover: require('@/assets/zazb.jpg'),
    url: 'https://www.bilibili.com/video/BV1HvX6YdEer?t=9.6'
  },
  {
    id:6,
    title: '福宝',
    cover: require('@/assets/fubao.jpg'),
    url: 'https://www.bilibili.com/video/BV1HvX6YdEer?t=9.6'
  },
  {
    id:7,
    title: '数字人',
    cover: require('@/assets/human.jpg'),
    url: 'https://www.bilibili.com/video/BV1yAQJYPErD?t=1.6'
  },
  // 添加更多视频...

];


</script>

<style lang="scss" scoped>
.cases-view {
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  background: #302f2f;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 固定每行2列 */
  gap: 1rem;
  width: 100%;
  margin: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 小屏幕可改为1列（可选） */
  }
}
.video-card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
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
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(248, 247, 247, 0.3);
  letter-spacing: 2px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: rgba(250, 249, 249, 0.8);
  margin: 0;
}
</style>