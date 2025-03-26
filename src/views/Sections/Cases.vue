<template>
    <section class="section cases-section">
      <h2 class="section-title">精选案例</h2>
      
      <div class="case-gallery">
        <div 
          v-for="(item, index) in cases"
          :key="index"
          class="case-item"
          :style="{ backgroundImage: `url(${item.thumb})` }"
        >
          <div class="case-overlay">
            <h3>{{ item.title }}</h3>
            <a 
              :href="item.video"
              class="play-button"
              @click.prevent="showVideo(item)"
            >
              ▶
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const cases = ref([
    {
      title: '新能源汽车三维展示',
      thumb: require('@/assets/videos/covers/video1.jpg'),
      video: 'https://example.com/video1.mp4'
    },
    {
      title: '智慧城市数字孪生',
      thumb: require('@/assets/videos/covers/video2.jpg'),
      video: 'https://example.com/video2.mp4'
    }
  ])
  
  const showVideo = (item) => {
    // 视频弹窗逻辑
  }
  </script>
  
  <style scoped>
  .cases-section {
    min-height: 100vh;
    padding: 4rem 2rem;
    background: linear-gradient(45deg, #f8f9fa, #ffffff);
  }
  
  .case-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .case-item {
    aspect-ratio: 16/9;
    background-size: cover;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s;
  }
  
  .case-item:hover {
    transform: translateY(-5px);
  }
  
  .case-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .case-item:hover .case-overlay {
    opacity: 1;
  }
  
  .play-button {
    font-size: 2.5rem;
    color: white;
    text-shadow: 0 0 15px rgba(255,255,255,0.5);
    margin-top: 1rem;
    cursor: pointer;
    transition: transform 0.3s;
  }
  
  .play-button:hover {
    transform: scale(1.2);
  }
  </style>