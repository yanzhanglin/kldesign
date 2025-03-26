<template>
    <div class="team-container">
      <!-- 团队成员 -->
      <div class="member-grid">
        <div 
          v-for="(member, index) in members"
          :key="index"
          class="member-card"
        >
          <div class="avatar-wrapper">
            <div class="avatar-placeholder">
              {{ member.avatarText }}
            </div>
          </div>
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-position">{{ member.position }}</p>
        </div>
      </div>
  
      <!-- 关于我们 -->
      <div class="about-section">
        <h2 class="about-title">我们</h2>
        <p class="about-content">
          KL数字视觉艺术是一个以数字视觉创作为核心的工作室，整合了产品设计、数字传媒、影视动画等技术人才，致力于创作更优秀的数字传媒作品。
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const members = ref([
    {
      name: 'SNOW',
      position: '技术指导合伙人',
      avatarText: '❄️'
    },
    {
      name: 'RONIN',
      position: '制片指导合伙人', 
      avatarText: '⚔️'
    },
    {
      name: 'DOVEY',
      position: '技术指导合伙人',
      avatarText: '🕊️'
    }
  ])
  </script>
  
  <style scoped>
  .team-container {
    max-width: 1200px;
    margin: 4rem auto;
    padding: 0 2rem;
  }
  
  .member-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }
  
  .member-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  }
  
  .member-card:hover {
    transform: translateY(-5px);
  }
  
  .avatar-wrapper {
    width: 120px;
    height: 120px;
    margin: 0 auto 1.5rem;
  }
  
  .avatar-placeholder {
    width: 100%;
    height: 100%;
    background: #f0f2f5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    transition: transform 0.3s ease;
  }
  
  .member-card:hover .avatar-placeholder {
    transform: scale(1.05);
  }
  
  .member-name {
    font-size: 1.5rem;
    color: #2d3748;
    margin: 0.5rem 0;
    letter-spacing: 2px;
  }
  
  .member-position {
    color: #4a5568;
    font-size: 0.95rem;
    margin: 0;
  }
  
  .about-section {
    background: rgba(124, 58, 237, 0.05);
    border-radius: 12px;
    padding: 3rem;
    text-align: center;
  }
  
  .about-title {
    font-size: 2rem;
    color: #2d3748;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
  }
  
  .about-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #7c3aed;
  }
  
  .about-content {
    color: #4a5568;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.05rem;
  }
  
  @media (max-width: 768px) {
    .team-container {
      padding: 0 1rem;
    }
    
    .member-grid {
      grid-template-columns: 1fr;
    }
  
    .about-section {
      padding: 2rem;
    }
  }
  </style>