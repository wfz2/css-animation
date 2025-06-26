<template>
  <div class="container">
        <h1>CSS爱心动画效果</h1>
        
        <div class="heart-container">
            <div class="heart beating" title="跳动爱心"></div>
            <div class="heart blue" title="蓝色爱心"></div>
            <div class="heart purple" title="紫色爱心"></div>
            <div class="heart green" title="绿色爱心"></div>
        </div>
        
        <div class="code-container">
            <pre>
<span class="code-comment">/* 爱心基础样式 */</span>
<span class="code-selector">.heart</span> {
    <span class="code-property">position</span>: <span class="code-value">relative</span>;
    <span class="code-property">width</span>: <span class="code-value">120px</span>;
    <span class="code-property">height</span>: <span class="code-value">100px</span>;
}

<span class="code-comment">/* 使用伪元素创建爱心形状 */</span>
<span class="code-selector">.heart:before</span>,
<span class="code-selector">.heart:after</span> {
    <span class="code-property">content</span>: <span class="code-value">""</span>;
    <span class="code-property">position</span>: <span class="code-value">absolute</span>;
    <span class="code-property">top</span>: <span class="code-value">0</span>;
    <span class="code-property">width</span>: <span class="code-value">60px</span>; <span class="code-comment">/* 宽度为爱心宽度的一半 */</span>
    <span class="code-property">height</span>: <span class="code-value">96px</span>; <span class="code-comment">/* 略小于爱心高度 */</span>
    <span class="code-property">border-radius</span>: <span class="code-value">50px 50px 0 0</span>; <span class="code-comment">/* 创建半圆效果 */</span>
    <span class="code-property">background</span>: <span class="code-value">#ff6b6b</span>;
}

<span class="code-comment">/* 左侧部分旋转-45度 */</span>
<span class="code-selector">.heart:before</span> {
    <span class="code-property">left</span>: <span class="code-value">60px</span>;
    <span class="code-property">transform</span>: <span class="code-value">rotate(-45deg)</span>;
    <span class="code-property">transform-origin</span>: <span class="code-value">0 100%</span>;
}

<span class="code-comment">/* 右侧部分旋转45度 */</span>
<span class="code-selector">.heart:after</span> {
    <span class="code-property">left</span>: <span class="code-value">0</span>;
    <span class="code-property">transform</span>: <span class="code-value">rotate(45deg)</span>;
    <span class="code-property">transform-origin</span>: <span class="code-value">100% 100%</span>;
}

<span class="code-comment">/* 心跳动画 */</span>
<span class="code-selector">@keyframes heartbeat</span> {
    <span class="code-value">0%</span> { <span class="code-property">transform</span>: <span class="code-value">scale(1)</span>; }
    <span class="code-value">14%</span> { <span class="code-property">transform</span>: <span class="code-value">scale(1.15)</span>; }
    <span class="code-value">28%</span> { <span class="code-property">transform</span>: <span class="code-value">scale(1)</span>; }
    <span class="code-value">42%</span> { <span class="code-property">transform</span>: <span class="code-value">scale(1.15)</span>; }
    <span class="code-value">70%</span> { <span class="code-property">transform</span>: <span class="code-value">scale(1)</span>; }
}

<span class="code-selector">.heart.beating</span> {
    <span class="code-property">animation</span>: <span class="code-value">heartbeat 1.2s infinite</span>;
}
            </pre>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, onMounted, watch, withDefaults } from 'vue';

// 定义组件接口
interface HeartProps {
  size?: number;         // 爱心大小(px)
  isLiked?: boolean;     // 是否已点赞
  count?: number;        // 点赞数
  showCount?: boolean;   // 是否显示点赞数
  animationSpeed?: number; // 动画速度(ms)
}

// 定义props
const props = withDefaults(defineProps<HeartProps>(), {
  size: 30,
  isLiked: false,
  count: 0,
  showCount: true,
  animationSpeed: 500
});

// 定义emits
const emits = defineEmits(['update:isLiked', 'update:count', 'like']);

// 内部状态
const isLiked = ref(props.isLiked);
const count = ref(props.count);

// 点击爱心时触发
const toggleHeart = () => {
  isLiked.value = !isLiked.value;
  
  if (isLiked.value) {
    count.value += 1;
    // 添加心跳动画类
    const heart = document.querySelector('.heart-active');
    if (heart) {
      heart.classList.add('heart-beat');
      setTimeout(() => {
        heart.classList.remove('heart-beat');
      }, props.animationSpeed);
    }
  } else {
    count.value -= 1;
  }
  
  // 触发自定义事件
  emits('update:isLiked', isLiked.value);
  emits('update:count', count.value);
  emits('like', isLiked.value);
};

// 监听props变化
watch(() => props.isLiked, (newVal) => {
  isLiked.value = newVal;
});

watch(() => props.count, (newVal) => {
  count.value = newVal;
});

onMounted(() => {
  // 初始化
  isLiked.value = props.isLiked;
  count.value = props.count;
});
</script>

<style scoped>
.heart-container {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative;
}

.heart {
  position: relative;
  width: 30px;
  height: 30px;
  transition: all 0.3s ease;
}

.heart::before,
.heart::after {
  content: '';
  position: absolute;
  top: 0;
  width: 50%;
  height: 80%;
  border-radius: 50px 50px 0 0;
  background-color: #e0e0e0;
  transition: all 0.3s ease;
}

.heart::before {
  left: 0;
  transform: rotate(-45deg);
  transform-origin: 100% 100%;
}

.heart::after {
  left: 50%;
  transform: rotate(45deg);
  transform-origin: 0 100%;
}

.heart-active::before,
.heart-active::after {
  background-color: #ff4d4f;
}

.heart-beat {
  animation: heartBeat 0.5s ease-in-out;
}

@keyframes heartBeat {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}

.heart-count {
  margin-left: 8px;
  font-size: 14px;
  color: #606266;
  transition: all 0.3s ease;
}
</style>