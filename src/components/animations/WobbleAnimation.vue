<template>
  <div class="wobble-container">
    <div class="wobble-element">
      <slot>
        <div class="default-content">
          <div class="icon">🤪</div>
          <div class="text">摆动</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 摆动动画组件
 * 不规则摆动的有趣动画效果
 */
.wobble-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.wobble-element {
  animation: wobble 1s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.wobble-element:hover {
  animation: wobble 1s ease-in-out;
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

/* 摆动动画关键帧 - 不规则摆动效果 */
@keyframes wobble {
  0%, 100% { transform: translateX(0%) rotate(0deg); }
  15% { transform: translateX(-25%) rotate(-5deg); }
  30% { transform: translateX(20%) rotate(3deg); }
  45% { transform: translateX(-15%) rotate(-3deg); }
  60% { transform: translateX(10%) rotate(2deg); }
  75% { transform: translateX(-5%) rotate(-1deg); }
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