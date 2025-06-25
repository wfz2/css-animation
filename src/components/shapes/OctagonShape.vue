<template>
  <div class="octagon-shape">
    <div class="octagon-inner">
      <slot>
        <div class="default-content">
          <div class="icon">🛑</div>
          <div class="text">八边形</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 八边形异形图组件
 * 使用CSS clip-path创建规则八边形
 * 关键技术：8个顶点坐标精确计算，确保规则八边形
 */
.octagon-shape {
  width: 100px;
  height: 100px;
  position: relative;
}

.octagon-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  /* 规则八边形裁剪路径 - 8个顶点坐标 */
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
}

.octagon-inner:hover {
  background: linear-gradient(135deg, #fee140 0%, #fa709a 100%);
  transform: scale(1.05) rotate(22.5deg); /* 旋转22.5度展示不同角度 */
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
  .octagon-shape {
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