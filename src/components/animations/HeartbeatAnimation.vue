<template>
  <div class="heartbeat-container">
    <div class="heartbeat-element">
      <slot>
        <div class="default-content">
          <div class="icon">💓</div>
          <div class="text">心跳</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 心跳动画组件
 * 模拟心跳节奏的缩放动画
 * 关键技术：不规则的缩放节奏模拟真实心跳
 */
.heartbeat-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.heartbeat-element {
  animation: heartbeat 1.5s ease-in-out infinite;
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
  color: #ff6b6b;
}

.text {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

/* 心跳动画关键帧 - 模拟真实心跳的双重跳动 */
@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
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