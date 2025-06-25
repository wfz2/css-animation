<template>
  <div class="swing-container">
    <div class="swing-element">
      <slot>
        <div class="default-content">
          <div class="icon">🎪</div>
          <div class="text">钟摆</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 钟摆动画组件
 * 模拟钟摆摆动的物理动画效果
 * 关键技术：transform-origin设置旋转中心点
 */
.swing-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.swing-element {
  /* 设置旋转中心点为顶部中心，模拟钟摆悬挂点 */
  transform-origin: top center;
  animation: swing 2s ease-in-out infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.default-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.icon {
  font-size: 2rem;
}

.text {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

/* 钟摆动画关键帧 - 模拟物理摆动，角度逐渐减小 */
@keyframes swing {
  0%, 100% { transform: rotate(0deg); }
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
}

@media (max-width: 768px) {
  .icon {
    font-size: 1.5rem;
  }
  
  .text {
    font-size: 0.7rem;
  }
}
</style>