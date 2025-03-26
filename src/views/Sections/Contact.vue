<template>
    <div class="contact-container">
      <!-- 标题部分 -->
      <div class="title-wrapper">
        <div class="decorative-line"></div>
        <h1 class="title">联系我们</h1>
        <div class="decorative-line"></div>
      </div>
  
      <!-- 联系方式内容 -->
      <div class="contact-content">
        <div class="contact-grid">
          <!-- 地址 -->
          <div class="contact-item">
            <span class="icon">📍</span>
            <div>
              <h3>地址</h3>
              <p>上海市浦东新区创意大道168号<br>KL创意园区3号楼501室</p>
            </div>
          </div>
  
          <!-- 邮箱 -->
          <div class="contact-item">
            <span class="icon">✉️</span>
            <div>
              <h3>邮箱</h3>
              <p><a href="mailto:contact@kldesign.com">contact@kldesign.com</a></p>
            </div>
          </div>
  
          <!-- 电话 -->
          <div class="contact-item">
            <span class="icon">📞</span>
            <div>
              <h3>电话</h3>
              <p><a href="tel:021-6878-9527">021-6878-9527</a></p>
            </div>
          </div>
  
          <!-- B站 -->
          <div class="contact-item">
            <span class="icon">
              <svg class="bilibili-icon" viewBox="0 0 24 24">
                <path d="M18.7 8.4c-.2-.1-.4-.1-.6 0-1.1.5-2.2.9-3.4 1.2-.3-1.3-.8-2.6-1.5-3.8 1.7-.7 3.5-1.1 5.3-1.3.3 0 .5.2.5.5v3.8c0 .3-.2.5-.4.6zm-13.5 0c-.2-.1-.4-.3-.4-.6V4.1c0-.3.2-.5.5-.5 1.8.2 3.6.6 5.3 1.3-.7 1.2-1.2 2.5-1.5 3.8-1.2-.3-2.3-.7-3.4-1.2-.2-.1-.4-.1-.5 0zM12 6.3c-2.9 0-5.3 2.4-5.3 5.3s2.4 5.3 5.3 5.3 5.3-2.4 5.3-5.3-2.4-5.3-5.3-5.3z"/>
              </svg>
            </span>
            <div>
              <h3>B站官方账号</h3>
              <p>@KL动画工作室</p>
            </div>
          </div>
  
          <!-- 微信公众号 -->
          <div class="contact-item">
            <span class="icon">📱</span>
            <div>
              <h3>微信公众号</h3>
              <p>KL_Animation</p>
              <img 
                src="../../assets/wechat-qrcode.jpg" 
                alt="微信公众号二维码"
                class="qrcode"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* 基础容器样式 */
  .contact-container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 2rem;
    background: linear-gradient(145deg, #f8f9fa, #ffffff);
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  }
  
  /* 标题样式 */
  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    animation: titleEntrance 1s ease-out;
  }
  
  .decorative-line {
    width: 80px;
    height: 2px;
    background: #7c3aed;
    margin: 0 1.5rem;
    opacity: 0;
    animation: lineAppear 1s 0.5s forwards;
  }
  
  .title {
    font-size: 2.5rem;
    color: #2d3748;
    letter-spacing: 3px;
    position: relative;
    padding-bottom: 0.5rem;
  }
  
  .title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 50%;
    height: 3px;
    background: #7c3aed;
    transform: translateX(-50%);
    animation: underlineExpand 1s 1s forwards;
  }
  
  /* 内容网格布局 */
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }
  
  /* 联系项样式 */
  .contact-item {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    background: rgba(255,255,255,0.9);
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
    animation: itemAppear 0.6s forwards;
  }
  
  .contact-item:nth-child(1) { animation-delay: 0.2s; }
  .contact-item:nth-child(2) { animation-delay: 0.4s; }
  .contact-item:nth-child(3) { animation-delay: 0.6s; }
  .contact-item:nth-child(4) { animation-delay: 0.8s; }
  .contact-item:nth-child(5) { animation-delay: 1s; }
  
  .contact-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  /* 图标样式 */
  .icon {
    font-size: 2rem;
    margin-right: 1.5rem;
    min-width: 40px;
    text-align: center;
    color: #07040c;
  }
  
  .bilibili-icon {
    width: 32px;
    height: 32px;
    fill: #0e0f0f;
  }
  
  /* 文字样式 */
  h3 {
    color: #020303;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
  
  p {
    color: #4a5568;
    line-height: 1.6;
    margin: 0;
  }
  
  a {
    color: #4a5568;
    text-decoration: none;
    position: relative;
  }
  
  a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: #09070c;
    transition: width 0.3s ease;
  }
  
  a:hover::after {
    width: 100%;
  }
  
  /* 二维码样式 */
  .qrcode {
    width: 120px;
    height: auto;
    margin-top: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(17, 16, 16, 0.1);
  }
  
  /* 自定义动画 */
  @keyframes titleEntrance {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes lineAppear {
    to {
      opacity: 1;
    }
  }
  
  @keyframes underlineExpand {
    from {
      width: 0;
    }
    to {
      width: 50%;
    }
  }
  
  @keyframes itemAppear {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* 响应式设计 */
  @media (max-width: 768px) {
    .contact-container {
      margin: 1rem;
      padding: 1rem;
    }
  
    .title {
      font-size: 2rem;
    }
  
    .contact-grid {
      grid-template-columns: 1fr;
    }
  
    .decorative-line {
      width: 40px;
    }
  }
  </style>