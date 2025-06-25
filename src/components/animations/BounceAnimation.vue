<template>
  <div class="bounce-container">
    <div class="bounce-element">
      <slot>
        <div class="default-content">
          <div class="icon">⚽</div>
          <div class="text">弹跳</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 弹跳动画组件
 * 模拟球体弹跳的弹性动画效果
 */
.bounce-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.bounce-element {
  animation: bounce 2s infinite;
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

/* 弹跳动画关键帧 - 模拟物理弹性 */
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translateY(0px);
  }
  40%, 43% {
    transform: translateY(-20px);
  }
  70% {
    transform: translateY(-10px);
  }
  90% {
    transform: translateY(-3px);
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