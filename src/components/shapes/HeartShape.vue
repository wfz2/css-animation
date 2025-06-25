<template>
  <div class="heart-shape">
    <div class="heart-inner">
      <div class="heart-content">
        <slot>
          <div class="default-content">
            <div class="icon">💝</div>
            <div class="text">心形</div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
/**
 * 心形异形图组件
 * 使用CSS伪元素和圆角创建心形
 */
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
  height: 60px;
  position: relative;
  transform: rotate(-45deg);
}

.heart-inner:before,
.heart-inner:after {
  content: '';
  width: 60px;
  height: 60px;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  border-radius: 60px 60px 0 0;
  transform-origin: 0 100%;
}

.heart-inner:after {
  left: -50%;
  transform: rotate(-90deg);
  transform-origin: 100% 100%;
}

.heart-inner:before {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
}

.heart-inner:hover:before,
.heart-inner:hover:after {
  background: linear-gradient(135deg, #ee5a52 0%, #ff6b6b 100%);
}

.heart-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
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
  .heart-shape {
    width: 80px;
    height: 80px;
  }
  
  .heart-inner {
    width: 50px;
    height: 50px;
  }
  
  .heart-inner:before,
  .heart-inner:after {
    width: 50px;
    height: 50px;
  }
  
  .icon {
    font-size: 1rem;
  }
  
  .text {
    font-size: 0.5rem;
  }
}
</style>