<template>
  <div id="app" class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
    <!-- 顶部导航栏 -->
    <nav class="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <router-link to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">温暖</span>
            </div>
            <span class="text-white font-bold text-xl">动画组件库</span>
          </router-link>
          
          <!-- 搜索框 -->
          <div class="flex-1 max-w-md mx-8">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="搜索组件..."
                class="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
              <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
          
          <!-- 导航菜单 -->
          <div class="flex items-center space-x-4">
            <router-link
              to="/"
              class="text-white/80 hover:text-white transition-colors duration-200"
              :class="{ 'text-cyan-400': $route.name === 'home' }"
            >
              首页
            </router-link>
            <a
              href="https://github.com"
              target="_blank"
              class="text-white/80 hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
    
    <!-- 主要内容区域 -->
    <div class="flex min-h-screen pt-16">
      <!-- 左侧导航菜单 -->
      <aside class="fixed left-0 top-16 w-64 h-full bg-black/30 backdrop-blur-md border-r border-white/10 overflow-y-auto">
        <div class="p-4">
          <h2 class="text-white font-semibold mb-4">组件分类</h2>
          
          <!-- 全部分类 -->
          <div class="mb-2">
            <button
              @click="setSelectedCategory('all')"
              class="w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200"
              :class="selectedCategory === 'all' ? 'bg-cyan-500/20 text-cyan-400' : 'text-white/70 hover:bg-white/10 hover:text-white'"
            >
              <span>🎯</span>
              <span>全部组件</span>
              <span class="ml-auto text-xs bg-white/20 px-2 py-1 rounded">{{ components.length }}</span>
            </button>
          </div>
          
          <!-- 分类列表 -->
          <div v-for="category in categories" :key="category.id" class="mb-2">
            <button
              @click="setSelectedCategory(category.id)"
              class="w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200"
              :class="selectedCategory === category.id ? 'bg-cyan-500/20 text-cyan-400' : 'text-white/70 hover:bg-white/10 hover:text-white'"
            >
              <span>{{ category.icon }}</span>
              <span>{{ category.name }}</span>
              <span class="ml-auto text-xs bg-white/20 px-2 py-1 rounded">{{ category.count }}</span>
            </button>
          </div>
        </div>
        
        <!-- 组件列表 -->
        <div class="px-4 pb-4">
          <h3 class="text-white/60 text-sm font-medium mb-3">组件列表</h3>
          <div class="space-y-1">
            <router-link
              v-for="component in filteredComponents"
              :key="component.id"
              :to="`/component/${component.id}`"
              class="block px-3 py-2 text-sm rounded-lg transition-colors duration-200"
              :class="$route.params.id === component.id ? 'bg-purple-500/20 text-purple-400' : 'text-white/60 hover:bg-white/10 hover:text-white'"
            >
              {{ component.name }}
            </router-link>
          </div>
        </div>
      </aside>
      
      <!-- 主内容区域 -->
      <main class="flex-1 ml-64 p-6">
        <router-view />
      </main>
    </div>
  </div>
  <!-- 一键置顶/置底按钮 -->
  <div class="scroll-buttons fixed right-6 bottom-6 z-50 flex flex-col gap-3">
    <button class="scroll-btn bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center transition-all duration-200" @click="scrollToTop">
      <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
    </button>
    <button class="scroll-btn bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center transition-all duration-200" @click="scrollToBottom">
      <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useComponentStore } from './stores/components'

const store = useComponentStore()

// 计算属性
const selectedCategory = computed(() => store.selectedCategory)
const categories = computed(() => store.categories)
const components = computed(() => store.components)
const filteredComponents = computed(() => store.filteredComponents)

// 搜索功能
const searchQuery = computed({
  get: () => store.searchQuery,
  set: (value: string) => store.setSearchQuery(value)
})

// 方法
const setSelectedCategory = (category: string) => {
  store.setSelectedCategory(category)
}

// 滚动到顶部/底部方法
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
const scrollToBottom = () => {
  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
}
</script>

<style scoped>
/* 一键置顶/置底按钮样式 */
.scroll-buttons {
  pointer-events: none;
}
.scroll-btn {
  pointer-events: auto;
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  opacity: 0.85;
}
.scroll-btn:hover {
  opacity: 1;
  transform: translateY(-2px) scale(1.08);
}
</style>