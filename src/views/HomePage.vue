<template>
  <div class="space-y-8">
    <!-- 页面标题 -->
    <div class="text-center">
      <h1 class="text-4xl font-bold text-white mb-4 animate-fade-in-down">
        Vue3 动画组件库
      </h1>
      <p class="text-white/70 text-lg animate-fade-in-up">
        精选 100+ 个高质量动画组件，让您的项目更加生动有趣
      </p>
    </div>
    
    <!-- 统计信息 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up delay-200">
      <div v-for="category in categories" :key="category.id" class="glass rounded-xl p-6 text-center">
        <div class="text-3xl mb-3">{{ category.icon }}</div>
        <h3 class="text-white font-semibold text-lg mb-2">{{ category.name }}</h3>
        <p class="text-white/70 text-sm mb-4">{{ category.description }}</p>
        <div class="text-cyan-400 font-bold text-2xl">{{ category.count }}+</div>
      </div>
    </div>
    
    <!-- 组件预览网格 -->
    <div class="space-y-8">
      <!-- 基础动画组件 -->
      <section v-if="componentsByCategory.animation?.length" class="animate-fade-in-up delay-300">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <span class="mr-3">🎬</span>
          基础动画组件
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div
            v-for="component in componentsByCategory.animation"
            :key="component.id"
            class="glass rounded-xl p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
            @click="$router.push(`/component/${component.id}`)"
          >
            <div class="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
              <component :is="component.component" class="scale-75" />
            </div>
            <h3 class="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
              {{ component.name }}
            </h3>
            <p class="text-white/60 text-sm mb-3">{{ component.description }}</p>
            <div class="flex flex-wrap gap-1">
              <span
                v-for="tag in component.tags.slice(0, 2)"
                :key="tag"
                class="text-xs bg-white/20 text-white/80 px-2 py-1 rounded"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 异形图组件 -->
      <section v-if="componentsByCategory.shape?.length" class="animate-fade-in-up delay-500">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <span class="mr-3">🔷</span>
          异形图组件
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div
            v-for="component in componentsByCategory.shape"
            :key="component.id"
            class="glass rounded-xl p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
            @click="$router.push(`/component/${component.id}`)"
          >
            <div class="aspect-square bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
              <component :is="component.component" class="scale-75" />
            </div>
            <h3 class="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
              {{ component.name }}
            </h3>
            <p class="text-white/60 text-sm mb-3">{{ component.description }}</p>
            <div class="flex flex-wrap gap-1">
              <span
                v-for="tag in component.tags.slice(0, 2)"
                :key="tag"
                class="text-xs bg-white/20 text-white/80 px-2 py-1 rounded"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 炫酷效果组件 -->
      <section v-if="componentsByCategory.effect?.length" class="animate-fade-in-up delay-700">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <span class="mr-3">✨</span>
          炫酷效果组件
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div
            v-for="component in componentsByCategory.effect"
            :key="component.id"
            class="glass rounded-xl p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
            @click="$router.push(`/component/${component.id}`)"
          >
            <div class="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
              <component :is="component.component" class="scale-75" />
            </div>
            <h3 class="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
              {{ component.name }}
            </h3>
            <p class="text-white/60 text-sm mb-3">{{ component.description }}</p>
            <div class="flex flex-wrap gap-1">
              <span
                v-for="tag in component.tags.slice(0, 2)"
                :key="tag"
                class="text-xs bg-white/20 text-white/80 px-2 py-1 rounded"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <!-- 快速开始 -->
    <div class="glass rounded-xl p-8 text-center animate-fade-in-up delay-1000">
      <h2 class="text-2xl font-bold text-white mb-4">快速开始</h2>
      <p class="text-white/70 mb-6">点击任意组件查看详细说明和代码示例</p>
      <div class="flex justify-center space-x-4">
        <button class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200">
          查看文档
        </button>
        <button class="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200">
          GitHub
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useComponentStore } from '../stores/components'

const store = useComponentStore()

// 计算属性
const categories = computed(() => store.categories)
const componentsByCategory = computed(() => store.componentsByCategory)
</script>