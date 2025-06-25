<template>
  <div class="component-detail" v-if="component">
    <!-- 组件头部信息 -->
    <div class="component-header mb-8">
      <div class="flex items-center justify-between mb-4">
        <h1 class="text-3xl font-bold text-white">{{ component.name }}</h1>
        <div class="flex items-center space-x-2">
          <span 
            class="px-3 py-1 rounded-full text-sm font-medium"
            :class="getDifficultyClass(component.difficulty)"
          >
            {{ getDifficultyText(component.difficulty) }}
          </span>
          <span 
            class="px-3 py-1 rounded-full text-sm font-medium"
            :class="getCategoryClass(component.category)"
          >
            {{ getCategoryText(component.category) }}
          </span>
        </div>
      </div>
      <p class="text-white/70 text-lg">{{ component.description }}</p>
      
      <!-- 标签 -->
      <div class="flex flex-wrap gap-2 mt-4">
        <span
          v-for="tag in component.tags"
          :key="tag"
          class="text-xs bg-white/20 text-white/80 px-2 py-1 rounded"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- 组件演示区域 -->
    <div class="component-demo glass rounded-xl p-8 mb-8">
      <h2 class="text-xl font-semibold text-white mb-6 flex items-center">
        <span class="mr-2">🎮</span>
        组件演示
      </h2>
      <div class="demo-container">
        <div class="demo-showcase">
          <component :is="component.component" />
        </div>
        <div class="demo-controls mt-6">
          <button 
            @click="restartAnimation"
            class="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            重新播放
          </button>
          <button 
            @click="toggleDemo"
            class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors ml-3"
          >
            {{ demoPlaying ? '暂停演示' : '开始演示' }}
          </button>
        </div>
      </div>
    </div>

    <!-- 代码展示区域 -->
    <div class="code-section glass rounded-xl p-8 mb-8">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold text-white flex items-center">
          <span class="mr-2">💻</span>
          源代码
        </h2>
        <button 
          @click="copyCode"
          class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
        >
          <span class="mr-2">📋</span>
          {{ copied ? '已复制' : '复制代码' }}
        </button>
      </div>
      <div class="code-container">
        <pre><code 
          class="hljs language-vue" 
          v-html="highlightedCode"
        ></code></pre>
      </div>
    </div>

    <!-- 代码讲解区域 -->
    <div class="explanation-section glass rounded-xl p-8 mb-8">
      <h2 class="text-xl font-semibold text-white mb-6 flex items-center">
        <span class="mr-2">📖</span>
        实现原理
      </h2>
      <div class="explanation-content rich-text">
        <div v-html="formatExplanation(component.explanation)"></div>
        <!-- 关键知识点 -->
        <div class="key-points mt-8">
          <h3 class="text-lg font-medium text-white mb-4">关键知识点：</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              v-for="point in getKeyPoints(component)"
              :key="point.title"
              class="key-point-card"
            >
              <h4 class="font-medium text-cyan-400 mb-2">{{ point.title }}</h4>
              <p class="text-white/70 text-sm">{{ point.description }}</p>
            </div>
          </div>
        </div>
        <!-- 使用场景 -->
        <div class="use-cases mt-6">
          <h3 class="text-lg font-medium text-white mb-4">适用场景：</h3>
          <ul class="space-y-2">
            <li 
              v-for="useCase in getUseCases(component)"
              :key="useCase"
              class="text-white/70 flex items-center"
            >
              <span class="text-cyan-400 mr-2">•</span>
              {{ useCase }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 相关组件推荐 -->
    <div class="related-components glass rounded-xl p-8">
      <h2 class="text-xl font-semibold text-white mb-6 flex items-center">
        <span class="mr-2">🔗</span>
        相关组件
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="relatedComponent in relatedComponents"
          :key="relatedComponent.id"
          class="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer"
          @click="$router.push(`/component/${relatedComponent.id}`)"
        >
          <div class="flex items-center mb-2">
            <component :is="relatedComponent.component" class="scale-50 mr-3" />
            <h3 class="font-medium text-white">{{ relatedComponent.name }}</h3>
          </div>
          <p class="text-white/60 text-sm">{{ relatedComponent.description }}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center py-20">
    <div class="text-6xl mb-4">🔍</div>
    <h2 class="text-2xl font-bold text-white mb-2">组件未找到</h2>
    <p class="text-white/60">请检查组件ID是否正确</p>
    <router-link 
      to="/" 
      class="inline-block mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
    >
      返回首页
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useComponentStore } from '../stores/components'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/atom-one-dark.css'

// 注册语言
hljs.registerLanguage('vue', xml)

const route = useRoute()
const store = useComponentStore()

// 响应式数据
const copied = ref(false)
const demoPlaying = ref(true)

// 计算属性
const component = computed(() => {
  return store.getComponentById(route.params.id as string)
})

const highlightedCode = computed(() => {
  if (!component.value?.code) return ''
  return hljs.highlight(component.value.code, { language: 'vue' }).value
})

const relatedComponents = computed(() => {
  if (!component.value) return []
  return store.components
    .filter(comp => 
      comp.id !== component.value!.id && 
      (comp.category === component.value!.category || 
       comp.tags.some(tag => component.value!.tags.includes(tag)))
    )
    .slice(0, 6)
})

// 方法
const getDifficultyClass = (difficulty: string) => {
  const classes = {
    basic: 'bg-green-500/20 text-green-400',
    intermediate: 'bg-yellow-500/20 text-yellow-400',
    advanced: 'bg-red-500/20 text-red-400'
  }
  return classes[difficulty as keyof typeof classes] || classes.basic
}

const getDifficultyText = (difficulty: string) => {
  const texts = {
    basic: '基础',
    intermediate: '中级',
    advanced: '高级'
  }
  return texts[difficulty as keyof typeof texts] || '基础'
}

const getCategoryClass = (category: string) => {
  const classes = {
    animation: 'bg-blue-500/20 text-blue-400',
    shape: 'bg-purple-500/20 text-purple-400',
    effect: 'bg-pink-500/20 text-pink-400'
  }
  return classes[category as keyof typeof classes] || classes.animation
}

const getCategoryText = (category: string) => {
  const texts = {
    animation: '基础动画',
    shape: '异形图',
    effect: '炫酷效果'
  }
  return texts[category as keyof typeof texts] || '基础动画'
}

const getKeyPoints = (comp: any) => {
  const pointsMap = {
    animation: [
      { title: 'CSS动画', description: '使用@keyframes定义动画关键帧' },
      { title: 'transform属性', description: '通过变换实现位移、旋转、缩放效果' },
      { title: '缓动函数', description: 'ease-in-out等函数控制动画节奏' },
      { title: '循环播放', description: 'infinite关键字实现无限循环' }
    ],
    shape: [
      { title: 'clip-path', description: '使用裁剪路径创建复杂形状' },
      { title: '伪元素', description: '::before和::after创建额外图形元素' },
      { title: '几何计算', description: '精确计算坐标点确保形状比例' },
      { title: '渐变背景', description: 'linear-gradient创建丰富色彩效果' }
    ],
    effect: [
      { title: '多重阴影', description: 'text-shadow和box-shadow叠加效果' },
      { title: '混合模式', description: 'mix-blend-mode创建特殊视觉效果' },
      { title: '滤镜效果', description: 'filter属性实现模糊、发光等效果' },
      { title: '动态计算', description: 'JavaScript计算动画参数' }
    ]
  }
  return pointsMap[comp.category as keyof typeof pointsMap] || pointsMap.animation
}

const getUseCases = (comp: any) => {
  const useCasesMap = {
    'float-animation': ['图标悬浮效果', '按钮吸引注意', '装饰性元素', '轻量级动画'],
    'bounce-animation': ['加载状态指示', '交互反馈', '弹性按钮', '游戏元素'],
    'pulse-animation': ['通知提醒', '重要按钮强调', '心率监控', '呼吸效果'],
    'hexagon-shape': ['科技感界面', '蜂窝布局', 'Logo设计', '图标容器'],
    'star-shape': ['评分系统', '收藏功能', '奖励徽章', '装饰元素'],
    'heart-shape': ['点赞按钮', '收藏功能', '情感表达', '社交应用'],
    'neon-text-effect': ['夜店风格', '游戏界面', '科幻主题', '品牌展示'],
    'glitch-effect': ['故障艺术', '赛博朋克风格', '技术感界面', '错误状态'],
    'particle-effect': ['背景装饰', '加载动画', '成功反馈', '庆祝效果']
  }
  return useCasesMap[comp.id as keyof typeof useCasesMap] || ['装饰效果', '用户界面', '交互反馈', '视觉增强']
}

const copyCode = async () => {
  if (!component.value?.code) return
  
  try {
    await navigator.clipboard.writeText(component.value.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}

const restartAnimation = () => {
  // 通过重新创建元素来重启动画
  const demoElement = document.querySelector('.demo-showcase')
  if (demoElement) {
    const clone = demoElement.cloneNode(true)
    demoElement.parentNode?.replaceChild(clone, demoElement)
  }
}

const toggleDemo = () => {
  demoPlaying.value = !demoPlaying.value
  const demoElement = document.querySelector('.demo-showcase')
  if (demoElement) {
    demoElement.style.animationPlayState = demoPlaying.value ? 'running' : 'paused'
  }
}

// 富文本格式化实现原理内容（支持换行、列表、加粗等）
function formatExplanation(explanation: string) {
  if (!explanation) return ''
  // 支持markdown风格的加粗、列表、换行
  let html = explanation
    .replace(/\n\n/g, '</p><p>') // 段落
    .replace(/\n- /g, '<ul><li>') // 列表起始
    .replace(/\n\d+\. /g, '<ol><li>') // 有序列表起始
    .replace(/\n/g, '<br>') // 换行
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') // 加粗
    .replace(/- (.*?)(?=<|$)/g, '<li>$1</li>') // 列表项
    .replace(/<ul><li>/g, '<ul><li>') // 保证ul结构
    .replace(/<ol><li>/g, '<ol><li>')
    .replace(/(<\/li>)(?!<li>)/g, '$1</ul>') // 结束ul
    .replace(/(<\/li>)(?!<li>)/g, '$1</ol>') // 结束ol
  return `<p>${html}</p>`
}

onMounted(() => {
  if (!component.value) {
    console.warn('组件未找到:', route.params.id)
  }
})
</script>

<style scoped>
/**
 * 组件详情页样式
 * 提供清晰的布局和良好的代码阅读体验
 */
.component-detail {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-container {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}

.demo-showcase {
  display: inline-block;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.code-container {
  background: #1e1e1e;
  border-radius: 8px;
  overflow-x: auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.code-container pre {
  margin: 0;
  padding: 1.5rem;
}

.code-container code {
  font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* 代码高亮优化 */
.hljs {
  background: transparent !important;
  color: #d4d4d4 !important;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .component-detail {
    padding: 1rem;
  }
  
  .demo-container {
    padding: 1rem;
  }
  
  .demo-showcase {
    padding: 1rem;
  }
  
  .code-container code {
    font-size: 0.8rem;
  }
  
  .glass {
    padding: 1rem !important;
  }
}

/* 滚动条样式 */
.code-container::-webkit-scrollbar {
  height: 8px;
}

.code-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.code-container::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

.code-container::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

.explanation-content {
  background: rgba(30,40,60,0.7);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.08);
  border: 1px solid rgba(255,255,255,0.08);
}
.rich-text p {
  margin-bottom: 1em;
  color: #e0e6ed;
  line-height: 1.9;
}
.rich-text ul, .rich-text ol {
  margin: 0.5em 0 1em 1.5em;
  padding-left: 1.2em;
}
.rich-text li {
  margin-bottom: 0.3em;
  color: #b5d6f6;
  font-size: 1em;
}
.rich-text b {
  color: #7de2fc;
  font-weight: bold;
}
.key-point-card {
  background: linear-gradient(135deg,rgba(0,255,255,0.08),rgba(0,0,40,0.12));
  border: 1px solid rgba(0,255,255,0.08);
  border-radius: 10px;
  padding: 1.2em 1em;
  transition: box-shadow 0.2s;
  box-shadow: 0 2px 8px 0 rgba(0,255,255,0.04);
}
.key-point-card:hover {
  box-shadow: 0 4px 16px 0 rgba(0,255,255,0.10);
}
.use-case-item {
  background: rgba(0,255,255,0.04);
  border-radius: 6px;
  padding: 0.4em 0.8em;
  display: flex;
  align-items: center;
  transition: background 0.2s;
}
.use-case-item:hover {
  background: rgba(0,255,255,0.10);
}
@media (max-width: 768px) {
  .explanation-content {
    padding: 1rem 0.5rem;
  }
  .key-point-card {
    padding: 0.8em 0.6em;
  }
}
</style>