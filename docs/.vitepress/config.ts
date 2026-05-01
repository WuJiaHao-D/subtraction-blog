import { defineConfig } from 'vitepress'
import { getThemeConfig } from '@sugarat/theme/node'

const blogTheme = getThemeConfig({})

const frontendArticles = {
  javascript: [
    { text: '执行上下文', link: '/js_context' },
    { text: '执行机制', link: '/js_execution' },
    { text: '继承机制', link: '/js_inheritance' },
    { text: '类型转换', link: '/type_conversion' }
  ],
  browser: [
    { text: '工作原理', link: '/browser_principle' },
    { text: '安全', link: '/browser_safe' }
  ],
  network: [
    { text: 'TCP 协议', link: '/tcp' },
    { text: '网络协议模型', link: '/intent_based' },
    { text: 'HTTP 协议', link: '/intent_http' }
  ],
  react: [{ text: 'React 概述', link: '/react_introduction' }],
  exception: [
    { text: '异常处理机制', link: '/exception_handling' },
    { text: 'try-catch-finally', link: '/try_catch_finally' }
  ],
  dependency: [
    { text: '依赖管理概述', link: '/dependency_manager' },
    { text: 'npm 依赖管理', link: '/npm_dependency_management' }
  ],
  state: [{ text: '状态管理概述', link: '/status_manager' }],
  misc: [{ text: 'void 0 是什么', link: '/void_zero' }]
}

export default defineConfig({
  base: '/subtraction-blog/',
  title: '减法博客',
  description: '前端技术博客 - 深入原理，精简概念',

  extends: blogTheme,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/frontend/' },
      { text: '后端', link: '/backend/' },
      { text: 'AI', link: '/ai/' }
    ],

    sidebar: {
      '/': [
        {
          text: '分类导航',
          items: [
            { text: '前端', link: '/frontend/' },
            { text: '后端', link: '/backend/' },
            { text: 'AI', link: '/ai/' }
          ]
        },
        {
          text: '前端文章',
          collapsed: false,
          items: [
            { text: 'JavaScript 核心', link: '/frontend/#javascript-核心' },
            ...frontendArticles.javascript,
            { text: '浏览器', link: '/frontend/#浏览器' },
            ...frontendArticles.browser,
            { text: '网络协议', link: '/frontend/#网络协议' },
            ...frontendArticles.network,
            { text: 'React', link: '/frontend/#react' },
            ...frontendArticles.react,
            { text: '异常处理', link: '/frontend/#异常处理' },
            ...frontendArticles.exception,
            { text: '依赖管理', link: '/frontend/#依赖管理' },
            ...frontendArticles.dependency,
            { text: '状态管理', link: '/frontend/#状态管理' },
            ...frontendArticles.state,
            { text: '其他', link: '/frontend/#其他' },
            ...frontendArticles.misc
          ]
        },
        {
          text: '后端',
          items: [{ text: '分类首页', link: '/backend/' }]
        },
        {
          text: 'AI',
          items: [{ text: '分类首页', link: '/ai/' }]
        }
      ]
    }
  }
})
