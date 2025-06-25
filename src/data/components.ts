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

  {
    id: 'wobble-animation',
    name: '摆动动画',
    description: '不规则摆动的有趣动画效果，富有个性',
    category: 'animation',
    difficulty: 'intermediate',
    tags: ['摆动', '有趣', '不规则', '个性'],
    component: 'WobbleAnimation',
    code: `<template>
  <div class="wobble-container">
    <div class="wobble-element">
      <slot>
        <div class="default-content">
          <div class="icon">🤪</div>
          <div class="text">摆动</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.wobble-element {
  animation: wobble 1s ease-in-out;
}

/* 摆动动画关键帧 - 不规则摆动效果 */
@keyframes wobble {
  0%, 100% { transform: translateX(0%) rotate(0deg); }
  15% { transform: translateX(-25%) rotate(-5deg); }
  30% { transform: translateX(20%) rotate(3deg); }
  45% { transform: translateX(-15%) rotate(-3deg); }
  60% { transform: translateX(10%) rotate(2deg); }
  75% { transform: translateX(-5%) rotate(-1deg); }
}
</style>`,
    explanation: `【技术原理】\n- 结合transform: translateX和rotate实现元素的水平位移与旋转，模拟不规则摆动。\n- 通过@keyframes定义递减幅度和不规则节奏，增强真实感。\n\n【实现要点】\n1. translateX+rotate组合，创造复杂摆动效果。\n2. 位移和旋转角度逐渐减小，模拟阻尼衰减。\n3. 关键帧时间点不均匀分布，增强趣味性。\n\n【设计思路】\n- 适合需要活泼、有趣感觉的界面元素。\n- 比简单摇摆更具表现力。\n\n【性能优化】\n- 仅用transform属性，动画流畅不卡顿。\n- 关键帧数量适中，兼顾性能与效果。\n\n【应用场景】\n- 装饰性动画、趣味交互等。\n\n【注意事项】\n- 动画幅度和节奏需适度，避免过度干扰。`
  },

  {
    id: 'swing-animation',
    name: '钟摆动画',
    description: '模拟钟摆摆动的物理动画效果',
    category: 'animation',
    difficulty: 'basic',
    tags: ['钟摆', '摆动', '物理', '旋转'],
    component: 'SwingAnimation',
    code: `<template>
  <div class="swing-container">
    <div class="swing-element">
      <slot>
        <div class="default-content">
          <div class="icon">🎪</div>
          <div class="text">钟摆</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.swing-element {
  /* 设置旋转中心点为顶部中心，模拟钟摆悬挂点 */
  transform-origin: top center;
  animation: swing 2s ease-in-out infinite;
}

/* 钟摆动画关键帧 - 模拟物理摆动，角度逐渐减小 */
@keyframes swing {
  0%, 100% { transform: rotate(0deg); }
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
}
</style>`,
    explanation: `【技术原理】\n- 通过transform-origin设置旋转中心，结合rotate实现钟摆运动。\n- 关键帧角度递减，模拟物理衰减。\n\n【实现要点】\n1. transform-origin: top center，模拟悬挂点。\n2. 角度递减，正负交替，符合物理规律。\n3. 2秒周期，ease-in-out缓动。\n\n【设计思路】\n- 适合表现"等待""思考"或装饰性动画。\n- 结构简洁，易于扩展。\n\n【性能优化】\n- 仅用transform: rotate，动画流畅不卡顿。\n- 关键帧数量适中，兼顾效果与性能。\n\n【应用场景】\n- 等待提示、装饰性元素等。\n\n【注意事项】\n- 动画幅度和节奏需适度，避免过度干扰。`
  },

  {
    id: 'flip-animation',
    name: '翻转动画',
    description: '3D卡片翻转效果，具有立体感',
    category: 'animation',
    difficulty: 'intermediate',
    tags: ['翻转', '3D', '卡片', '立体'],
    component: 'FlipAnimation',
    code: `<template>
  <div class="flip-container">
    <div class="flip-element">
      <slot>
        <div class="default-content">
          <div class="icon">🔄</div>
          <div class="text">翻转</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.flip-container {
  /* 设置3D透视距离，数值越小3D效果越明显 */
  perspective: 400px;
}

.flip-element {
  animation: flip 2s ease-in-out infinite;
  /* 保持3D变换效果 */
  transform-style: preserve-3d;
}

/* 3D翻转动画关键帧 */
@keyframes flip {
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
  100% { transform: rotateY(360deg); }
}
</style>`,
    explanation: `【技术原理】\n- 利用CSS3 3D变换（rotateY）和perspective属性实现立体翻转。\n- transform-style: preserve-3d保持3D效果。\n\n【实现要点】\n1. perspective: 400px，增强3D立体感。\n2. rotateY实现水平翻转，完整360°。\n3. 2秒周期，ease-in-out缓动。\n\n【设计思路】\n- 适合卡片、图片等需要立体感的UI元素。\n- 动画参数可灵活调整。\n\n【性能优化】\n- 3D变换启用硬件加速，动画流畅。\n- 适度使用，避免GPU资源消耗过大。\n\n【应用场景】\n- 卡片翻面、图片展示、交互反馈等。\n\n【注意事项】\n- 3D动画对性能有一定要求，移动端需注意流畅性。`
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
  },

  // ==================== 基础动画组件补充 ====================
  {
    id: 'fade-in-animation',
    name: '淡入动画',
    description: '元素逐渐显现的淡入动画效果',
    category: 'animation',
    difficulty: 'basic',
    tags: ['淡入', '透明度', '基础', '渐变'],
    component: 'FadeInAnimation',
    code: `<template>\n  <div class="fade-in-container">\n    <div class="fade-in-element">\n      <slot>\n        <div class="default-content">\n          <div class="icon">🌫️</div>\n          <div class="text">淡入</div>\n        </div>\n      </slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.fade-in-element {\n  animation: fadeIn 1.5s ease-in;\n}\n@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n</style>`,
    explanation: `【技术原理】\n- 通过opacity属性和@keyframes实现元素淡入。\n- animation属性控制动画时长和缓动。\n\n【实现要点】\n1. opacity从0到1，1.5秒渐变。\n2. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合页面加载、弹窗、提示等场景。\n\n【性能优化】\n- 仅用opacity，动画流畅不卡顿。\n\n【应用场景】\n- 页面元素渐现、图片加载、内容切换等。\n\n【注意事项】\n- 动画时长可根据需求调整。`
  },
  {
    id: 'flash-animation',
    name: '闪烁动画',
    description: '元素快速闪烁的动画效果，吸引注意',
    category: 'animation',
    difficulty: 'basic',
    tags: ['闪烁', '高亮', '提示', '基础'],
    component: 'FlashAnimation',
    code: `<template>\n  <div class="flash-container">\n    <div class="flash-element">\n      <slot>\n        <div class="default-content">\n          <div class="icon">💡</div>\n          <div class="text">闪烁</div>\n        </div>\n      </slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.flash-element {\n  animation: flash 1s linear infinite;\n}\n@keyframes flash {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0; }\n}\n</style>`,
    explanation: `【技术原理】\n- 通过opacity属性和@keyframes实现元素闪烁。\n- animation属性设置无限循环。\n\n【实现要点】\n1. opacity在1和0之间切换，1秒周期。\n2. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合高亮提示、警告、加载等场景。\n\n【性能优化】\n- 仅用opacity，动画流畅不卡顿。\n\n【应用场景】\n- 提示、警告、加载等需要吸引注意的场合。\n\n【注意事项】\n- 动画节奏可根据需求调整。`
  },
  {
    id: 'slide-in-left-animation',
    name: '左侧滑入动画',
    description: '元素从左侧滑入的动画效果',
    category: 'animation',
    difficulty: 'basic',
    tags: ['滑入', '左侧', '位移', '基础'],
    component: 'SlideInLeftAnimation',
    code: `<template>\n  <div class="slide-in-left-container">\n    <div class="slide-in-left-element">\n      <slot>\n        <div class="default-content">\n          <div class="icon">⬅️</div>\n          <div class="text">左滑入</div>\n        </div>\n      </slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.slide-in-left-element {\n  animation: slideInLeft 1s cubic-bezier(0.23, 1, 0.32, 1);\n}\n@keyframes slideInLeft {\n  from { transform: translateX(-100%); opacity: 0; }\n  to { transform: translateX(0); opacity: 1; }\n}\n</style>`,
    explanation: `【技术原理】\n- 通过transform: translateX和opacity实现滑入。\n- animation属性控制动画时长和缓动。\n\n【实现要点】\n1. 元素从左侧-100%滑入到原位。\n2. 透明度渐变，增强动感。\n\n【设计思路】\n- 适合弹窗、侧边栏、提示等场景。\n\n【性能优化】\n- 仅用transform和opacity，动画流畅不卡顿。\n\n【应用场景】\n- 弹窗、侧边栏、内容切换等。\n\n【注意事项】\n- 动画时长和缓动可调整。`
  },
  {
    id: 'slide-in-right-animation',
    name: '右侧滑入动画',
    description: '元素从右侧滑入的动画效果',
    category: 'animation',
    difficulty: 'basic',
    tags: ['滑入', '右侧', '位移', '基础'],
    component: 'SlideInRightAnimation',
    code: `<template>\n  <div class="slide-in-right-container">\n    <div class="slide-in-right-element">\n      <slot>\n        <div class="default-content">\n          <div class="icon">➡️</div>\n          <div class="text">右滑入</div>\n        </div>\n      </slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.slide-in-right-element {\n  animation: slideInRight 1s cubic-bezier(0.23, 1, 0.32, 1);\n}\n@keyframes slideInRight {\n  from { transform: translateX(100%); opacity: 0; }\n  to { transform: translateX(0); opacity: 1; }\n}\n</style>`,
    explanation: `【技术原理】\n- 通过transform: translateX和opacity实现滑入。\n- animation属性控制动画时长和缓动。\n\n【实现要点】\n1. 元素从右侧100%滑入到原位。\n2. 透明度渐变，增强动感。\n\n【设计思路】\n- 适合弹窗、侧边栏、提示等场景。\n\n【性能优化】\n- 仅用transform和opacity，动画流畅不卡顿。\n\n【应用场景】\n- 弹窗、侧边栏、内容切换等。\n\n【注意事项】\n- 动画时长和缓动可调整。`
  },
  {
    id: 'zoom-in-animation',
    name: '放大进入动画',
    description: '元素由小变大放大进入的动画效果',
    category: 'animation',
    difficulty: 'basic',
    tags: ['放大', '进入', '缩放', '基础'],
    component: 'ZoomInAnimation',
    code: `<template>\n  <div class="zoom-in-container">\n    <div class="zoom-in-element">\n      <slot>\n        <div class="default-content">\n          <div class="icon">🔍</div>\n          <div class="text">放大进入</div>\n        </div>\n      </slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.zoom-in-element {\n  animation: zoomIn 0.8s cubic-bezier(0.23, 1, 0.32, 1);\n}\n@keyframes zoomIn {\n  from { transform: scale(0.5); opacity: 0; }\n  to { transform: scale(1); opacity: 1; }\n}\n</style>`,
    explanation: `【技术原理】\n- 通过transform: scale和opacity实现放大进入。\n- animation属性控制动画时长和缓动。\n\n【实现要点】\n1. scale从0.5到1，透明度从0到1。\n2. 0.8秒完成，动感强烈。\n\n【设计思路】\n- 适合弹窗、图片、内容加载等场景。\n\n【性能优化】\n- 仅用transform和opacity，动画流畅不卡顿。\n\n【应用场景】\n- 弹窗、图片、内容加载等。\n\n【注意事项】\n- 动画时长和缓动可调整。`
  },
  {
    id: 'rotate-animation',
    name: '旋转动画',
    description: '元素旋转的动画效果，适合装饰和加载',
    category: 'animation',
    difficulty: 'basic',
    tags: ['旋转', '装饰', '加载', '基础'],
    component: 'RotateAnimation',
    code: `<template>\n  <div class="rotate-container">\n    <div class="rotate-element">\n      <slot>\n        <div class="default-content">\n          <div class="icon">🌀</div>\n          <div class="text">旋转</div>\n        </div>\n      </slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.rotate-element {\n  animation: rotate 1.2s linear infinite;\n}\n@keyframes rotate {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n</style>`,
    explanation: `【技术原理】\n- 通过transform: rotate实现元素旋转。\n- animation属性设置无限循环。\n\n【实现要点】\n1. 1.2秒360度旋转，linear匀速。\n2. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合加载、装饰、按钮等场景。\n\n【性能优化】\n- 仅用transform: rotate，动画流畅不卡顿。\n\n【应用场景】\n- 加载动画、装饰性元素等。\n\n【注意事项】\n- 动画速度可调整。`
  },
  {
    id: 'heartbeat-animation',
    name: '心跳动画',
    description: '模拟心跳的缩放动画，富有生命力',
    category: 'animation',
    difficulty: 'basic',
    tags: ['心跳', '缩放', '生命力', '基础'],
    component: 'HeartbeatAnimation',
    code: `<template>\n  <div class="heartbeat-container">\n    <div class="heartbeat-element">\n      <slot>\n        <div class="default-content">\n          <div class="icon">❤️</div>\n          <div class="text">心跳</div>\n        </div>\n      </slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.heartbeat-element {\n  animation: heartbeat 1.5s ease-in-out infinite;\n}\n@keyframes heartbeat {\n  0%, 100% { transform: scale(1); }\n  14% { transform: scale(1.3); }\n  28% { transform: scale(1); }\n  42% { transform: scale(1.3); }\n  70% { transform: scale(1); }\n}\n</style>`,
    explanation: `【技术原理】\n- 通过transform: scale实现心跳缩放。\n- animation属性设置心跳节奏。\n\n【实现要点】\n1. scale在1和1.3之间交替，1.5秒周期。\n2. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合点赞、关注、提示等场景。\n\n【性能优化】\n- 仅用transform: scale，动画流畅不卡顿。\n\n【应用场景】\n- 点赞、关注、提示等。\n\n【注意事项】\n- 动画节奏可调整。`
  },
  {
    id: 'rubber-band-animation',
    name: '橡皮筋动画',
    description: '模拟橡皮筋拉伸回弹的动画效果',
    category: 'animation',
    difficulty: 'intermediate',
    tags: ['橡皮筋', '拉伸', '回弹', '有趣'],
    component: 'RubberBandAnimation',
    code: `<template>\n  <div class="rubber-band-container">\n    <div class="rubber-band-element">\n      <slot>\n        <div class="default-content">\n          <div class="icon">🪢</div>\n          <div class="text">橡皮筋</div>\n        </div>\n      </slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.rubber-band-element {\n  animation: rubberBand 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n}\n@keyframes rubberBand {\n  0% { transform: scale3d(1, 1, 1); }\n  30% { transform: scale3d(1.25, 0.75, 1); }\n  40% { transform: scale3d(0.75, 1.25, 1); }\n  50% { transform: scale3d(1.15, 0.85, 1); }\n  65% { transform: scale3d(0.95, 1.05, 1); }\n  75% { transform: scale3d(1.05, 0.95, 1); }\n  100% { transform: scale3d(1, 1, 1); }\n}\n</style>`,
    explanation: `【技术原理】\n- 通过transform: scale3d实现拉伸回弹。\n- animation属性设置弹性曲线。\n\n【实现要点】\n1. scale3d多阶段变化，模拟橡皮筋弹性。\n2. 1秒完成，动感强烈。\n\n【设计思路】\n- 适合按钮、卡片、交互反馈等场景。\n\n【性能优化】\n- 仅用transform: scale3d，动画流畅不卡顿。\n\n【应用场景】\n- 按钮、卡片、交互反馈等。\n\n【注意事项】\n- 动画节奏可调整。`
  },
  // ==================== 异形图组件补充 ====================
  {
    id: 'arrow-shape',
    name: '箭头形状',
    description: '简洁的箭头图形，常用于指示方向',
    category: 'shape',
    difficulty: 'basic',
    tags: ['箭头', '方向', '指示', '基础'],
    component: 'ArrowShape',
    code: `<template>\n  <div class="arrow-shape">\n    <div class="arrow-inner">\n      <slot>\n        <div class="default-content">\n          <div class="icon">➡️</div>\n          <div class="text">箭头</div>\n        </div>\n      </slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.arrow-inner {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(135deg, #4fd1c5 0%, #38b2ac 100%);\n  clip-path: polygon(0% 50%, 80% 50%, 80% 0%, 100% 60%, 80% 100%, 80% 50%, 0% 50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n}\n</style>`,
    explanation: `【技术原理】\n- 利用clip-path: polygon实现箭头形状。\n- 渐变背景增强视觉效果。\n\n【实现要点】\n1. clip-path定义箭头多边形。\n2. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合流程图、导航、指示等场景。\n\n【性能优化】\n- 纯CSS实现，无需图片或SVG。\n\n【应用场景】\n- 流程图、导航、指示等。\n\n【注意事项】\n- clip-path兼容性需关注。`
  },
  {
    id: 'cloud-shape',
    name: '云朵形状',
    description: '卡通风格的云朵图形，适合装饰',
    category: 'shape',
    difficulty: 'intermediate',
    tags: ['云朵', '卡通', '装饰', '中级'],
    component: 'CloudShape',
    code: `<template>\n  <div class="cloud-shape">\n    <div class="cloud-inner">\n      <slot>\n        <div class="default-content">\n          <div class="icon">☁️</div>\n          <div class="text">云朵</div>\n        </div>\n      </slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.cloud-inner {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(135deg, #a0aec0 0%, #cbd5e0 100%);\n  clip-path: ellipse(60% 40% at 50% 60%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n}\n</style>`,
    explanation: `【技术原理】\n- 利用clip-path: ellipse实现云朵形状。\n- 渐变背景增强卡通感。\n\n【实现要点】\n1. clip-path定义椭圆云朵。\n2. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合天气、装饰、卡通场景。\n\n【性能优化】\n- 纯CSS实现，无需图片或SVG。\n\n【应用场景】\n- 天气图标、装饰、卡通界面等。\n\n【注意事项】\n- clip-path兼容性需关注。`
  },
  {
    id: 'diamond-shape',
    name: '菱形',
    description: '规则菱形图形，常用于装饰和分隔',
    category: 'shape',
    difficulty: 'basic',
    tags: ['菱形', '装饰', '分隔', '基础'],
    component: 'DiamondShape',
    code: `<template>\n  <div class="diamond-shape">\n    <div class="diamond-inner">\n      <slot>\n        <div class="default-content">\n          <div class="icon">💎</div>\n          <div class="text">菱形</div>\n        </div>\n      </slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.diamond-inner {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);\n  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n}\n</style>`,
    explanation: `【技术原理】\n- 利用clip-path: polygon实现菱形裁剪。\n- 渐变背景增强装饰感。\n\n【实现要点】\n1. clip-path定义四边形菱形。\n2. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合分隔、装饰、图标等场景。\n\n【性能优化】\n- 纯CSS实现，无需图片或SVG。\n\n【应用场景】\n- 分隔线、装饰、图标等。\n\n【注意事项】\n- clip-path兼容性需关注。`
  },
  {
    id: 'triangle-shape',
    name: '三角形',
    description: '规则三角形图形，常用于指示和装饰',
    category: 'shape',
    difficulty: 'basic',
    tags: ['三角形', '指示', '装饰', '基础'],
    component: 'TriangleShape',
    code: `<template>\n  <div class="triangle-shape">\n    <div class="triangle-inner">\n      <slot>\n        <div class="default-content">\n          <div class="icon">▲</div>\n          <div class="text">三角形</div>\n        </div>\n      </slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.triangle-inner {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(135deg, #f7971e 0%, #ffd200 100%);\n  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n}\n</style>`,
    explanation: `【技术原理】\n- 利用clip-path: polygon实现三角形裁剪。\n- 渐变背景增强装饰感。\n\n【实现要点】\n1. clip-path定义三角形。\n2. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合指示、装饰、图标等场景。\n\n【性能优化】\n- 纯CSS实现，无需图片或SVG。\n\n【应用场景】\n- 指示箭头、装饰、图标等。\n\n【注意事项】\n- clip-path兼容性需关注。`
  },
  {
    id: 'octagon-shape',
    name: '八边形',
    description: '规则八边形图形，常用于装饰和分隔',
    category: 'shape',
    difficulty: 'intermediate',
    tags: ['八边形', '装饰', '分隔', '中级'],
    component: 'OctagonShape',
    code: `<template>\n  <div class="octagon-shape">\n    <div class="octagon-inner">\n      <slot>\n        <div class="default-content">\n          <div class="icon">🛑</div>\n          <div class="text">八边形</div>\n        </div>\n      </slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.octagon-inner {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(135deg, #ff5858 0%, #f09819 100%);\n  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n}\n</style>`,
    explanation: `【技术原理】\n- 利用clip-path: polygon实现八边形裁剪。\n- 渐变背景增强装饰感。\n\n【实现要点】\n1. clip-path定义八边形。\n2. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合分隔、装饰、图标等场景。\n\n【性能优化】\n- 纯CSS实现，无需图片或SVG。\n\n【应用场景】\n- 分隔线、装饰、图标等。\n\n【注意事项】\n- clip-path兼容性需关注。`
  },
  // ==================== 炫酷效果组件补充 ====================
  {
    id: 'hologram-effect',
    name: '全息投影效果',
    description: '科幻风格的全息投影动画效果',
    category: 'effect',
    difficulty: 'advanced',
    tags: ['全息', '科幻', '投影', '高级'],
    component: 'HologramEffect',
    code: `<template>\n  <div class="hologram-effect">\n    <div class="hologram-inner">\n      <slot>HOLOGRAM</slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.hologram-inner {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%);\n  filter: blur(1px) brightness(1.2);\n  box-shadow: 0 0 30px #43cea2, 0 0 60px #185a9d;\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0 10px #43cea2, 0 0 20px #185a9d;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n</style>`,
    explanation: `【技术原理】\n- 利用渐变背景、模糊、发光和阴影模拟全息投影。\n- text-shadow和box-shadow增强科幻感。\n\n【实现要点】\n1. 渐变背景+模糊+发光组合。\n2. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合科幻、未来、科技主题场景。\n\n【性能优化】\n- 仅用CSS滤镜和阴影，动画流畅不卡顿。\n\n【应用场景】\n- 科技展示、品牌LOGO、标题等。\n\n【注意事项】\n- 滤镜和阴影较多时注意性能。`
  },
  {
    id: 'laser-effect',
    name: '激光效果',
    description: '绚丽的激光动画效果，极具视觉冲击力',
    category: 'effect',
    difficulty: 'advanced',
    tags: ['激光', '炫酷', '视觉', '高级'],
    component: 'LaserEffect',
    code: `<template>\n  <div class="laser-effect">\n    <div class="laser-inner">\n      <slot>LASER</slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.laser-inner {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);\n  box-shadow: 0 0 40px #ff512f, 0 0 80px #dd2476;\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0 20px #ff512f, 0 0 40px #dd2476;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n</style>`,
    explanation: `【技术原理】\n- 利用渐变背景、发光和阴影模拟激光效果。\n- text-shadow和box-shadow增强炫酷感。\n\n【实现要点】\n1. 渐变背景+发光+阴影组合。\n2. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合炫酷、未来、科技主题场景。\n\n【性能优化】\n- 仅用CSS阴影和渐变，动画流畅不卡顿。\n\n【应用场景】\n- 科技展示、品牌LOGO、标题等。\n\n【注意事项】\n- 阴影较多时注意性能。`
  },
  {
    id: 'liquid-effect',
    name: '液体流动效果',
    description: '模拟液体流动的动画效果',
    category: 'effect',
    difficulty: 'advanced',
    tags: ['液体', '流动', '动态', '高级'],
    component: 'LiquidEffect',
    code: `<template>\n  <div class="liquid-effect">\n    <div class="liquid-inner">\n      <slot>LIQUID</slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.liquid-inner {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);\n  filter: blur(0.5px) brightness(1.1);\n  border-radius: 50% 50% 40% 60% / 60% 40% 60% 50%;\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0 10px #66a6ff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n</style>`,
    explanation: `【技术原理】\n- 利用渐变背景、滤镜和不规则圆角模拟液体流动。\n- text-shadow增强立体感。\n\n【实现要点】\n1. 渐变背景+滤镜+圆角组合。\n2. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合动态、科技、未来主题场景。\n\n【性能优化】\n- 仅用CSS滤镜和圆角，动画流畅不卡顿。\n\n【应用场景】\n- 动态背景、LOGO、标题等。\n\n【注意事项】\n- 滤镜和圆角较多时注意性能。`
  },
  {
    id: 'matrix-rain-effect',
    name: '矩阵雨效果',
    description: '模拟黑客帝国风格的矩阵数字雨动画',
    category: 'effect',
    difficulty: 'advanced',
    tags: ['矩阵', '数字雨', '黑客', '高级'],
    component: 'MatrixRainEffect',
    code: `<template>\n  <div class="matrix-rain-effect">\n    <div class="matrix-inner">\n      <slot>MATRIX</slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.matrix-inner {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(180deg, #0f2027 0%, #2c5364 100%);\n  color: #39ff14;\n  font-family: 'Courier New', monospace;\n  font-weight: bold;\n  text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n</style>`,
    explanation: `【技术原理】\n- 利用渐变背景、绿色字体和阴影模拟数字雨。\n- text-shadow增强黑客风格。\n\n【实现要点】\n1. 渐变背景+绿色字体+阴影组合。\n2. 结构简洁，slot插槽支持自定义内容。\n\n【设计思路】\n- 适合黑客、科幻、未来主题场景。\n\n【性能优化】\n- 仅用CSS阴影和渐变，动画流畅不卡顿。\n\n【应用场景】\n- 黑客风格展示、LOGO、标题等。\n\n【注意事项】\n- 阴影较多时注意性能。`
  }
]