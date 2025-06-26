<template>
  <div class="heart-shape">
    <div class="heart-inner">
      <slot>
        <div class="default-content">
          <div class="icon">💖</div>
          <div class="text">爱心</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 爱心形异形图组件
 * 使用CSS伪元素创建爱心形状
 * 关键技术：两个圆形伪元素组合 + 旋转变换
 */
</script>

<style scoped>
.heart-shape {
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.heart-inner {
  width: 60px;
  height: 54px;
  position: relative;
  transform: rotate(-45deg);
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  border-radius: 0 0 0 50px;
  transition: all 0.3s ease;
}

/* 左上角圆形 */
.heart-inner::before {
  content: '';
  position: absolute;
  width: 30px;
  height: 48px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  border-radius: 30px 30px 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
  left: 30px;
  top: -15px;
}

/* 右上角圆形 */
.heart-inner::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 48px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  border-radius: 30px 30px 0 0;
  transform: rotate(45deg);
  transform-origin: 0 100%;
  left: 0;
  top: -15px;
}

.heart-inner:hover {
  background: linear-gradient(135deg, #ee5a52 0%, #ff6b6b 100%);
  transform: rotate(-45deg) scale(1.1);
}

.heart-inner:hover::before,
.heart-inner:hover::after {
  background: linear-gradient(135deg, #ee5a52 0%, #ff6b6b 100%);
}

.default-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  color: white;
  font-weight: bold;
  text-align: center;
  z-index: 10;
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
  .heart-shape {
    width: 80px;
    height: 80px;
  }
  
  .heart-inner {
    width: 50px;
    height: 45px;
  }
  
  .heart-inner::before,
  .heart-inner::after {
    width: 25px;
    height: 40px;
  }
  
  .icon {
    font-size: 1rem;
  }
  
  .text {
    font-size: 0.5rem;
  }
}
</style>