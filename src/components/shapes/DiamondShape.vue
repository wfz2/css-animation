<template>
  <div class="diamond-shape">
    <div class="diamond-inner">
      <div class="diamond-content">
        <slot>
          <div class="default-content">
            <div class="icon">💎</div>
            <div class="text">钻石</div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
/**
 * 钻石形异形图组件
 * 使用CSS变换创建钻石切割效果
 * 关键技术：rotate旋转 + 多层渐变背景
 */
.diamond-shape {
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.diamond-inner {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* 旋转45度创建菱形效果 */
  transform: rotate(45deg);
  position: relative;
  transition: all 0.3s ease;
}

.diamond-inner:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  transform: rotate(45deg) scale(1.1);
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
}

/* 钻石切面效果 */
.diamond-inner::before {
  content: '';
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.3), transparent);
  transform: rotate(-45deg);
}

.diamond-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  color: white;
  font-weight: bold;
  text-align: center;
  z-index: 10;
}

.default-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.icon {
  font-size: 1.2rem;
}

.text {
  font-size: 0.6rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .diamond-shape {
    width: 80px;
    height: 80px;
  }
  
  .diamond-inner {
    width: 60px;
    height: 60px;
  }
  
  .icon {
    font-size: 1rem;
  }
  
  .text {
    font-size: 0.5rem;
  }
}
</style>