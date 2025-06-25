<template>
  <div class="shake-container">
    <div class="shake-element">
      <slot>
        <div class="default-content">
          <div class="icon">⚠️</div>
          <div class="text">摇摆</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 摇摆动画组件
 * 左右摇摆的震动动画效果，常用于错误提示
 */
.shake-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.shake-element {
  animation: shake 0.8s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.shake-element:hover {
  animation: shake 0.8s ease-in-out;
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

/* 摇摆动画关键帧 - 模拟震动效果 */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
  20%, 40%, 60%, 80% { transform: translateX(8px); }
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