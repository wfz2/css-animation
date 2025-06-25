<template>
  <div class="pulse-container">
    <div class="pulse-element">
      <slot>
        <div class="default-content">
          <div class="icon">💗</div>
          <div class="text">脉冲</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 脉冲动画组件
 * 心跳般的缩放脉冲动画效果
 */
.pulse-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.pulse-element {
  animation: pulse 2s ease-in-out infinite;
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

/* 脉冲动画关键帧 - 模拟心跳节奏 */
@keyframes pulse {
  0%, 100% { 
    transform: scale(1);
    opacity: 1;
  }
  50% { 
    transform: scale(1.2);
    opacity: 0.8;
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