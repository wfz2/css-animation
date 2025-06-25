<template>
  <div class="fade-in-container">
    <div class="fade-in-element">
      <slot>
        <div class="default-content">
          <div class="icon">✨</div>
          <div class="text">淡入</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 淡入动画组件
 * 渐显的淡入动画效果
 * 关键技术：opacity透明度从0到1的平滑过渡
 */
.fade-in-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.fade-in-element {
  animation: fadeIn 2s ease-in;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.fade-in-element:hover {
  animation: fadeIn 2s ease-in;
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

/* 淡入动画关键帧 - 简单而优雅的透明度变化 */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
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