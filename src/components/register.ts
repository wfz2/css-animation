import type { App } from 'vue'

// 基础动画组件
import FloatAnimation from './animations/FloatAnimation.vue'
import BounceAnimation from './animations/BounceAnimation.vue'
import PulseAnimation from './animations/PulseAnimation.vue'
import SpinAnimation from './animations/SpinAnimation.vue'
import ShakeAnimation from './animations/ShakeAnimation.vue'
import WobbleAnimation from './animations/WobbleAnimation.vue'
import SwingAnimation from './animations/SwingAnimation.vue'
import FlipAnimation from './animations/FlipAnimation.vue'
import SlideInLeftAnimation from './animations/SlideInLeftAnimation.vue'
import SlideInRightAnimation from './animations/SlideInRightAnimation.vue'
import FadeInAnimation from './animations/FadeInAnimation.vue'
import ZoomInAnimation from './animations/ZoomInAnimation.vue'
import RotateAnimation from './animations/RotateAnimation.vue'
import HeartbeatAnimation from './animations/HeartbeatAnimation.vue'
import RubberBandAnimation from './animations/RubberBandAnimation.vue'
import FlashAnimation from './animations/FlashAnimation.vue'

// 异形图组件
import HexagonShape from './shapes/HexagonShape.vue'
import StarShape from './shapes/StarShape.vue'
import DiamondShape from './shapes/DiamondShape.vue'
import TriangleShape from './shapes/TriangleShape.vue'
import OctagonShape from './shapes/OctagonShape.vue'
import ArrowShape from './shapes/ArrowShape.vue'
import CloudShape from './shapes/CloudShape.vue'

// 炫酷效果组件
import NeonTextEffect from './effects/NeonTextEffect.vue'
import GlitchEffect from './effects/GlitchEffect.vue'
import ParticleEffect from './effects/ParticleEffect.vue'
import HologramEffect from './effects/HologramEffect.vue'
import LiquidEffect from './effects/LiquidEffect.vue'
import MatrixRainEffect from './effects/MatrixRainEffect.vue'
import LaserEffect from './effects/LaserEffect.vue'

// 导入组件数据
import { componentList } from '../data/components'
import { useComponentStore } from '../stores/components'

/**
 * 注册所有动画组件到Vue应用实例
 * 包含基础动画、异形图和炫酷效果三大类组件
 * @param app Vue应用实例
 */
export function registerComponents(app: App) {
  const store = useComponentStore()
  
  // 基础动画组件注册
  app.component('FloatAnimation', FloatAnimation)
  app.component('BounceAnimation', BounceAnimation)
  app.component('PulseAnimation', PulseAnimation)
  app.component('SpinAnimation', SpinAnimation)
  app.component('ShakeAnimation', ShakeAnimation)
  app.component('WobbleAnimation', WobbleAnimation)
  app.component('SwingAnimation', SwingAnimation)
  app.component('FlipAnimation', FlipAnimation)
  app.component('SlideInLeftAnimation', SlideInLeftAnimation)
  app.component('SlideInRightAnimation', SlideInRightAnimation)
  app.component('FadeInAnimation', FadeInAnimation)
  app.component('ZoomInAnimation', ZoomInAnimation)
  app.component('RotateAnimation', RotateAnimation)
  app.component('HeartbeatAnimation', HeartbeatAnimation)
  app.component('RubberBandAnimation', RubberBandAnimation)
  app.component('FlashAnimation', FlashAnimation)
  
  // 异形图组件注册
  app.component('HexagonShape', HexagonShape)
  app.component('StarShape', StarShape)
  app.component('DiamondShape', DiamondShape)
  app.component('TriangleShape', TriangleShape)
  app.component('OctagonShape', OctagonShape)
  app.component('ArrowShape', ArrowShape)
  app.component('CloudShape', CloudShape)
  
  // 炫酷效果组件注册
  app.component('NeonTextEffect', NeonTextEffect)
  app.component('GlitchEffect', GlitchEffect)
  app.component('ParticleEffect', ParticleEffect)
  app.component('HologramEffect', HologramEffect)
  app.component('LiquidEffect', LiquidEffect)
  app.component('MatrixRainEffect', MatrixRainEffect)
  app.component('LaserEffect', LaserEffect)
  
  // 初始化组件数据到store
  componentList.forEach(component => {
    store.addComponent(component)
  })
  
  // 更新分类计数
  store.updateCategoryCounts()
}