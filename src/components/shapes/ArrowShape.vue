<template>
  <div class="arrow-shape">
    <div class="arrow-inner">
      <slot>
        <div class="default-content">
          <div class="icon">➤</div>
          <div class="text">箭头</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 箭头形异形图组件
 * 使用CSS clip-path创建指向箭头
 * 关键技术：7个坐标点定义箭头轮廓
 */
.arrow-shape {
  width: 120px;
  height: 80px;
  position: relative;
}

.arrow-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  /* 箭头裁剪路径 - 7个坐标点定义箭头形状 */
  clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
}

.arrow-inner:hover {
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  transform: translateX(10px); /* 向右移动模拟指向效果 */
}

.default-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  margin-left: -10px; /* 调整内容位置 */
}

.icon {
  font-size: 1.5rem;
}

.text {
  font-size: 0.7rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .arrow-shape {
    width: 100px;
    height: 60px;
  }
  
  .icon {
    font-size: 1.2rem;
  }
  
  .text {
    font-size: 0.6rem;
  }
}
</style>