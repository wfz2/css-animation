<template>
  <div class="slide-in-left-container">
    <div class="slide-in-left-element">
      <slot>
        <div class="default-content">
          <div class="icon">⬅️</div>
          <div class="text">左滑入</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 左侧滑入动画组件
 * 从左侧滑入的进场动画效果
 * 关键技术：translateX位移 + opacity透明度变化
 */
.slide-in-left-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.slide-in-left-element {
  animation: slideInLeft 1s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.slide-in-left-element:hover {
  animation: slideInLeft 1s ease-out;
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

/* 左侧滑入动画关键帧 - 结合位移和透明度 */
@keyframes slideInLeft {
  0% { 
    transform: translateX(-100%); 
    opacity: 0; 
  }
  100% { 
    transform: translateX(0); 
    opacity: 1; 
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