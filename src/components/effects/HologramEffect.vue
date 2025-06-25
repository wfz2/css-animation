<template>
  <div class="hologram-effect">
    <div class="hologram-container">
      <div class="hologram-lines"></div>
      <div class="hologram-content">
        <slot>HOLOGRAM</slot>
      </div>
      <div class="hologram-glitch"></div>
    </div>
  </div>
</template>

<style scoped>
/**
 * 全息图效果组件
 * 模拟科幻电影中的全息投影效果
 * 关键技术：多层动画 + 扫描线 + 色彩分离
 */
.hologram-effect {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 150px;
  background: #000;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.hologram-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 扫描线效果 */
.hologram-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 255, 255, 0.1) 2px,
    rgba(0, 255, 255, 0.1) 4px
  );
  animation: hologramScan 2s linear infinite;
}

.hologram-content {
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  font-weight: bold;
  color: #00ffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  z-index: 10;
  /* 全息发光效果 */
  text-shadow: 
    0 0 5px #00ffff,
    0 0 10px #00ffff,
    0 0 15px #00ffff,
    0 0 20px #00ffff;
  animation: hologramFlicker 3s ease-in-out infinite;
}

/* 故障效果层 */
.hologram-glitch {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 0, 255, 0.1) 50%,
    transparent 100%
  );
  animation: hologramGlitch 4s ease-in-out infinite;
}

/* 扫描线动画 */
@keyframes hologramScan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

/* 全息闪烁动画 */
@keyframes hologramFlicker {
  0%, 100% { 
    opacity: 1; 
    transform: scale(1);
  }
  50% { 
    opacity: 0.8; 
    transform: scale(1.02);
  }
  75% { 
    opacity: 0.9; 
    transform: scale(0.98);
  }
}

/* 故障动画 */
@keyframes hologramGlitch {
  0%, 90%, 100% { 
    transform: translateX(0); 
    opacity: 0;
  }
  92%, 98% { 
    transform: translateX(2px); 
    opacity: 0.3;
  }
  94%, 96% { 
    transform: translateX(-2px); 
    opacity: 0.5;
  }
}

@media (max-width: 768px) {
  .hologram-effect {
    width: 150px;
    height: 100px;
  }
  
  .hologram-content {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
}
</style>