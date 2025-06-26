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
.float-element {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}
</style>`,
    explanation: `【技术原理】\n- 利用transform属性实现元素上下浮动，避免重排，提升性能。\n- 通过@keyframes定义动画关键帧，灵活控制动画过程。\n\n【实现要点】\n1. 仅用transform: translateY实现上下浮动，动画流畅。\n2. 3秒周期，ease-in-out缓动，模拟自然漂浮。\n3. 结构简洁，slot插槽支持自定义内容。\n\n【应用场景】\n- 图标、按钮、卡片等UI元素的动效增强。\n- 交互反馈、加载指示、装饰性动画等。`
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
.bounce-element {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% { transform: translateY(0px); }
  40%, 43% { transform: translateY(-20px); }
  70% { transform: translateY(-10px); }
  90% { transform: translateY(-3px); }
}
</style>`,
    explanation: `【技术原理】\n- 通过CSS3 @keyframes关键帧模拟真实物理弹跳过程。\n- 多关键帧设计，递减弹跳高度，模拟能量损失。\n\n【实现要点】\n1. 7个关键帧，完整还原弹跳周期。\n2. 弹跳高度依次递减，符合物理规律。\n3. 地面停留时间更长，增强真实感。\n\n【应用场景】\n- 加载指示器、交互反馈、游戏动画等。`
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

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
}
</style>`,
    explanation: `【技术原理】\n- 通过transform: scale和opacity属性实现缩放和透明度变化。\n- 模拟心跳脉冲的节奏感。\n\n【实现要点】\n1. scale变换：从1.0缩放到1.2。\n2. opacity变化：透明度从1.0降到0.8。\n3. 2秒周期，模拟心跳频率。\n\n【应用场景】\n- 重要按钮、通知提醒、徽章等需要突出显示的场景。`
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

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>`,
    explanation: `【技术原理】\n- 通过transform: rotate实现元素的360度旋转。\n- 使用linear缓动确保匀速旋转。\n\n【实现要点】\n1. 360度完整旋转，2秒周期。\n2. infinite无限循环，适合长时间显示。\n3. linear匀速旋转，视觉效果稳定。\n\n【应用场景】\n- 加载动画、刷新按钮、装饰性元素等。`
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

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
  20%, 40%, 60%, 80% { transform: translateX(8px); }
}
</style>`,
    explanation: `【技术原理】\n- 通过transform: translateX实现元素的左右位移。\n- 高频率关键帧创造快速震动效果。\n\n【实现要点】\n1. 10个关键帧，0.8秒内完成快速震动。\n2. 左右各8px对称位移，幅度适中。\n3. 奇偶帧交替方向，模拟真实摇头动作。\n\n【应用场景】\n- 表单验证失败、操作错误等交互反馈。`
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

@keyframes wobble {
  0%, 100% { transform: translateX(0%) rotate(0deg); }
  15% { transform: translateX(-25%) rotate(-5deg); }
  30% { transform: translateX(20%) rotate(3deg); }
  45% { transform: translateX(-15%) rotate(-3deg); }
  60% { transform: translateX(10%) rotate(2deg); }
  75% { transform: translateX(-5%) rotate(-1deg); }
}
</style>`,
    explanation: `【技术原理】\n- 结合transform: translateX和rotate实现复杂摆动。\n- 递减幅度和不规则节奏增强真实感。\n\n【实现要点】\n1. translateX+rotate组合，创造复杂摆动效果。\n2. 位移和旋转角度逐渐减小，模拟阻尼衰减。\n3. 关键帧时间点不均匀分布，增强趣味性。\n\n【应用场景】\n- 装饰性动画、趣味交互等。`
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
  transform-origin: top center;
  animation: swing 2s ease-in-out infinite;
}

@keyframes swing {
  0%, 100% { transform: rotate(0deg); }
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
}
</style>`,
    explanation: `【技术原理】\n- 通过transform-origin设置旋转中心，结合rotate实现钟摆运动。\n- 关键帧角度递减，模拟物理衰减。\n\n【实现要点】\n1. transform-origin: top center，模拟悬挂点。\n2. 角度递减，正负交替，符合物理规律。\n3. 2秒周期，ease-in-out缓动。\n\n【应用场景】\n- 等待提示、装饰性元素等。`
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
  perspective: 400px;
}

.flip-element {
  animation: flip 2s ease-in-out infinite;
  transform-style: preserve-3d;
}

@keyframes flip {
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
  100% { transform: rotateY(360deg); }
}
</style>`,
    explanation: `【技术原理】\n- 利用CSS3 3D变换和perspective属性实现立体翻转。\n- transform-style: preserve-3d保持3D效果。\n\n【实现要点】\n1. perspective: 400px，增强3D立体感。\n2. rotateY实现水平翻转，完整360°。\n3. 2秒周期，ease-in-out缓动。\n\n【应用场景】\n- 卡片翻面、图片展示、交互反馈等。`
  },

  {
    id: 'slide-in-left-animation',
    name: '左侧滑入动画',
    description: '元素从左侧滑入的动画效果',
    category: 'animation',
    difficulty: 'basic',
    tags: ['滑入', '左侧', '位移', '基础'],
    component: 'SlideInLeftAnimation',
    code: `<template>
  <div class="slide-in-left-container">
    <div class="slide-in-left-element">
      <slot>
        <div class="default-content">
          <div class="icon">⬅️</div>
          <div class="text">左滑入</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.slide-in-left-element {
  animation: slideInLeft 1s ease-out;
}

@keyframes slideInLeft {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
</style>`,
    explanation: `【技术原理】\n- 通过transform: translateX和opacity实现滑入效果。\n- 元素从左侧-100%滑入到原位。\n\n【实现要点】\n1. 元素从左侧-100%滑入到原位。\n2. 透明度渐变，增强动感。\n3. 1秒完成，ease-out缓动。\n\n【应用场景】\n- 弹窗、侧边栏、内容切换等。`
  },

  {
    id: 'slide-in-right-animation',
    name: '右侧滑入动画',
    description: '元素从右侧滑入的动画效果',
    category: 'animation',
    difficulty: 'basic',
    tags: ['滑入', '右侧', '位移', '基础'],
    component: 'SlideInRightAnimation',
    code: `<template>
  <div class="slide-in-right-container">
    <div class="slide-in-right-element">
      <slot>
        <div class="default-content">
          <div class="icon">➡️</div>
          <div class="text">右滑入</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.slide-in-right-element {
  animation: slideInRight 1s ease-out;
}

@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
</style>`,
    explanation: `【技术原理】\n- 通过transform: translateX和opacity实现滑入效果。\n- 元素从右侧100%滑入到原位。\n\n【实现要点】\n1. 元素从右侧100%滑入到原位。\n2. 透明度渐变，增强动感。\n3. 1秒完成，ease-out缓动。\n\n【应用场景】\n- 弹窗、侧边栏、内容切换等。`
  },

  {
    id: 'fade-in-animation',
    name: '淡入动画',
    description: '元素逐渐显现的淡入动画效果',
    category: 'animation',
    difficulty: 'basic',
    tags: ['淡入', '透明度', '基础', '渐变'],
    component: 'FadeInAnimation',
    code: `<template>
  <div class="fade-in-container">
    <div class="fade-in-element">
      <slot>
        <div class="default-content">
          <div class="icon">✨</div>
          <div class="text">淡入</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.fade-in-element {
  animation: fadeIn 2s ease-in;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>`,
    explanation: `【技术原理】\n- 通过opacity属性实现元素淡入效果。\n- 简单而优雅的透明度变化。\n\n【实现要点】\n1. opacity从0到1，2秒渐变。\n2. ease-in缓动，开始慢后来快。\n3. 结构简洁，适用性广。\n\n【应用场景】\n- 页面元素渐现、图片加载、内容切换等。`
  },

  {
    id: 'zoom-in-animation',
    name: '放大进入动画',
    description: '元素由小变大放大进入的动画效果',
    category: 'animation',
    difficulty: 'basic',
    tags: ['放大', '进入', '缩放', '基础'],
    component: 'ZoomInAnimation',
    code: `<template>
  <div class="zoom-in-container">
    <div class="zoom-in-element">
      <slot>
        <div class="default-content">
          <div class="icon">🔍</div>
          <div class="text">放大</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.zoom-in-element {
  animation: zoomIn 1s ease-out;
}

@keyframes zoomIn {
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
</style>`,
    explanation: `【技术原理】\n- 通过transform: scale和opacity实现放大进入效果。\n- 从0缩放到正常大小，同时透明度变化。\n\n【实现要点】\n1. scale从0到1，透明度从0到1。\n2. 1秒完成，动感强烈。\n3. ease-out缓动，开始快后来慢。\n\n【应用场景】\n- 弹窗、图片、内容加载等。`
  },

  {
    id: 'rotate-animation',
    name: '旋转动画',
    description: '元素旋转的动画效果，适合装饰和加载',
    category: 'animation',
    difficulty: 'basic',
    tags: ['旋转', '装饰', '加载', '基础'],
    component: 'RotateAnimation',
    code: `<template>
  <div class="rotate-container">
    <div class="rotate-element">
      <slot>
        <div class="default-content">
          <div class="icon">🌀</div>
          <div class="text">旋转</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.rotate-element {
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>`,
    explanation: `【技术原理】\n- 通过transform: rotate实现元素旋转。\n- linear匀速旋转，视觉效果稳定。\n\n【实现要点】\n1. 3秒360度旋转，linear匀速。\n2. infinite无限循环。\n3. 结构简洁，适用性广。\n\n【应用场景】\n- 加载动画、装饰性元素等。`
  },

  {
    id: 'heartbeat-animation',
    name: '心跳动画',
    description: '模拟心跳的缩放动画，富有生命力',
    category: 'animation',
    difficulty: 'basic',
    tags: ['心跳', '缩放', '生命力', '基础'],
    component: 'HeartbeatAnimation',
    code: `<template>
  <div class="heartbeat-container">
    <div class="heartbeat-element">
      <slot>
        <div class="default-content">
          <div class="icon">💓</div>
          <div class="text">心跳</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.heartbeat-element {
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
}
</style>`,
    explanation: `【技术原理】\n- 通过transform: scale实现心跳缩放效果。\n- 不规则的缩放节奏模拟真实心跳。\n\n【实现要点】\n1. scale在1和1.3之间交替，1.5秒周期。\n2. 双重跳动模拟真实心跳。\n3. ease-in-out缓动增强自然感。\n\n【应用场景】\n- 点赞、关注、提示等。`
  },

  {
    id: 'rubber-band-animation',
    name: '橡皮筋动画',
    description: '模拟橡皮筋拉伸回弹的动画效果',
    category: 'animation',
    difficulty: 'intermediate',
    tags: ['橡皮筋', '拉伸', '回弹', '有趣'],
    component: 'RubberBandAnimation',
    code: `<template>
  <div class="rubber-band-container">
    <div class="rubber-band-element">
      <slot>
        <div class="default-content">
          <div class="icon">🎈</div>
          <div class="text">橡皮筋</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.rubber-band-element {
  animation: rubberBand 1s ease-out;
}

@keyframes rubberBand {
  0% { transform: scale(1, 1); }
  30% { transform: scale(1.25, 0.75); }
  40% { transform: scale(0.75, 1.25); }
  50% { transform: scale(1.15, 0.85); }
  65% { transform: scale(0.95, 1.05); }
  75% { transform: scale(1.05, 0.95); }
  100% { transform: scale(1, 1); }
}
</style>`,
    explanation: `【技术原理】\n- 通过scaleX和scaleY的不同步变化创造拉伸效果。\n- 模拟橡皮筋的弹性回弹。\n\n【实现要点】\n1. X轴和Y轴不同步缩放。\n2. 多阶段变化，模拟橡皮筋弹性。\n3. 1秒完成，动感强烈。\n\n【应用场景】\n- 按钮、卡片、交互反馈等。`
  },

  {
    id: 'flash-animation',
    name: '闪烁动画',
    description: '快速闪烁的提醒效果',
    category: 'animation',
    difficulty: 'basic',
    tags: ['闪烁', '提醒', '警告', '基础'],
    component: 'FlashAnimation',
    code: `<template>
  <div class="flash-container">
    <div class="flash-element">
      <slot>
        <div class="default-content">
          <div class="icon">⚡</div>
          <div class="text">闪烁</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.flash-element {
  animation: flash 2s ease-in-out infinite;
}

@keyframes flash {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}
</style>`,
    explanation: `【技术原理】\n- 通过opacity快速变化创造闪烁效果。\n- 结合发光效果增强视觉冲击。\n\n【实现要点】\n1. opacity在1和0之间快速切换。\n2. 2秒周期，infinite无限循环。\n3. 可配合阴影增强效果。\n\n【应用场景】\n- 重要提示、警告信息、吸引注意等。`
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
  clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
</style>`,
    explanation: `【技术原理】\n- 利用clip-path: polygon实现六边形裁剪。\n- 百分比坐标确保响应式适配。\n\n【实现要点】\n1. clip-path定义6个顶点，形成规则六边形。\n2. 渐变背景增强科技感。\n3. flex布局实现内容居中。\n\n【应用场景】\n- 科技界面、蜂窝布局、数据可视化等。`
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
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
</style>`,
    explanation: `【技术原理】\n- 利用clip-path: polygon实现五角星裁剪。\n- 10个坐标点精确计算星形轮廓。\n\n【实现要点】\n1. 5个外顶点+5个内凹点，黄金比例分布。\n2. 百分比坐标，响应式适配。\n3. 渐变背景提升视觉层次。\n\n【应用场景】\n- 评分系统、收藏功能、奖励徽章等。`
  },

  {
    id: 'diamond-shape',
    name: '钻石形',
    description: '钻石切割效果的菱形图形',
    category: 'shape',
    difficulty: 'basic',
    tags: ['钻石', '菱形', '装饰', '几何'],
    component: 'DiamondShape',
    code: `<template>
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
.diamond-inner {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: rotate(45deg);
  position: relative;
}

.diamond-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  color: white;
  font-weight: bold;
  text-align: center;
}
</style>`,
    explanation: `【技术原理】\n- 通过CSS变换创建钻石切割效果。\n- rotate旋转45度创建菱形。\n\n【实现要点】\n1. 主体旋转45度创建菱形效果。\n2. 内容反向旋转保持正常显示。\n3. 渐变背景增强立体感。\n\n【应用场景】\n- 装饰元素、图标容器、分隔线等。`
  },

  {
    id: 'triangle-shape',
    name: '三角形',
    description: '规则三角形图形，常用于指示和装饰',
    category: 'shape',
    difficulty: 'basic',
    tags: ['三角形', '指示', '装饰', '基础'],
    component: 'TriangleShape',
    code: `<template>
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
.triangle-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  padding-top: 20px;
}
</style>`,
    explanation: `【技术原理】\n- 利用clip-path: polygon实现三角形裁剪。\n- 三个顶点坐标定义等边三角形。\n\n【实现要点】\n1. clip-path定义三角形轮廓。\n2. 渐变背景增强装饰感。\n3. 调整内容位置适应三角形。\n\n【应用场景】\n- 指示箭头、装饰元素、图标等。`
  },

  {
    id: 'octagon-shape',
    name: '八边形',
    description: '规则八边形图形，常用于装饰和分隔',
    category: 'shape',
    difficulty: 'intermediate',
    tags: ['八边形', '装饰', '分隔', '中级'],
    component: 'OctagonShape',
    code: `<template>
  <div class="octagon-shape">
    <div class="octagon-inner">
      <slot>
        <div class="default-content">
          <div class="icon">🛑</div>
          <div class="text">八边形</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.octagon-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
</style>`,
    explanation: `【技术原理】\n- 利用clip-path: polygon实现八边形裁剪。\n- 8个顶点坐标精确计算。\n\n【实现要点】\n1. clip-path定义规则八边形。\n2. 渐变背景增强装饰感。\n3. 可配合旋转展示不同角度。\n\n【应用场景】\n- 分隔线、装饰元素、图标容器等。`
  },

  {
    id: 'arrow-shape',
    name: '箭头形状',
    description: '简洁的箭头图形，常用于指示方向',
    category: 'shape',
    difficulty: 'basic',
    tags: ['箭头', '方向', '指示', '基础'],
    component: 'ArrowShape',
    code: `<template>
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
.arrow-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
</style>`,
    explanation: `【技术原理】\n- 利用clip-path: polygon实现箭头形状。\n- 7个坐标点定义箭头轮廓。\n\n【实现要点】\n1. clip-path定义指向箭头。\n2. 渐变背景增强视觉效果。\n3. 可配合hover效果模拟指向。\n\n【应用场景】\n- 流程图、导航、指示等。`
  },

  {
    id: 'cloud-shape',
    name: '云朵形状',
    description: '卡通风格的云朵图形，适合装饰',
    category: 'shape',
    difficulty: 'intermediate',
    tags: ['云朵', '卡通', '装饰', '中级'],
    component: 'CloudShape',
    code: `<template>
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
.cloud-inner {
  width: 80px;
  height: 40px;
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  border-radius: 40px;
  position: relative;
}

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
</style>`,
    explanation: `【技术原理】\n- 利用多个圆形伪元素组合创建云朵效果。\n- 主体+两个伪元素圆形组合。\n\n【实现要点】\n1. 主体椭圆形作为云朵底部。\n2. 两个伪元素作为云朵顶部圆形。\n3. 精确的尺寸和位置计算。\n\n【应用场景】\n- 天气图标、装饰元素、卡通界面等。`
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
    explanation: `【技术原理】\n- 利用CSS伪元素和旋转变换创建爱心形状。\n- 主体元素作为底部，两个伪元素作为上方圆形。\n\n【实现要点】\n1. 主体旋转-45度，形成菱形底部。\n2. 两个伪元素分别旋转±45度，形成圆形顶部。\n3. 精确的尺寸和位置计算。\n\n【应用场景】\n- 点赞按钮、收藏功能、情感表达等。`
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
  animation: neon-glow 2s ease-in-out infinite alternate;
}

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
    explanation: `【技术原理】\n- 利用多层text-shadow叠加实现霓虹发光效果。\n- @keyframes动画切换不同发光强度。\n\n【实现要点】\n1. 多层白色和蓝色阴影，营造立体发光感。\n2. alternate动画方向，强弱光交替。\n3. 可自定义颜色和发光强度。\n\n【应用场景】\n- 夜店风格标题、游戏界面、品牌LOGO等。`
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
    explanation: `【技术原理】\n- 利用多层文本和不同动画轨迹模拟RGB分离现象。\n- 伪元素实现红绿蓝三色通道错位。\n\n【实现要点】\n1. 主文本白色，伪元素红绿色，三层错位。\n2. 不同周期动画增强随机感。\n3. 可自定义故障强度和颜色。\n\n【应用场景】\n- 赛博朋克风格、科技故障、数字干扰等。`
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

@keyframes particleFloat {
  0% { transform: translateY(0px) translateX(0px); opacity: 0; }
  10% { opacity: 1; }
  50% { transform: translateY(-80px) translateX(10px); opacity: 0.8; }
  90% { opacity: 1; }
  100% { transform: translateY(-160px) translateX(-10px); opacity: 0; }
}
</style>`,
    explanation: `【技术原理】\n- 利用大量小元素的CSS动画模拟粒子系统。\n- 随机参数控制每个粒子的行为。\n\n【实现要点】\n1. 随机生成粒子参数避免同步。\n2. 关键帧控制粒子浮动轨迹。\n3. 可自定义粒子数量和样式。\n\n【应用场景】\n- 背景装饰、成功反馈、庆祝动画等。`
  },

  {
    id: 'hologram-effect',
    name: '全息投影效果',
    description: '科幻风格的全息投影动画效果',
    category: 'effect',
    difficulty: 'advanced',
    tags: ['全息', '科幻', '投影', '高级'],
    component: 'HologramEffect',
    code: `<template>
  <div class="hologram-effect">
    <div class="hologram-container">
      <div class="hologram-lines"></div>
      <div class="hologram-content">
        <slot>HOLOGRAM</slot>
      </div>
      <div class="hologram-glitch"></div>
    </div>
  </div>
</template>

<style scoped>
.hologram-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hologram-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 255, 255, 0.1) 2px,
    rgba(0, 255, 255, 0.1) 4px
  );
  animation: hologramScan 2s linear infinite;
}

.hologram-content {
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  font-weight: bold;
  color: #00ffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  z-index: 10;
  text-shadow: 
    0 0 5px #00ffff,
    0 0 10px #00ffff,
    0 0 15px #00ffff,
    0 0 20px #00ffff;
  animation: hologramFlicker 3s ease-in-out infinite;
}
</style>`,
    explanation: `【技术原理】\n- 利用多层动画和扫描线模拟全息投影效果。\n- 结合发光、闪烁和故障效果。\n\n【实现要点】\n1. 扫描线背景模拟全息扫描。\n2. 文字发光和闪烁效果。\n3. 故障层增强科幻感。\n\n【应用场景】\n- 科技展示、未来主题、品牌LOGO等。`
  },

  {
    id: 'liquid-effect',
    name: '液体流动效果',
    description: '模拟液体流动的动态变形效果',
    category: 'effect',
    difficulty: 'advanced',
    tags: ['液体', '流动', '动态', '高级'],
    component: 'LiquidEffect',
    code: `<template>
  <div class="liquid-effect">
    <div class="liquid-blob">
      <div class="liquid-content">
        <slot>LIQUID</slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.liquid-blob {
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00);
  background-size: 400% 400%;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: liquidWave 4s ease-in-out infinite, liquidColor 6s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

@keyframes liquidWave {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: rotate(0deg);
  }
  25% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    transform: rotate(90deg);
  }
  50% {
    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    transform: rotate(180deg);
  }
  75% {
    border-radius: 40% 70% 60% 30% / 70% 40% 60% 30%;
    transform: rotate(270deg);
  }
}

@keyframes liquidColor {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
</style>`,
    explanation: `【技术原理】\n- 利用border-radius动态变化创造液体效果。\n- 结合旋转变换和颜色变化。\n\n【实现要点】\n1. 复杂的边框半径变化模拟液体。\n2. 旋转变换增强流动感。\n3. 渐变背景位置变化。\n\n【应用场景】\n- 动态背景、创意展示、品牌动画等。`
  },

  {
    id: 'matrix-rain-effect',
    name: '矩阵雨效果',
    description: '模拟《黑客帝国》中的数字雨效果',
    category: 'effect',
    difficulty: 'advanced',
    tags: ['矩阵', '数字雨', '黑客', '高级'],
    component: 'MatrixRainEffect',
    code: `<template>
  <div class="matrix-rain-effect">
    <div class="matrix-container">
      <div 
        v-for="i in columnCount" 
        :key="i" 
        class="matrix-column"
        :style="getColumnStyle(i)"
      >
        <div 
          v-for="j in 20" 
          :key="j" 
          class="matrix-char"
          :style="getCharStyle(j)"
        >
          {{ getRandomChar() }}
        </div>
      </div>
    </div>
    <div class="matrix-content">
      <slot>MATRIX</slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  columnCount: {
    type: Number,
    default: 12
  }
})

const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'

const getRandomChar = () => {
  return chars[Math.floor(Math.random() * chars.length)]
}

const getColumnStyle = (index) => {
  const delay = Math.random() * 3
  const left = (index / props.columnCount) * 100
  return {
    left: left + '%',
    animationDelay: delay + 's'
  }
}

const getCharStyle = (index) => {
  const delay = index * 0.1
  return {
    animationDelay: delay + 's'
  }
}
</script>

<style scoped>
.matrix-column {
  position: absolute;
  top: -100%;
  width: 20px;
  animation: matrixRain 5s linear infinite;
}

.matrix-char {
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  text-align: center;
  opacity: 0.8;
  animation: matrixFade 2s linear infinite;
  text-shadow: 0 0 5px #00ff00;
}

@keyframes matrixRain {
  to { transform: translateY(300px); }
}

@keyframes matrixFade {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}
</style>`,
    explanation: `【技术原理】\n- 利用多列字符动画模拟数字雨效果。\n- 随机字符生成和交错时间。\n\n【实现要点】\n1. 多列字符垂直下落动画。\n2. 随机字符和延迟时间。\n3. 绿色发光字体增强黑客感。\n\n【应用场景】\n- 黑客风格、科幻主题、技术展示等。`
  },

  {
    id: 'laser-effect',
    name: '激光效果',
    description: '绚丽的激光动画效果，极具视觉冲击力',
    category: 'effect',
    difficulty: 'advanced',
    tags: ['激光', '炫酷', '视觉', '高级'],
    component: 'LaserEffect',
    code: `<template>
  <div class="laser-effect">
    <div class="laser-container">
      <div class="laser-beam"></div>
      <div class="laser-core"></div>
      <div class="laser-particles">
        <div 
          v-for="i in 8" 
          :key="i" 
          class="laser-particle"
          :style="getParticleStyle(i)"
        ></div>
      </div>
    </div>
    <div class="laser-content">
      <slot>LASER</slot>
    </div>
  </div>
</template>

<script setup>
const getParticleStyle = (index) => {
  const angle = (index / 8) * 360
  const delay = index * 0.2
  return {
    transform: \`rotate(\${angle}deg) translateX(30px)\`,
    animationDelay: delay + 's'
  }
}
</script>

<style scoped>
.laser-beam {
  width: 150px;
  height: 4px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    #ff0000 20%, 
    #ff6666 50%, 
    #ff0000 80%, 
    transparent 100%
  );
  position: absolute;
  animation: laserPulse 2s ease-in-out infinite;
  box-shadow: 
    0 0 10px #ff0000,
    0 0 20px #ff0000,
    0 0 30px #ff0000;
}

.laser-particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #ff6666;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  animation: laserParticle 3s linear infinite;
  box-shadow: 0 0 5px #ff6666;
}

@keyframes laserPulse {
  0%, 100% { opacity: 0.8; transform: scaleX(1); }
  50% { opacity: 1; transform: scaleX(1.1); }
}

@keyframes laserParticle {
  0% { transform: rotate(0deg) translateX(0px); opacity: 1; }
  100% { transform: rotate(360deg) translateX(50px); opacity: 0; }
}
</style>`,
    explanation: `【技术原理】\n- 利用多层发光和粒子动画模拟激光效果。\n- 结合脉冲和粒子扩散动画。\n\n【实现要点】\n1. 激光束主体脉冲动画。\n2. 粒子围绕激光旋转扩散。\n3. 多重阴影增强发光效果。\n\n【应用场景】\n- 科技展示、游戏界面、特效动画等。`
  }
]