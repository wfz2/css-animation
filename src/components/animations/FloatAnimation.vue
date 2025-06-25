<template>
  <div class="float-container">
    <div class="float-element">
      <slot>
        <div class="default-content">
          <div class="icon">🎈</div>
          <div class="text">浮动</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 浮动动画组件
 * 创建上下浮动的优雅动画效果
 */
.float-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.float-element {
  animation: float 3s ease-in-out infinite;
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

/* 浮动动画关键帧 */
@keyframes float {
  0%, 100% { 
    transform: translateY(0px);
  }
  50% { 
    transform: translateY(-15px);
  }
}

/* 响应式适配 */
@media (max-width: 768px) {
  .icon {
    font-size: 1.5rem;
  }
  
  .text {
    font-size: 0.7rem;
  }
}
</style>