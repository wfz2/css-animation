// 组件类型定义
export interface ComponentInfo {
  id: string
  name: string
  description: string
  category: 'animation' | 'shape' | 'effect'
  difficulty: 'basic' | 'intermediate' | 'advanced'
  tags: string[]
  component: any
  code: string
  explanation: string
}

// 分类定义
export interface Category {
  id: string
  name: string
  description: string
  icon: string
  count: number
}

// 路由参数
export interface RouteParams {
  category?: string
  component?: string
}