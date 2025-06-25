<template>
  <div class="star-shape">
    <div class="star-inner">
      <slot>
        <div class="default-content">
          <div class="icon">⭐</div>
          <div class="text">星形</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 星形异形图组件
 * 使用CSS clip-path创建五角星
 */
.star-shape {
  width: 100px;
  height: 100px;
  position: relative;
}

.star-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  /* 五角星裁剪路径 - 10个坐标点（5个外顶点+5个内凹点） */
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
}

.star-inner:hover {
  background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
  transform: scale(1.05) rotate(18deg);
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
  .star-shape {
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