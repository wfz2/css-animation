<template>
  <div class="glitch-effect">
    <div class="glitch-text" :data-text="text">
      <slot>GLITCH</slot>
    </div>
  </div>
</template>

<script setup>
import { computed, useSlots } from 'vue'

const slots = useSlots()
const text = computed(() => {
  return slots.default?.()[0]?.children || 'GLITCH'
})
</script>

<style scoped>
/**
 * 故障效果组件
 * 模拟数字故障的RGB分离效果
 */
.glitch-effect {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  padding: 20px;
  border-radius: 10px;
  min-width: 120px;
  min-height: 80px;
}

.glitch-text {
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: glitch 2s infinite;
}

/* 红色通道伪元素 */
.glitch-text::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #ff0000;
  z-index: -1;
  animation: glitch-1 0.5s infinite;
}

/* 绿色通道伪元素 */
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #00ff00;
  z-index: -2;
  animation: glitch-2 0.5s infinite;
}

/* 主文本故障动画 */
@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-1px, 1px); }
  40% { transform: translate(-1px, -1px); }
  60% { transform: translate(1px, 1px); }
  80% { transform: translate(1px, -1px); }
}

/* 红色通道故障动画 */
@keyframes glitch-1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(1px, -1px); }
  40% { transform: translate(1px, 1px); }
  60% { transform: translate(-1px, -1px); }
  80% { transform: translate(-1px, 1px); }
}

/* 绿色通道故障动画 */
@keyframes glitch-2 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-1px, 1px); }
  40% { transform: translate(1px, -1px); }
  60% { transform: translate(1px, 1px); }
  80% { transform: translate(-1px, -1px); }
}

@media (max-width: 768px) {
  .glitch-text {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
  
  .glitch-effect {
    padding: 15px;
    min-width: 100px;
    min-height: 60px;
  }
}
</style>