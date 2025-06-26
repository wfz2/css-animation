import type { ComponentInfo } from '../types'

/**
 * 组件库数据配置
 * 包含所有组件的详细信息、代码示例和使用说明
 * 每个组件包含：基本信息、演示代码、实现原理讲解
 */
export const componentList: ComponentInfo[] = [
  // ==================== 基础动画组件 ====================
  {
    id: 'float-animation',
    name: '浮动动画',
    description: '元素上下浮动的优雅动画效果，模拟轻盈漂浮感',
    category: 'animation',
    difficulty: 'basic',
    tags: ['浮动', '基础', '循环', '优雅'],
    component: 'FloatAnimation',
    code: `<template>
  <div class="float-container">
    <div class="float-element">
      <slot>
        <div class="default-content">
          <div class="icon">🎈</div>
          <div class="text">浮动</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 浮动动画组件
 * 创建上下浮动的优雅动画效果
 */
.float-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.float-element {
  /* 3秒循环，ease-in-out缓动函数确保自然流畅 */
  animation: float 3s ease-in-out infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

/* 浮动动画关键帧 */
@keyframes float {
  0%, 100% { 
    transform: translateY(0px); 
  }
  50% { 
    transform: translateY(-15px); 
  }
}
</style>`,
    explanation: `【技术原理】\n- 利用transform属性（如translateY）实现元素上下浮动，避免重排，提升性能。\n- 通过@keyframes定义动画关键帧，灵活控制动画过程。\n- 使用animation属性实现动画的循环和平滑过渡。\n\n【实现要点】\n1. 仅用transform: translateY实现上下浮动，动画流畅。\n2. 3秒周期，ease-in-out缓动，模拟自然漂浮。\n3. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适用于需要轻盈、灵动感的UI元素，如图标、按钮、卡片等。\n- 动画参数（时长、幅度、缓动）可灵活调整，适配不同场景。\n\n【性能优化】\n- 只用transform和opacity等GPU加速属性，动画不卡顿。\n- 避免top/left等影响布局的属性，提升渲染效率。\n- 关键帧数量适中，兼顾效果与性能。\n\n【应用场景】\n- 图标、按钮、卡片等UI元素的动效增强。\n- 交互反馈、加载指示、装饰性动画等。\n- 适用于Web、移动端等多种平台。\n\n【注意事项】\n- 动画时长、幅度需适度，过快或过慢影响体验。\n- 可结合JS动态控制动画参数，实现更复杂的交互。\n- clip-path等部分属性兼容性需关注。`
  },

  {
    id: 'bounce-animation',
    name: '弹跳动画',
    description: '模拟球体弹跳的弹性动画效果，具有物理真实感',
    category: 'animation',
    difficulty: 'basic',
    tags: ['弹跳', '弹性', '物理', '循环'],
    component: 'BounceAnimation',
    code: `<template>
  <div class="bounce-container">
    <div class="bounce-element">
      <slot>
        <div class="default-content">
          <div class="icon">⚽</div>
          <div class="text">弹跳</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/**
 * 弹跳动画组件
 * 模拟球体弹跳的弹性动画效果
 */
.bounce-element {
  animation: bounce 2s infinite;
}

/* 弹跳动画关键帧 - 模拟物理弹性 */
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translateY(0px);
  }
  40%, 43% {
    transform: translateY(-20px);
  }
  70% {
    transform: translateY(-10px);
  }
  90% {
    transform: translateY(-3px);
  }
}
</style>`,
    explanation: `【技术原理】\n- 通过CSS3 @keyframes关键帧模拟真实物理弹跳过程，利用transform: translateY实现垂直位移。\n- 多关键帧设计，递减弹跳高度，模拟能量损失和重力加速度。\n\n【实现要点】\n1. 7个关键帧，完整还原弹跳周期。\n2. 弹跳高度依次递减（-20px、-10px、-3px），符合物理能量衰减规律。\n3. 地面停留时间更长，增强真实感。\n4. 动画曲线通过关键帧密度控制速度变化，上升和下降均为快速运动。\n\n【设计思路】\n- 结构简洁，便于复用和扩展。\n- 适合球体、按钮等需要弹性反馈的UI元素。\n\n【性能优化】\n- 仅使用transform属性，充分利用GPU加速，动画流畅不卡顿。\n- 避免使用影响布局的top/left属性，提升渲染效率。\n\n【应用场景】\n- 加载指示器、交互反馈、游戏动画等需要弹性动效的场合。\n\n【注意事项】\n- 弹跳幅度和节奏需适度调整，避免过快或过慢影响体验。\n- 关键帧数量不宜过多，兼顾性能与效果。`
  },

  {
    id: 'pulse-animation',
    name: '脉冲动画',
    description: '心跳般的缩放脉冲动画效果，富有生命力',
    category: 'animation',
    difficulty: 'basic',
    tags: ['脉冲', '缩放', '心跳', '生命力'],
    component: 'PulseAnimation',
    code: `<template>
  <div class="pulse-container">
    <div class="pulse-element">
      <slot>
        <div class="default-content">
          <div class="icon">💗</div>
          <div class="text">脉冲</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.pulse-element {
  animation: pulse 2s ease-in-out infinite;
}

/* 脉冲动画关键帧 - 模拟心跳节奏 */
@keyframes pulse {
  0%, 100% { 
    transform: scale(1);
    opacity: 1;
  }
  50% { 
    transform: scale(1.2);
    opacity: 0.8;
  }
}
</style>`,
    explanation: `【技术原理】\n- 通过transform: scale和opacity属性实现元素的缩放和透明度变化，模拟心跳脉冲。\n- 使用@keyframes定义动画节奏，结合ease-in-out缓动，增强自然感。\n\n【实现要点】\n1. scale变换：从1.0缩放到1.2，产生20%放大效果。\n2. opacity变化：透明度从1.0降到0.8，增强脉冲感。\n3. 2秒周期，模拟心跳频率。\n\n【设计思路】\n- 模拟生物心跳的节奏感，结合大小和透明度变化，增强视觉冲击。\n- 适合需要表达"活力""重要性"的UI元素。\n\n【性能优化】\n- 仅用transform和opacity，动画流畅不卡顿。\n- 关键帧数量适中，兼顾性能与效果。\n\n【应用场景】\n- 重要按钮、通知提醒、徽章等需要突出显示的场景。\n\n【注意事项】\n- 动画幅度和节奏需适度，避免过度干扰用户。`
  },

  {
    id: 'spin-animation',
    name: '旋转动画',
    description: '连续旋转的循环动画效果，常用于加载状态',
    category: 'animation',
    difficulty: 'basic',
    tags: ['旋转', '循环', '加载', '连续'],
    component: 'SpinAnimation',
    code: `<template>
  <div class="spin-container">
    <div class="spin-element">
      <slot>
        <div class="default-content">
          <div class="icon">🔄</div>
          <div class="text">旋转</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.spin-element {
  animation: spin 2s linear infinite;
}

/* 旋转动画关键帧 */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>`,
    explanation: `【技术原理】\n- 通过transform: rotate实现元素的360度旋转。\n- 使用@keyframes定义旋转动画，linear缓动确保匀速。\n\n【实现要点】\n1. 360度完整旋转，2秒周期，linear匀速。\n2. infinite无限循环，适合长时间显示。\n3. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适用于加载指示器、刷新按钮、装饰性旋转元素等。\n- 动画参数可灵活调整。\n\n【性能优化】\n- 仅用transform: rotate，GPU加速，性能最优。\n- 不触发重排重绘，兼容性极佳。\n\n【应用场景】\n- 加载动画、刷新按钮、装饰性元素等。\n\n【注意事项】\n- 动画速度需适中，避免过快或过慢影响体验。`
  },

  {
    id: 'shake-animation',
    name: '摇摆动画',
    description: '左右摇摆的震动动画效果，常用于错误提示',
    category: 'animation',
    difficulty: 'basic',
    tags: ['摇摆', '震动', '警告', '错误'],
    component: 'ShakeAnimation',
    code: `<template>
  <div class="shake-container">
    <div class="shake-element">
      <slot>
        <div class="default-content">
          <div class="icon">⚠️</div>
          <div class="text">摇摆</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.shake-element {
  animation: shake 0.8s ease-in-out;
}

/* 摇摆动画关键帧 - 模拟震动效果 */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
  20%, 40%, 60%, 80% { transform: translateX(8px); }
}
</style>`,
    explanation: `【技术原理】\n- 通过transform: translateX实现元素的左右位移，模拟震动。\n- 使用@keyframes定义高频率关键帧，创造快速震动效果。\n\n【实现要点】\n1. 10个关键帧，0.8秒内完成快速震动。\n2. 左右各8px对称位移，幅度适中。\n3. 奇偶帧交替方向，模拟真实摇头动作。\n\n【设计思路】\n- 适合错误提示、警告等需要引起注意的场景。\n- 动画短暂，避免干扰用户。\n\n【性能优化】\n- 仅用transform属性，动画流畅不卡顿。\n- 关键帧数量适中，兼顾效果与性能。\n\n【应用场景】\n- 表单验证失败、操作错误等交互反馈。\n\n【注意事项】\n- 动画持续时间不宜过长，避免用户不适。`
  },

  // ==================== 异形图组件 ====================
  {
    id: 'hexagon-shape',
    name: '六边形',
    description: '规则六边形图形，具有科技感和现代感',
    category: 'shape',
    difficulty: 'basic',
    tags: ['六边形', '几何', '多边形', '科技'],
    component: 'HexagonShape',
    code: `<template>
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
.hexagon-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* 六边形裁剪路径 - 6个顶点精确坐标 */
  clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
</style>`,
    explanation: `【技术原理】\n- 利用clip-path: polygon实现六边形裁剪，百分比坐标确保响应式。\n- 通过flex布局实现内容居中。\n\n【实现要点】\n1. clip-path定义6个顶点，顺时针排列，形成规则六边形。\n2. 渐变背景增强科技感。\n3. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合蜂窝布局、科技界面等需要多边形元素的场景。\n- 百分比坐标确保在不同尺寸下都能保持形状。\n\n【性能优化】\n- 纯CSS实现，无需图片或SVG，渲染高效。\n- clip-path兼容性良好，适合现代浏览器。\n\n【应用场景】\n- 科技公司Logo、游戏界面、数据可视化图表等。\n\n【注意事项】\n- 旧版浏览器对clip-path支持有限，需注意兼容性。`
  },

  {
    id: 'star-shape',
    name: '星形',
    description: '五角星图形，常用于评分和收藏功能',
    category: 'shape',
    difficulty: 'intermediate',
    tags: ['星形', '五角星', '评分', '收藏'],
    component: 'StarShape',
    code: `<template>
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
.star-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  /* 五角星裁剪路径 - 10个坐标点（5个外顶点+5个内凹点） */
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
</style>`,
    explanation: `【技术原理】\n- 利用clip-path: polygon实现五角星裁剪，10个坐标点精确计算。\n- 渐变背景提升视觉层次。\n\n【实现要点】\n1. 5个外顶点+5个内凹点，黄金比例分布。\n2. 百分比坐标，响应式适配。\n3. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合评分、收藏、奖励等需要星形元素的场景。\n- 坐标顺序影响填充效果，需精确排列。\n\n【性能优化】\n- 纯CSS实现，无需图片或SVG，渲染高效。\n- clip-path兼容性良好。\n\n【应用场景】\n- 评分系统、收藏功能、奖励徽章等。\n\n【注意事项】\n- 坐标计算复杂，建议使用工具辅助生成。\n- 旧版浏览器对clip-path支持有限。`
  },

  {
    id: 'heart-shape',
    name: '爱心形状',
    description: '浪漫的爱心图形，常用于点赞和收藏功能',
    category: 'shape',
    difficulty: 'intermediate',
    tags: ['爱心', '浪漫', '点赞', '收藏'],
    component: 'HeartShape',
    code: `<template>
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

<style scoped>
.heart-inner {
  width: 60px;
  height: 54px;
  position: relative;
  transform: rotate(-45deg);
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  border-radius: 0 0 0 50px;
}

.heart-inner::before,
.heart-inner::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 48px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  border-radius: 30px 30px 0 0;
}

.heart-inner::before {
  transform: rotate(-45deg);
  transform-origin: 0 100%;
  left: 30px;
  top: -15px;
}

.heart-inner::after {
  transform: rotate(45deg);
  transform-origin: 0 100%;
  left: 0;
  top: -15px;
}
</style>`,
    explanation: `【技术原理】\n- 利用CSS伪元素和旋转变换创建爱心形状。\n- 主体元素作为底部，两个伪元素作为上方的圆形部分。\n\n【实现要点】\n1. 主体旋转-45度，形成菱形底部。\n2. 两个伪元素分别旋转±45度，形成圆形顶部。\n3. 精确的尺寸和位置计算，确保形状完美。\n\n【设计思路】\n- 适合社交应用、情感表达等场景。\n- 可配合动画实现心跳效果。\n\n【性能优化】\n- 纯CSS实现，无需图片或SVG。\n- 伪元素复用，减少DOM节点。\n\n【应用场景】\n- 点赞按钮、收藏功能、情感表达等。\n\n【注意事项】\n- 尺寸比例需精确计算，确保形状美观。`
  },

  // ==================== 炫酷效果组件 ====================
  {
    id: 'neon-text-effect',
    name: '霓虹文字效果',
    description: '发光霓虹灯文字效果，具有强烈的视觉冲击力',
    category: 'effect',
    difficulty: 'advanced',
    tags: ['霓虹', '发光', '文字', '夜店'],
    component: 'NeonTextEffect',
    code: `<template>
  <div class="neon-text-effect">
    <span class="neon-text">
      <slot>NEON</slot>
    </span>
  </div>
</template>

<style scoped>
.neon-text {
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  /* 霓虹发光效果 - 多层阴影叠加 */
  animation: neon-glow 2s ease-in-out infinite alternate;
}

/* 霓虹发光动画 - 在两种发光强度间切换 */
@keyframes neon-glow {
  from {
    text-shadow: 
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 15px #0073e6,
      0 0 20px #0073e6,
      0 0 35px #0073e6,
      0 0 40px #0073e6;
  }
  to {
    text-shadow: 
      0 0 2px #fff,
      0 0 5px #fff,
      0 0 8px #0073e6,
      0 0 12px #0073e6,
      0 0 18px #0073e6,
      0 0 25px #0073e6;
  }
}
</style>`,
    explanation: `【技术原理】\n- 利用多层text-shadow叠加实现霓虹发光效果。\n- @keyframes动画切换不同发光强度，模拟霓虹灯闪烁。\n\n【实现要点】\n1. 多层白色和蓝色阴影，营造立体发光感。\n2. alternate动画方向，2秒周期，强弱光交替。\n3. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合夜店风格、科幻主题、品牌展示等需要强烈视觉冲击的场合。\n- 动画参数可灵活调整。\n\n【性能优化】\n- 仅用text-shadow和动画属性，性能优良。\n- 纯CSS实现，无需图片或SVG。\n\n【应用场景】\n- 夜店风格标题、游戏界面、品牌LOGO等。\n\n【注意事项】\n- 阴影层数和颜色可根据实际需求调整。\n- 过多阴影可能影响性能，需适度。`
  },

  {
    id: 'glitch-effect',
    name: '故障效果',
    description: '数字故障风格的动画效果，具有赛博朋克风格',
    category: 'effect',
    difficulty: 'advanced',
    tags: ['故障', '数字', '赛博朋克', 'RGB'],
    component: 'GlitchEffect',
    code: `<template>
  <div class="glitch-effect">
    <div class="glitch-text" :data-text="text">
      <slot>GLITCH</slot>
    </div>
  </div>
</template>

<script setup>
import { computed, useSlots } from 'vue'

const slots = useSlots()
const text = computed(() => {
  return slots.default?.()[0]?.children || 'GLITCH'
})
</script>

<style scoped>
.glitch-text {
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: glitch 2s infinite;
}

/* 红色通道伪元素 */
.glitch-text::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #ff0000;
  z-index: -1;
  animation: glitch-1 0.5s infinite;
}

/* 绿色通道伪元素 */
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #00ff00;
  z-index: -2;
  animation: glitch-2 0.5s infinite;
}
</style>`,
    explanation: `【技术原理】\n- 利用多层文本（主文本+伪元素）和不同动画轨迹，模拟数字设备故障时的RGB分离现象。\n- @keyframes动画实现错位和抖动效果。\n\n【实现要点】\n1. 主文本为白色，::before为红色，::after为绿色，三层错位。\n2. 主动画2秒周期，分通道动画0.5秒周期，增强随机感。\n3. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合赛博朋克、科技故障、数字干扰等风格场景。\n- 动画参数可灵活调整。\n\n【性能优化】\n- 仅用transform和color属性，动画流畅不卡顿。\n- 纯CSS实现，无需图片或SVG。\n\n【应用场景】\n- 赛博朋克风格标题、科技感装饰、数字干扰特效等。\n\n【注意事项】\n- 动画幅度和节奏需适度，避免影响可读性。`
  },

  {
    id: 'particle-effect',
    name: '粒子效果',
    description: '动态粒子浮动效果，营造梦幻氛围',
    category: 'effect',
    difficulty: 'advanced',
    tags: ['粒子', '浮动', '动态', '梦幻'],
    component: 'ParticleEffect',
    code: `<template>
  <div class="particle-effect">
    <div class="particle-container">
      <div 
        v-for="i in particleCount" 
        :key="i" 
        class="particle"
        :style="getParticleStyle(i)"
      ></div>
    </div>
    <div class="content">
      <slot>粒子</slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  particleCount: {
    type: Number,
    default: 15
  }
})

const getParticleStyle = (index) => {
  const delay = Math.random() * 3
  const duration = 3 + Math.random() * 2
  const left = Math.random() * 100
  const size = 2 + Math.random() * 4
  
  return {
    left: left + '%',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    width: size + 'px',
    height: size + 'px'
  }
}
</script>

<style scoped>
.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  bottom: -10px;
  animation: particleFloat 5s ease-in-out infinite;
}

/* 粒子浮动动画 - 从底部浮到顶部并消失 */
@keyframes particleFloat {
  0% { 
    transform: translateY(0px) translateX(0px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% { 
    transform: translateY(-80px) translateX(10px);
    opacity: 0.8;
  }
  90% {
    opacity: 1;
  }
  100% { 
    transform: translateY(-160px) translateX(-10px);
    opacity: 0;
  }
}
</style>`,
    explanation: `【技术原理】\n- 利用大量小元素的CSS动画，模拟粒子系统的动态浮动。\n- 随机参数控制每个粒子的延迟、持续时间、位置和大小。\n\n【实现要点】\n1. 每个粒子参数（延迟、持续、位置、大小）均为随机生成，避免同步。\n2. 关键帧控制粒子从底部浮到顶部并淡出。\n3. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合营造梦幻、庆祝、氛围感强的背景。\n- 粒子数量和动画参数可灵活调整。\n\n【性能优化】\n- 仅用transform和opacity，动画流畅不卡顿。\n- 合理控制粒子数量，兼顾效果与性能。\n\n【应用场景】\n- 背景装饰、成功反馈、庆祝动画、加载动画等。\n\n【注意事项】\n- 粒子数量过多可能影响性能，需适度。\n- 动画参数可根据实际需求调整。`
  }
]