<template>
    <a 
      :href="video.url" 
      target="_blank" 
      rel="noopener noreferrer"
      class="video-card"
    >
      <div class="cover-container">
        <img 
          :src="video.cover" 
          :alt="video.title"
          class="cover-image"
        />
        <div class="hover-overlay">
          <h3 class="title">{{ video.title }}</h3>
        </div>
      </div>
    </a>
  </template>
  
  <script setup>
  defineProps({
    video: {
      type: Object,
      required: true,
      default: () => ({
        title: '默认标题',
        cover: '/default-cover.jpg',
        url: '#'
      })
    }
  })
  </script>
  
  <style lang="scss" scoped>
  .video-card {
    display: block;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease;
  
    &:hover {
      transform: translateY(-5px);
      
      .cover-image {
        transform: scale(1.05);
        filter: brightness(0.9);
      }
      
      .hover-overlay {
        opacity: 1;
      }
    }
  }
  
  .cover-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 比例 */
    background: #1a1a1a;
  }
  
  .cover-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .hover-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%);
    display: flex;
    align-items: flex-end;
    padding: 1.5rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .title {
    color: white;
    font-size: 1.2rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    margin: 0;
  }
  </style>