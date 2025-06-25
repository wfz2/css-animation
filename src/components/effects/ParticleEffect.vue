<template>
  <div class="particle-effect">
    <div class="particle-container">
      <div 
        v-for="i in particleCount" 
        :key="i" 
        class="particle"
        :style="getParticleStyle(i)"
      ></div>
    </div>
    <div class="content">
      <slot>粒子</slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  particleCount: {
    type: Number,
    default: 15
  },
  particleColor: {
    type: String,
    default: 'rgba(255, 255, 255, 0.8)'
  }
})

/**
 * 生成随机粒子样式
 * @param {number} index 粒子索引
 * @returns {Object} 样式对象
 */
const getParticleStyle = (index) => {
  // 随机延迟时间 0-3秒
  const delay = Math.random() * 3
  // 随机动画持续时间 3-5秒
  const duration = 3 + Math.random() * 2
  // 随机水平位置 0-100%
  const left = Math.random() * 100
  // 随机粒子大小 2-6px
  const size = 2 + Math.random() * 4
  
  return {
    left: left + '%',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    width: size + 'px',
    height: size + 'px',
    background: props.particleColor
  }
}
</script>

<style scoped>
/**
 * 粒子效果组件
 * 创建动态浮动粒子背景效果
 */
.particle-effect {
  position: relative;
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.particle-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  bottom: -10px;
  animation: particleFloat 5s ease-in-out infinite;
}

.content {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  z-index: 10;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* 粒子浮动动画 - 从底部浮到顶部并消失 */
@keyframes particleFloat {
  0% { 
    transform: translateY(0px) translateX(0px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% { 
    transform: translateY(-80px) translateX(10px);
    opacity: 0.8;
  }
  90% {
    opacity: 1;
  }
  100% { 
    transform: translateY(-160px) translateX(-10px);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .particle-effect {
    width: 120px;
    height: 120px;
  }
  
  .content {
    font-size: 1rem;
  }
}
</style>