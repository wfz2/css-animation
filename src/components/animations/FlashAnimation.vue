<template>
  <div class="flash-container">
    <div class="flash-element">
      <slot>
        <div class="default-content">
          <div class="icon">⚡</div>
          <div class="text">闪烁</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 闪烁动画组件
 * 快速闪烁的提醒效果
 * 关键技术：opacity快速变化 + 发光效果
 */
.flash-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.flash-element {
  animation: flash 2s ease-in-out infinite;
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
  color: #ffd700;
}

.text {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

/* 闪烁动画关键帧 - 快速透明度变化 + 阴影效果 */
@keyframes flash {
  0%, 50%, 100% { 
    opacity: 1; 
    box-shadow: 0 0 0 rgba(255, 215, 0, 0);
  }
  25%, 75% { 
    opacity: 0; 
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
  }
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