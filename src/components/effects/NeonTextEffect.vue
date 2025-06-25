<template>
  <div class="neon-text-effect">
    <span class="neon-text">
      <slot>NEON</slot>
    </span>
  </div>
</template>

<style scoped>
/**
 * 霓虹文字效果组件
 * 使用多重text-shadow创建发光霓虹效果
 */
.neon-text-effect {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  padding: 20px;
  border-radius: 10px;
  min-width: 120px;
  min-height: 80px;
}

.neon-text {
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  /* 霓虹发光效果 - 多层阴影叠加 */
  animation: neon-glow 2s ease-in-out infinite alternate;
}

/* 霓虹发光动画 - 在两种发光强度间切换 */
@keyframes neon-glow {
  from {
    text-shadow: 
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 15px #0073e6,
      0 0 20px #0073e6,
      0 0 35px #0073e6,
      0 0 40px #0073e6;
  }
  to {
    text-shadow: 
      0 0 2px #fff,
      0 0 5px #fff,
      0 0 8px #0073e6,
      0 0 12px #0073e6,
      0 0 18px #0073e6,
      0 0 25px #0073e6;
  }
}

@media (max-width: 768px) {
  .neon-text {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
  
  .neon-text-effect {
    padding: 15px;
    min-width: 100px;
    min-height: 60px;
  }
}
</style>