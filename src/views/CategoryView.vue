<template>
  <div class="category-view">
    <!-- 分类头部 -->
    <div class="category-header mb-8">
      <div class="flex items-center mb-4">
        <span class="text-4xl mr-4">{{ categoryInfo?.icon }}</span>
        <div>
          <h1 class="text-3xl font-bold text-white">{{ categoryInfo?.name }}</h1>
          <p class="text-white/70 text-lg mt-1">{{ categoryInfo?.description }}</p>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="text-cyan-400 font-semibold">
          共 {{ filteredComponents.length }} 个组件
        </div>
        <!-- 排序选择 -->
        <select 
          v-model="sortBy"
          class="bg-white/20 text-white border border-white/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <option value="name">按名称排序</option>
          <option value="difficulty">按难度排序</option>
          <option value="tags">按标签排序</option>
        </select>
      </div>
    </div>

    <!-- 筛选器 -->
    <div class="filters glass rounded-xl p-6 mb-8">
      <div class="flex flex-wrap items-center gap-4">
        <div class="filter-group">
          <label class="text-white/80 text-sm mb-2 block">难度级别：</label>
          <div class="flex gap-2">
            <button
              v-for="difficulty in difficulties"
              :key="difficulty.value"
              @click="toggleDifficulty(difficulty.value)"
              class="px-3 py-1 rounded-full text-sm transition-colors"
              :class="selectedDifficulties.includes(difficulty.value) 
                ? 'bg-cyan-500 text-white' 
                : 'bg-white/20 text-white/70 hover:bg-white/30'"
            >
              {{ difficulty.label }}
            </button>
          </div>
        </div>
        
        <div class="filter-group">
          <label class="text-white/80 text-sm mb-2 block">标签筛选：</label>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="tag in popularTags"
              :key="tag"
              @click="toggleTag(tag)"
              class="px-3 py-1 rounded-full text-sm transition-colors"
              :class="selectedTags.includes(tag)
                ? 'bg-purple-500 text-white'
                : 'bg-white/20 text-white/70 hover:bg-white/30'"
            >
              {{ tag }}
            </button>
          </div>
        </div>
        
        <!-- 重置筛选 -->
        <button
          @click="resetFilters"
          class="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors"
        >
          重置筛选
        </button>
      </div>
    </div>

    <!-- 组件网格 -->
    <div class="components-grid">
      <div 
        v-if="filteredComponents.length === 0"
        class="text-center py-20"
      >
        <div class="text-6xl mb-4">🔍</div>
        <h2 class="text-2xl font-bold text-white mb-2">没有找到匹配的组件</h2>
        <p class="text-white/60">请尝试调整筛选条件</p>
      </div>
      
      <div 
        v-else
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <div
          v-for="component in paginatedComponents"
          :key="component.id"
          class="component-card glass rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
          @click="$router.push(`/component/${component.id}`)"
        >
          <!-- 组件演示 -->
          <div class="component-preview mb-4">
            <div class="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
              <component :is="component.component" class="scale-75" />
            </div>
          </div>
          
          <!-- 组件信息 -->
          <div class="component-info">
            <h3 class="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
              {{ component.name }}
            </h3>
            <p class="text-white/60 text-sm mb-3 line-clamp-2">
              {{ component.description }}
            </p>
            
            <!-- 标签和难度 -->
            <div class="flex items-center justify-between">
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="tag in component.tags.slice(0, 2)"
                  :key="tag"
                  class="text-xs bg-white/20 text-white/80 px-2 py-1 rounded"
                >
                  {{ tag }}
                </span>
              </div>
              <span 
                class="text-xs px-2 py-1 rounded-full"
                :class="getDifficultyClass(component.difficulty)"
              >
                {{ getDifficultyText(component.difficulty) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 分页 -->
    <div 
      v-if="totalPages > 1"
      class="pagination flex justify-center items-center space-x-2 mt-8"
    >
      <button
        @click="currentPage = Math.max(1, currentPage - 1)"
        :disabled="currentPage === 1"
        class="px-3 py-2 rounded-lg bg-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 transition-colors"
      >
        上一页
      </button>
      
      <span class="text-white/70 mx-4">
        第 {{ currentPage }} 页，共 {{ totalPages }} 页
      </span>
      
      <button
        @click="currentPage = Math.min(totalPages, currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="px-3 py-2 rounded-lg bg-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 transition-colors"
      >
        下一页
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useComponentStore } from '../stores/components'

const route = useRoute()
const store = useComponentStore()

// 响应式数据
const sortBy = ref('name')
const selectedDifficulties = ref<string[]>([])
const selectedTags = ref<string[]>([])
const currentPage = ref(1)
const pageSize = 12

// 难度选项
const difficulties = [
  { value: 'basic', label: '基础' },
  { value: 'intermediate', label: '中级' },
  { value: 'advanced', label: '高级' }
]

// 计算属性
const categoryInfo = computed(() => {
  return store.categories.find(cat => cat.id === route.params.category)
})

const categoryComponents = computed(() => {
  return store.components.filter(comp => comp.category === route.params.category)
})

const popularTags = computed(() => {
  const tagCount = new Map()
  categoryComponents.value.forEach(comp => {
    comp.tags.forEach(tag => {
      tagCount.set(tag, (tagCount.get(tag) || 0) + 1)
    })
  })
  return Array.from(tagCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([tag]) => tag)
})

const filteredComponents = computed(() => {
  let filtered = [...categoryComponents.value]
  
  // 难度筛选
  if (selectedDifficulties.value.length > 0) {
    filtered = filtered.filter(comp => selectedDifficulties.value.includes(comp.difficulty))
  }
  
  // 标签筛选
  if (selectedTags.value.length > 0) {
    filtered = filtered.filter(comp => 
      selectedTags.value.some(tag => comp.tags.includes(tag))
    )
  }
  
  // 排序
  filtered.sort((a, b) => {
    switch (sortBy.value) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'difficulty':
        const difficultyOrder = { basic: 0, intermediate: 1, advanced: 2 }
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
      case 'tags':
        return a.tags.length - b.tags.length
      default:
        return 0
    }
  })
  
  return filtered
})

const totalPages = computed(() => {
  return Math.ceil(filteredComponents.value.length / pageSize)
})

const paginatedComponents = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return filteredComponents.value.slice(start, end)
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

const toggleDifficulty = (difficulty: string) => {
  const index = selectedDifficulties.value.indexOf(difficulty)
  if (index > -1) {
    selectedDifficulties.value.splice(index, 1)
  } else {
    selectedDifficulties.value.push(difficulty)
  }
  currentPage.value = 1 // 重置到第一页
}

const toggleTag = (tag: string) => {
  const index = selectedTags.value.indexOf(tag)
  if (index > -1) {
    selectedTags.value.splice(index, 1)
  } else {
    selectedTags.value.push(tag)
  }
  currentPage.value = 1 // 重置到第一页
}

const resetFilters = () => {
  selectedDifficulties.value = []
  selectedTags.value = []
  sortBy.value = 'name'
  currentPage.value = 1
}

// 监听筛选条件变化，重置页码
watch([selectedDifficulties, selectedTags, sortBy], () => {
  currentPage.value = 1
})
</script>

<style scoped>
/**
 * 分类视图样式
 * 提供灵活的组件展示和筛选功能
 */
.category-view {
  max-width: 1400px;
  margin: 0 auto;
}

.component-card {
  transition: all 0.3s ease;
}

.component-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.component-preview {
  position: relative;
  overflow: hidden;
}

.component-preview::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.component-card:hover .component-preview::before {
  transform: translateX(100%);
}

.filter-group {
  min-width: 200px;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .filters {
    padding: 1rem;
  }
  
  .filter-group {
    min-width: auto;
    width: 100%;
  }
  
  .components-grid {
    grid-template-columns: 1fr;
  }
  
  .pagination {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 1024px) {
  .components-grid .grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style>