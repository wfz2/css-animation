<template>
  <div class="slide-in-right-container">
    <div class="slide-in-right-element">
      <slot>
        <div class="default-content">
          <div class="icon">➡️</div>
          <div class="text">右滑入</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 右侧滑入动画组件
 * 从右侧滑入的进场动画效果
 */
.slide-in-right-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.slide-in-right-element {
  animation: slideInRight 1s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.slide-in-right-element:hover {
  animation: slideInRight 1s ease-out;
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

@keyframes slideInRight {
  0% { 
    transform: translateX(100%); 
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