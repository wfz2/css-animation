<template>
  <div class="flip-container">
    <div class="flip-element">
      <slot>
        <div class="default-content">
          <div class="icon">🔄</div>
          <div class="text">翻转</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 翻转动画组件
 * 3D卡片翻转效果
 * 关键技术：perspective创建3D空间，rotateY实现Y轴旋转
 */
.flip-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  /* 设置3D透视距离，数值越小3D效果越明显 */
  perspective: 400px;
}

.flip-element {
  animation: flip 2s ease-in-out infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* 保持3D变换效果 */
  transform-style: preserve-3d;
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

/* 3D翻转动画关键帧 */
@keyframes flip {
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
  100% { transform: rotateY(360deg); }
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