<template>
    <div class="contact-view">
      <div>
        <h1>联系我们</h1>
        <p>如果您有任何问题、建议或合作意向，欢迎通过以下方式与我们取得联系：</p>
        <p><strong>地址：</strong>XX省XX市XX区XX街道XX号XX大厦XX层</p>
        <p><strong>邮箱：</strong><a href="mailto:contact@example.com">contact@example.com</a></p>
        <p><strong>微信公众号：</strong>Kl@qq.com</p>
        <p><strong>B站账号：</strong><a href="https://space.bilibili.com/xxxx">https://space.bilibili.com/xxxx</a></p>
        <p><strong>电话：</strong>010 - 12345678</p>
      </div>

    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView'
  }
  </script>
  
  <style scoped>
  .contact-view {
    min-height: 100vh;
    padding: 2rem;
    background: #302f2f;
    color: white;
    text-align: center;
  }

  .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
        }

        h1 {
            text-align: center;
            color: #f7f1f1;
        }

        p {
            line-height: 1.6;
            margin-bottom: 20px;
        }

        strong {
            color: #f8f5f5;
        }

        a {
            color: #eff1f3;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
  </style>
