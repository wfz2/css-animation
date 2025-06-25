<template>
  <div class="rubber-band-container">
    <div class="rubber-band-element">
      <slot>
        <div class="default-content">
          <div class="icon">🎈</div>
          <div class="text">橡皮筋</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 橡皮筋动画组件
 * 模拟橡皮筋拉伸回弹的弹性效果
 * 关键技术：scaleX和scaleY的不同步变化创造拉伸效果
 */
.rubber-band-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.rubber-band-element {
  animation: rubberBand 1s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.rubber-band-element:hover {
  animation: rubberBand 1s ease-out;
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

/* 橡皮筋动画关键帧 - X轴和Y轴不同步缩放 */
@keyframes rubberBand {
  0% { transform: scale(1, 1); }
  30% { transform: scale(1.25, 0.75); }
  40% { transform: scale(0.75, 1.25); }
  50% { transform: scale(1.15, 0.85); }
  65% { transform: scale(0.95, 1.05); }
  75% { transform: scale(1.05, 0.95); }
  100% { transform: scale(1, 1); }
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