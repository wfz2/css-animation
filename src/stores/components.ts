import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { ComponentInfo, Category } from '../types'

export const useComponentStore = defineStore('components', () => {
  // 状态
  const components = ref<ComponentInfo[]>([])
  const categories = ref<Category[]>([
    {
      id: 'animation',
      name: '基础动画',
      description: '常用的基础动画效果',
      icon: '🎬',
      count: 0
    },
    {
      id: 'shape',
      name: '异形图',
      description: '各种异形图形组件',
      icon: '🔷',
      count: 0
    },
    {
      id: 'effect',
      name: '炫酷效果',
      description: '高级炫酷动画效果',
      icon: '✨',
      count: 0
    }
  ])
  
  const selectedCategory = ref<string>('all')
  const selectedComponent = ref<string>('')
  const searchQuery = ref<string>('')
  
  // 计算属性
  const filteredComponents = computed(() => {
    let filtered = components.value
    
    // 按分类过滤
    if (selectedCategory.value !== 'all') {
      filtered = filtered.filter(comp => comp.category === selectedCategory.value)
    }
    
    // 按搜索关键词过滤
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(comp => 
        comp.name.toLowerCase().includes(query) ||
        comp.description.toLowerCase().includes(query) ||
        comp.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }
    
    return filtered
  })
  
  const componentsByCategory = computed(() => {
    const grouped: Record<string, ComponentInfo[]> = {}
    components.value.forEach(comp => {
      if (!grouped[comp.category]) {
        grouped[comp.category] = []
      }
      grouped[comp.category].push(comp)
    })
    return grouped
  })
  
  // 获取组件详情
  const getComponentById = computed(() => (id: string) => {
    return components.value.find(comp => comp.id === id)
  })
  
  // 动作
  const setSelectedCategory = (category: string) => {
    selectedCategory.value = category
  }
  
  const setSelectedComponent = (componentId: string) => {
    selectedComponent.value = componentId
  }
  
  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }
  
  const addComponent = (component: ComponentInfo) => {
    components.value.push(component)
    updateCategoryCounts()
  }
  
  const updateCategoryCounts = () => {
    categories.value.forEach(category => {
      category.count = components.value.filter(comp => comp.category === category.id).length
    })
  }
  
  return {
    // 状态
    components,
    categories,
    selectedCategory,
    selectedComponent,
    searchQuery,
    
    // 计算属性
    filteredComponents,
    componentsByCategory,
    getComponentById,
    
    // 动作
    setSelectedCategory,
    setSelectedComponent,
    setSearchQuery,
    addComponent,
    updateCategoryCounts
  }
})