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
    explanation: `浮动动画是最基础的CSS动画之一，通过以下关键技术实现：

**核心原理：**
1. **transform属性**：使用translateY()实现垂直位移，相比改变top/bottom属性，transform不会触发重排，性能更好
2. **ease-in-out缓动**：开始和结束时速度较慢，中间加速，模拟自然物理运动
3. **infinite循环**：动画无限重复播放，适合装饰性元素

**关键帧设计：**
- 0%和100%：元素在原始位置（translateY(0)）
- 50%：元素上移15px（translateY(-15px)）
- 简单的两点式动画，CSS会自动插值生成中间帧

**性能优化：**
- 只使用transform属性，避免触发重排和重绘
- 使用GPU加速的CSS属性
- 动画时长适中（3秒），既有视觉效果又不会过于频繁

**应用场景：**
适用于图标、按钮、卡片等需要吸引用户注意但不能过于突兀的元素。`
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
    explanation: `弹跳动画模拟真实物理弹性效果，技术要点如下：

**物理模拟原理：**
1. **多关键帧设计**：使用7个关键帧模拟弹跳的完整周期
2. **递减弹跳高度**：第一次弹跳-20px，第二次-10px，第三次-3px，模拟能量损失
3. **停留时间控制**：在地面位置（0px）停留更长时间，符合物理规律

**关键帧分析：**
- 0%, 20%, 53%, 80%, 100%：在地面位置，占用大部分时间
- 40%, 43%：第一次弹跳峰值，时间短暂
- 70%：第二次弹跳峰值，高度减半
- 90%：第三次弹跳峰值，高度进一步减小

**动画曲线设计：**
- 使用线性插值，但通过关键帧密度控制速度变化
- 上升阶段快速，下降阶段也快速，符合重力加速度

**视觉效果：**
创造出逼真的弹性物体运动感，常用于加载指示器、交互反馈等场景。`
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
    explanation: `脉冲动画通过缩放和透明度变化创造心跳效果：

**核心技术：**
1. **scale变换**：从1.0缩放到1.2，产生20%的放大效果
2. **opacity变化**：透明度从1.0降到0.8，增强脉冲感
3. **ease-in-out缓动**：模拟心跳的自然节奏

**设计理念：**
- 模拟生物心跳的节奏感
- 结合大小和透明度变化，增强视觉冲击
- 2秒周期符合人类心跳频率

**应用价值：**
适用于需要表达"活力"、"重要性"的UI元素，如重要按钮、通知提醒等。`
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
    explanation: `旋转动画是最简单但最实用的动画之一：

**技术特点：**
1. **linear缓动**：匀速旋转，确保视觉连续性
2. **360度完整旋转**：一个周期内完成完整圆周运动
3. **infinite循环**：无限重复，适合长时间显示

**性能优势：**
- 只使用transform: rotate()，GPU加速
- 不触发重排重绘，性能最优
- 兼容性极佳，所有现代浏览器支持

**使用场景：**
- 加载指示器（Loading Spinner）
- 刷新按钮动画
- 装饰性旋转元素`
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
    explanation: `摇摆动画通过快速左右位移创造震动效果：

**震动原理：**
1. **高频率关键帧**：10个关键帧在0.8秒内完成，创造快速震动
2. **对称位移**：左右各8px的位移，幅度适中
3. **交替方向**：奇数帧向左，偶数帧向右

**心理学效应：**
- 模拟现实中的"摇头"动作，表示否定
- 快速震动引起注意，适合错误提示
- 短暂持续时间（0.8秒）避免过度干扰

**触发时机：**
通常配合用户交互触发，如表单验证失败、操作错误等场景。`
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
    explanation: `摆动动画结合位移和旋转创造复杂的摆动效果：

**复合变换技术：**
1. **translateX + rotate组合**：同时进行水平位移和旋转
2. **递减幅度**：位移和旋转角度逐渐减小，模拟阻尼效果
3. **不规则节奏**：关键帧时间点不均匀分布

**物理模拟：**
- 模拟弹性物体的摆动衰减
- 旋转角度与位移方向相关，增强真实感
- 最终回到静止状态

**视觉特色：**
比简单的左右摇摆更有趣味性，适合需要活泼、有趣感觉的界面元素。`
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
    explanation: `钟摆动画精确模拟物理钟摆的运动规律：

**物理原理应用：**
1. **transform-origin设置**：将旋转中心设为顶部中心，模拟悬挂点
2. **角度递减**：15° → 10° → 5° → 5°，符合摆动衰减规律
3. **对称摆动**：正负角度交替，模拟左右摆动

**关键技术点：**
- transform-origin: top center 是核心，决定了摆动的轴心
- 使用rotate()而非translate，更符合钟摆的实际运动
- 角度设计考虑了空气阻力和重力的影响

**应用场景：**
适合需要表现"等待"、"思考"或装饰性的动画效果。`
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
    explanation: `3D翻转动画利用CSS 3D变换创造立体翻转效果：

**3D技术要点：**
1. **perspective属性**：设置观察者与3D元素的距离，400px提供适中的3D效果
2. **transform-style: preserve-3d**：保持子元素的3D变换效果
3. **rotateY()变换**：绕Y轴旋转，创造水平翻转效果

**视觉层次：**
- 0°-90°：正面逐渐消失
- 90°-180°：侧面视角，厚度最明显
- 180°-270°：背面逐渐出现
- 270°-360°：回到正面

**性能考虑：**
3D变换会启用硬件加速，但也会消耗更多GPU资源，适合用于重点交互元素。`
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
    explanation: `六边形是最常用的异形图之一，技术实现详解：

**clip-path技术：**
1. **polygon函数**：定义多边形的顶点坐标
2. **坐标系统**：使用百分比坐标，确保响应式适配
3. **顶点计算**：6个顶点按顺时针方向定义

**坐标解析：**
- (30%, 0%)：左上角顶点
- (70%, 0%)：右上角顶点  
- (100%, 50%)：右侧顶点
- (70%, 100%)：右下角顶点
- (30%, 100%)：左下角顶点
- (0%, 50%)：左侧顶点

**设计优势：**
- 完美的几何对称性
- 强烈的科技感和现代感
- 适合蜂窝布局和科技界面

**应用场景：**
科技公司Logo、游戏界面、数据可视化图表等。`
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
    explanation: `五角星是复杂的几何图形，需要精确的数学计算：

**几何原理：**
1. **10个坐标点**：5个外顶点 + 5个内凹点
2. **黄金比例**：内外半径比例约为0.618，符合美学标准
3. **角度计算**：每个角72°，内角36°

**坐标系统：**
- 外顶点：五角星的5个尖角
- 内凹点：连接相邻外顶点的凹陷处
- 中心对称：所有点围绕中心点对称分布

**技术难点：**
- 坐标计算复杂，需要三角函数计算
- 内外比例影响视觉效果
- 路径顺序影响填充效果

**应用价值：**
评分系统、收藏功能、奖励徽章等场景的核心图形元素。`
  },

  {
    id: 'heart-shape',
    name: '心形',
    description: '心形图形，表达情感和喜爱',
    category: 'shape',
    difficulty: 'intermediate',
    tags: ['心形', '爱心', '情感', '喜爱'],
    component: 'HeartShape',
    code: `<template>
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
</style>`,
    explanation: `心形是最具情感表达力的图形，实现技术独特：

**构造原理：**
1. **主体正方形**：旋转-45°作为心形底部
2. **两个伪元素**：创建心形上方的两个弧形
3. **圆角矩形**：使用border-radius创建半圆效果

**几何组合：**
- 主体：45°旋转的正方形
- ::before伪元素：左上方的半圆
- ::after伪元素：右上方的半圆
- 三者组合形成完整心形

**技术要点：**
- transform-origin精确控制旋转中心
- 伪元素定位需要精确计算
- 颜色渐变增强视觉效果

**情感价值：**
在UI设计中代表"喜欢"、"收藏"、"关注"等正面情感，用户接受度高。`
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
    explanation: `霓虹效果是最具视觉冲击力的文字效果之一：

**多层阴影技术：**
1. **内层阴影**：白色小范围阴影模拟灯管本体
2. **中层阴影**：蓝色中等范围阴影创造发光晕
3. **外层阴影**：蓝色大范围阴影形成光晕扩散

**发光层次分析：**
- 0 0 5px #fff：核心白光
- 0 0 10px #fff：内层白色光晕
- 0 0 15px #0073e6：内层蓝色光晕
- 0 0 20px #0073e6：中层蓝色光晕
- 0 0 35px #0073e6：外层蓝色光晕
- 0 0 40px #0073e6：最外层蓝色扩散

**动画设计：**
- alternate方向：来回循环，模拟霓虹灯闪烁
- 两种强度切换：强光和弱光交替
- 2秒周期：适中的闪烁频率

**应用场景：**
夜店风格、游戏界面、科幻主题、品牌展示等需要强烈视觉效果的场合。`
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
    explanation: `故障效果模拟数字设备故障时的RGB分离现象：

**RGB分离原理：**
1. **三层文本**：主文本（白色）+ 红色通道 + 绿色通道
2. **错位动画**：三层文本以不同方向和时间错位移动
3. **attr()函数**：伪元素通过attr(data-text)获取文本内容

**技术实现：**
- 主文本：白色，正常位置，轻微抖动
- ::before伪元素：红色，独立动画轨迹
- ::after伪元素：绿色，另一套动画轨迹
- z-index层次：确保主文本在最上层

**动画设计：**
- 主动画：2秒周期，模拟整体故障
- 分通道动画：0.5秒快速周期，模拟RGB分离
- 随机性：不同方向的位移创造随机故障感

**视觉效果：**
模拟CRT显示器故障、数字信号干扰等效果，营造赛博朋克和科技故障的氛围。`
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
    explanation: `粒子效果通过大量小元素的协调运动创造动态背景：

**粒子系统设计：**
1. **随机参数**：每个粒子的位置、大小、延迟、持续时间都随机生成
2. **生命周期**：粒子从底部生成，向上浮动，最终消失
3. **透明度变化**：模拟粒子的淡入淡出效果

**随机化算法：**
- 延迟时间：0-3秒随机，避免同步运动
- 持续时间：3-5秒随机，创造节奏变化
- 水平位置：0-100%随机分布
- 粒子大小：2-6px随机，增加层次感

**动画轨迹：**
- 垂直运动：从底部(-10px)到顶部(-160px)
- 水平漂移：轻微的左右摆动(±10px)
- 透明度：0→1→0.8→1→0的复杂变化

**性能优化：**
- 使用transform而非改变position
- 合理控制粒子数量（默认15个）
- CSS动画比JavaScript动画性能更好

**应用场景：**
背景装饰、成功反馈、庆祝效果、加载动画等需要营造氛围的场景。`
  }

  // 可以继续添加更多组件...
]