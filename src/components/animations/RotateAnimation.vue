<template>
  <div class="rotate-container">
    <div class="rotate-element">
      <slot>
        <div class="default-content">
          <div class="icon">🌀</div>
          <div class="text">旋转</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 旋转动画组件
 * 360度旋转动画效果
 * 关键技术：rotate旋转变换，linear线性缓动确保匀速
 */
.rotate-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.rotate-element {
  animation: rotate 3s linear infinite;
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

/* 旋转动画关键帧 - 完整360度旋转 */
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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