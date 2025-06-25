<template>
  <div class="cloud-shape">
    <div class="cloud-inner">
      <slot>
        <div class="default-content">
          <div class="icon">☁️</div>
          <div class="text">云朵</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 云朵形异形图组件
 * 使用多个圆形伪元素组合创建云朵效果
 * 关键技术：主体 + 4个伪元素圆形组合
 */
.cloud-shape {
  width: 120px;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cloud-inner {
  width: 80px;
  height: 40px;
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  border-radius: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
}

/* 云朵的左侧大圆 */
.cloud-inner::before {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  border-radius: 50%;
  top: -25px;
  left: 10px;
}

/* 云朵的右侧小圆 */
.cloud-inner::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  border-radius: 50%;
  top: -15px;
  right: 15px;
}

.cloud-inner:hover {
  background: linear-gradient(135deg, #0984e3 0%, #74b9ff 100%);
  transform: translateY(-5px);
}

.cloud-inner:hover::before,
.cloud-inner:hover::after {
  background: linear-gradient(135deg, #0984e3 0%, #74b9ff 100%);
}

.default-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  z-index: 10;
}

.icon {
  font-size: 1.2rem;
}

.text {
  font-size: 0.6rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .cloud-shape {
    width: 100px;
    height: 60px;
  }
  
  .cloud-inner {
    width: 60px;
    height: 30px;
  }
  
  .cloud-inner::before {
    width: 40px;
    height: 40px;
    top: -20px;
  }
  
  .cloud-inner::after {
    width: 25px;
    height: 25px;
    top: -12px;
  }
  
  .icon {
    font-size: 1rem;
  }
  
  .text {
    font-size: 0.5rem;
  }
}
</style>