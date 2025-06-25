<template>
  <div class="hexagon-shape">
    <div class="hexagon-inner">
      <slot>
        <div class="default-content">
          <div class="icon">⬡</div>
          <div class="text">六边形</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 六边形异形图组件
 * 使用CSS clip-path创建规则六边形
 */
.hexagon-shape {
  width: 100px;
  height: 100px;
  position: relative;
}

.hexagon-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* 六边形裁剪路径 - 6个顶点精确坐标 */
  clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
}

.hexagon-inner:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  transform: scale(1.05);
}

.default-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
}

.icon {
  font-size: 1.5rem;
}

.text {
  font-size: 0.7rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .hexagon-shape {
    width: 80px;
    height: 80px;
  }
  
  .icon {
    font-size: 1.2rem;
  }
  
  .text {
    font-size: 0.6rem;
  }
}
</style>