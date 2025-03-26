<template>
    <div class="home-container">
      <!-- 导航菜单 -->
      <nav class="sticky-nav">
        <a 
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          @click.prevent="scrollToSection(item.id)"
          class="nav-link"
        >
          {{ item.title }}
        </a>
      </nav>
  
      <!-- 各区块锚点 -->
      <section id="hero">
        <!-- 首页主视觉内容 -->
        <div class="video-wrapper">
          <video autoplay muted loop>
            <source src="@/assets/bg-video.mp4" type="video/mp4">
          </video>
        </div>
      </section>
  
      <Cases id="cases" />
      <Services id="services" />
      <Team id="team" />
      <Contact id="contact" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Cases from '@/views/Sections/Cases.vue'
  import Services from '@/views/Sections/Services.vue'
  import Team from '@/views/Sections/Team.vue'
  import Contact from '@/views/Sections/Contact.vue'
  
  const navItems = ref([
    { id: 'cases', title: '经典案例' },
    { id: 'services', title: '专业服务' },
    { id: 'team', title: '核心团队' },
    { id: 'contact', title: '联系我们' }
  ])
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  </script>
  
  <style scoped>
  .sticky-nav {
    position: fixed;
    top: 20px;
    right: 5%;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: rgba(255,255,255,0.9);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  }
  
  .nav-link {
    color: #2d3748;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.3s;
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
  
  .nav-link:hover {
    background: #7c3aed10;
    transform: translateX(-5px);
  }
  
  .video-wrapper {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.8);
  }
  </style>