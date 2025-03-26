<template>
    <section class="service-container">
      <h2 class="section-title">专业服务领域</h2>
      
      <div class="service-grid">
        <!-- 三维动画影视类 -->
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <div class="card-header">
            <span class="card-icon">{{ service.icon }}</span>
            <h3 class="card-title">{{ service.title }}</h3>
          </div>
          
          <ul class="service-list">
            <li v-for="(item, i) in service.items" :key="i" class="service-item">
              <span class="item-marker"></span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const services = ref([
    {
      title: '三维动画影视类 Animation Design',
      icon: '🎬',
      items: [
        'a. 产品动画/工业动画',
        'b. 广告宣传发布会/活动宣传',
        'c. 实景合成/VFX',
        'd. 平面/三渲二/风格化/MG动画'
      ]
    },
    {
      title: '角色IP类 IP Design',
      icon: '🎨',
      items: [
        'a. 角色设计',
        'b. 角色三维',
        'c. IP形象',
        'd. IP角色视频动画'
      ]
    },
    {
      title: '产品数字化 Product Digitization',
      icon: '💻',
      items: [
        'a. 产品建模渲染（产品详情页、活动海报）',
        'b. 网站数字化建模（工业可视化、网页升级）',
        'c. 区块链模型创作（数字场馆、云上服务）',
        'd. 公共雕塑（3D打印）、剧组道具'
      ]
    }
  ])
  </script>
  
  <style scoped>
  .service-container {
    max-width: 1280px;
    margin: 4rem auto;
    padding: 0 2rem;
  }
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    color: #2d3748;
    margin-bottom: 3rem;
    position: relative;
    padding-bottom: 1rem;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: #7c3aed;
  }
  
  .service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 2rem;
  }
  
  .service-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 8px 30px rgba(0,0,0,0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.12);
  }
  
  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #e2e8f0;
  }
  
  .card-icon {
    font-size: 2.5rem;
    margin-right: 1.5rem;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
  }
  
  .card-title {
    font-size: 1.3rem;
    color: #2d3748;
    line-height: 1.4;
  }
  
  .service-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .service-item {
    position: relative;
    padding: 0.8rem 0;
    color: #4a5568;
    line-height: 1.6;
    opacity: 0;
    transform: translateX(-20px);
    animation: itemSlide 0.5s forwards;
  }
  
  @keyframes itemSlide {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .service-item:nth-child(1) { animation-delay: 0.2s; }
  .service-item:nth-child(2) { animation-delay: 0.4s; }
  .service-item:nth-child(3) { animation-delay: 0.6s; }
  .service-item:nth-child(4) { animation-delay: 0.8s; }
  
  .item-marker {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #7c3aed;
    border-radius: 50%;
    margin-right: 1rem;
    position: relative;
    top: -1px;
  }
  
  @media (max-width: 768px) {
    .service-container {
      padding: 0 1rem;
    }
  
    .section-title {
      font-size: 2rem;
    }
  
    .service-grid {
      grid-template-columns: 1fr;
    }
  
    .card-title {
      font-size: 1.1rem;
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    .service-item,
    .service-card {
      animation: none !important;
      transition: none !important;
    }
  }
  </style>