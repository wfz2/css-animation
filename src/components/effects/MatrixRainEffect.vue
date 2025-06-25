<template>
  <div class="matrix-rain-effect">
    <div class="matrix-container">
      <div 
        v-for="i in columnCount" 
        :key="i" 
        class="matrix-column"
        :style="getColumnStyle(i)"
      >
        <div 
          v-for="j in 20" 
          :key="j" 
          class="matrix-char"
          :style="getCharStyle(j)"
        >
          {{ getRandomChar() }}
        </div>
      </div>
    </div>
    <div class="matrix-content">
      <slot>MATRIX</slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

/**
 * 矩阵雨效果组件
 * 模拟《黑客帝国》中的数字雨效果
 * 关键技术：多列字符动画 + 随机字符生成 + 交错时间
 */

const props = defineProps({
  columnCount: {
    type: Number,
    default: 12
  }
})

// 字符集包含数字、字母和日文片假名
const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'

const getRandomChar = () => {
  return chars[Math.floor(Math.random() * chars.length)]
}

const getColumnStyle = (index) => {
  // 随机延迟和位置
  const delay = Math.random() * 3
  const left = (index / props.columnCount) * 100
  return {
    left: left + '%',
    animationDelay: delay + 's'
  }
}

const getCharStyle = (index) => {
  // 字符淡入淡出延迟
  const delay = index * 0.1
  return {
    animationDelay: delay + 's'
  }
}
</script>

<style scoped>
.matrix-rain-effect {
  position: relative;
  width: 300px;
  height: 200px;
  background: #000;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.matrix-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.matrix-column {
  position: absolute;
  top: -100%;
  width: 20px;
  animation: matrixRain 5s linear infinite;
}

.matrix-char {
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  text-align: center;
  opacity: 0.8;
  animation: matrixFade 2s linear infinite;
  text-shadow: 0 0 5px #00ff00;
}

.matrix-content {
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-size: 2rem;
  font-weight: bold;
  z-index: 10;
  text-shadow: 
    0 0 10px #00ff00,
    0 0 20px #00ff00,
    0 0 30px #00ff00;
  animation: matrixGlow 3s ease-in-out infinite;
}

/* 矩阵雨下落动画 */
@keyframes matrixRain {
  to {
    transform: translateY(300px);
  }
}

/* 字符淡入淡出动画 */
@keyframes matrixFade {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

/* 主文字发光动画 */
@keyframes matrixGlow {
  0%, 100% { 
    text-shadow: 
      0 0 10px #00ff00,
      0 0 20px #00ff00,
      0 0 30px #00ff00;
  }
  50% { 
    text-shadow: 
      0 0 20px #00ff00,
      0 0 30px #00ff00,
      0 0 40px #00ff00,
      0 0 50px #00ff00;
  }
}

@media (max-width: 768px) {
  .matrix-rain-effect {
    width: 250px;
    height: 150px;
  }
  
  .matrix-char {
    font-size: 12px;
  }
  
  .matrix-content {
    font-size: 1.5rem;
  }
}
</style>