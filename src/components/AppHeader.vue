<template>
    <!-- 右侧悬浮竖向导航 -->
    <nav class="floating-vertical-nav">
      <ul class="nav-list">
        <li 
          v-for="(item, index) in navItems" 
          :key="index"
          class="nav-item"
        >
          <router-link 
            :to="item.path" 
            class="nav-link"
          >
            <span class="link-text">{{ item.title }}</span>
            <!-- <span class="hover-effect"></span> -->
          </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  // 导航项配置
  const navItems = [
    { title: '首页', path: '/' },
    { title: '案例', path: '/cases' },
    { title: '团队', path: '/team' },
    { title: '服务', path: '/services' },
    { title: '联系', path: '/contact' }
  ]
  </script>
  
  <style lang="scss" scoped>
  .floating-vertical-nav {
    // 定位设置
    position: fixed;
    right: 1%;
    top: 15%;
    transform: translateY(-50%);
    z-index: 9999;
  
    // 布局样式
    .nav-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.05rem;
    }
  
    .nav-item {
      position: relative;
      text-align: right;
    }
  
    .nav-link {
      display: block;
      padding: 0.8rem 1.2rem;
      text-decoration: none;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  
      // 文字基础样式
      .link-text {
        color: #080808;
        font-size: 1rem;
        letter-spacing: 2px;
        position: relative;
        z-index: 2;
        transition: color 0.3s;
      }
  
      // 悬浮背景特效
      .hover-effect {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(20, 20, 19, 0.1);
        backdrop-filter: blur(4px);
        transform: translateX(110%);
        transition: transform 0.4s ease;
        z-index: 1;
      }
  
      // 激活状态指示
      &.router-link-active {
        .link-text {
          color: #0b0a0a;
          text-shadow: 0 0 12px rgba(246, 246, 241, 0.3);
        }
        
        &::after {
          content: "";
          position: absolute;
          left: -1.5rem;
          top: 50%;
          transform: translateY(-50%);
          color: #0a0a09;
          font-size: 1.2rem;
        }
      }
  
      // 悬停动效
      &:hover {
        .hover-effect {
          transform: translateX(0);
        }
        .link-text {
          color: #f2f1ee;
        }
      }
    }
  
    // 悬浮光晕效果
    &::before {
      content: "";
      position: absolute;
      top: -30px;
      left: -30px;
      right: -30px;
      bottom: -30px;
      background: radial-gradient(
        circle at right center,
        rgba(245, 243, 243, 0.02) 0%,
        rgba(251, 246, 246, 0) 70%
      );
      pointer-events: none;
      z-index: 0;
    }
  }
  
  /* 移动端适配 */
  @media (max-width: 768px) {
    .floating-vertical-nav {
      right: 1rem;
      
      .nav-link {
        padding: 0.6rem 1rem;
        
        .link-text {
          font-size: 1rem;
        }
        
        &::after {
          left: -1.2rem;
          font-size: 1rem;
        }
      }
    }
  }
  </style>