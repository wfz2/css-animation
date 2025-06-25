<template>
  <div class="triangle-shape">
    <div class="triangle-inner">
      <slot>
        <div class="default-content">
          <div class="icon">🔺</div>
          <div class="text">三角形</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 三角形异形图组件
 * 使用CSS clip-path创建精确三角形
 * 关键技术：polygon函数定义三个顶点坐标
 */
.triangle-shape {
  width: 100px;
  height: 100px;
  position: relative;
}

.triangle-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  /* 等边三角形裁剪路径 - 三个顶点坐标 */
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
  padding-top: 20px; /* 调整内容位置 */
}

.triangle-inner:hover {
  background: linear-gradient(135deg, #fecfef 0%, #ff9a9e 100%);
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
  .triangle-shape {
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