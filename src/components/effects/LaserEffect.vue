<template>
  <div class="laser-effect">
    <div class="laser-container">
      <div class="laser-beam"></div>
      <div class="laser-core"></div>
      <div class="laser-particles">
        <div 
          v-for="i in 8" 
          :key="i" 
          class="laser-particle"
          :style="getParticleStyle(i)"
        ></div>
      </div>
    </div>
    <div class="laser-content">
      <slot>LASER</slot>
    </div>
  </div>
</template>

<script setup>
/**
 * 激光效果组件
 * 模拟激光束的发光和粒子效果
 * 关键技术：多层发光 + 粒子动画 + 渐变背景
 */

const getParticleStyle = (index) => {
  const angle = (index / 8) * 360
  const delay = index * 0.2
  return {
    transform: `rotate(${angle}deg) translateX(30px)`,
    animationDelay: delay + 's'
  }
}
</script>

<style scoped>
.laser-effect {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 150px;
  background: #000;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.laser-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 激光束主体 */
.laser-beam {
  width: 150px;
  height: 4px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    #ff0000 20%, 
    #ff6666 50%, 
    #ff0000 80%, 
    transparent 100%
  );
  position: absolute;
  animation: laserPulse 2s ease-in-out infinite;
  box-shadow: 
    0 0 10px #ff0000,
    0 0 20px #ff0000,
    0 0 30px #ff0000;
}

/* 激光核心 */
.laser-core {
  width: 100px;
  height: 2px;
  background: #ffffff;
  position: absolute;
  animation: laserCore 2s ease-in-out infinite;
  box-shadow: 0 0 5px #ffffff;
}

/* 激光粒子容器 */
.laser-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.laser-particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #ff6666;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  animation: laserParticle 3s linear infinite;
  box-shadow: 0 0 5px #ff6666;
}

.laser-content {
  color: #ff0000;
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 10;
  text-shadow: 
    0 0 10px #ff0000,
    0 0 20px #ff0000;
  animation: laserText 2s ease-in-out infinite;
}

/* 激光脉冲动画 */
@keyframes laserPulse {
  0%, 100% { 
    opacity: 0.8; 
    transform: scaleX(1);
  }
  50% { 
    opacity: 1; 
    transform: scaleX(1.1);
  }
}

/* 激光核心动画 */
@keyframes laserCore {
  0%, 100% { 
    opacity: 1; 
    transform: scaleX(0.8);
  }
  50% { 
    opacity: 0.6; 
    transform: scaleX(1.2);
  }
}

/* 激光粒子动画 */
@keyframes laserParticle {
  0% { 
    transform: rotate(0deg) translateX(0px); 
    opacity: 1; 
  }
  100% { 
    transform: rotate(360deg) translateX(50px); 
    opacity: 0; 
  }
}

/* 激光文字动画 */
@keyframes laserText {
  0%, 100% { 
    text-shadow: 
      0 0 10px #ff0000,
      0 0 20px #ff0000;
  }
  50% { 
    text-shadow: 
      0 0 20px #ff0000,
      0 0 30px #ff0000,
      0 0 40px #ff0000;
  }
}

@media (max-width: 768px) {
  .laser-effect {
    width: 150px;
    height: 100px;
  }
  
  .laser-beam {
    width: 120px;
  }
  
  .laser-core {
    width: 80px;
  }
  
  .laser-content {
    font-size: 1.2rem;
  }
}
</style>