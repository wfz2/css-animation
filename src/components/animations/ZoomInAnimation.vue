<template>
  <div class="zoom-in-container">
    <div class="zoom-in-element">
      <slot>
        <div class="default-content">
          <div class="icon">🔍</div>
          <div class="text">放大</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 放大动画组件
 * 从小到大的缩放动画效果
 * 关键技术：scale缩放变换 + opacity透明度
 */
.zoom-in-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.zoom-in-element {
  animation: zoomIn 1s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.zoom-in-element:hover {
  animation: zoomIn 1s ease-out;
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

/* 放大动画关键帧 - 从0缩放到正常大小 */
@keyframes zoomIn {
  0% { 
    transform: scale(0); 
    opacity: 0; 
  }
  100% { 
    transform: scale(1); 
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