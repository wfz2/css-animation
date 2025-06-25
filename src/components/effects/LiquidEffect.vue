<template>
  <div class="liquid-effect">
    <div class="liquid-blob">
      <div class="liquid-content">
        <slot>LIQUID</slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
/**
 * 液体效果组件
 * 模拟液体流动的动态变形效果
 * 关键技术：border-radius动态变化 + 旋转变换
 */
.liquid-effect {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
}

.liquid-blob {
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00);
  background-size: 400% 400%;
  /* 动态边框半径创造液体效果 */
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: liquidWave 4s ease-in-out infinite, liquidColor 6s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.liquid-content {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 10;
  text-align: center;
}

/* 液体波浪动画 - 复杂的边框半径变化 */
@keyframes liquidWave {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: rotate(0deg);
  }
  25% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    transform: rotate(90deg);
  }
  50% {
    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    transform: rotate(180deg);
  }
  75% {
    border-radius: 40% 70% 60% 30% / 70% 40% 60% 30%;
    transform: rotate(270deg);
  }
}

/* 液体颜色变化动画 */
@keyframes liquidColor {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@media (max-width: 768px) {
  .liquid-effect {
    width: 150px;
    height: 150px;
  }
  
  .liquid-blob {
    width: 120px;
    height: 120px;
  }
  
  .liquid-content {
    font-size: 1rem;
  }
}
</style>