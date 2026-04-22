import { defineConfig } from 'vitepress'
import { getThemeConfig } from '@sugarat/theme/node'

const blogTheme = getThemeConfig({})

export default defineConfig({
  title: '减法博客',
  description: '前端技术博客 - 深入原理，精简概念',

  extends: blogTheme,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'JavaScript', link: '/js_context' },
      { text: '浏览器', link: '/browser_principle' },
      { text: '网络协议', link: '/tcp' },
      { text: 'React', link: '/react_introduction' }
    ],

    sidebar: {
      '/js_': [
        {
          text: 'JavaScript 核心',
          items: [
            { text: '执行上下文', link: '/js_context' },
            { text: '执行机制', link: '/js_execution' },
            { text: '继承机制', link: '/js_inheritance' },
            { text: '类型转换', link: '/type_conversion' }
          ]
        }
      ],

      '/browser': [
        {
          text: '浏览器',
          items: [
            { text: '工作原理', link: '/browser_principle' },
            { text: '安全', link: '/browser_safe' }
          ]
        }
      ],

      '/tcp': [
        {
          text: '网络协议',
          items: [
            { text: 'TCP 协议', link: '/tcp' },
            { text: '网络协议模型', link: '/intent_based' },
            { text: 'HTTP 协议', link: '/intent_http' }
          ]
        }
      ],

      '/react': [
        {
          text: 'React',
          items: [
            { text: 'React 概述', link: '/react_introduction' }
          ]
        }
      ],

      '/exception': [
        {
          text: '异常处理',
          items: [
            { text: '异常处理机制', link: '/exception_handling' },
            { text: 'try-catch-finally', link: '/try_catch_finally' }
          ]
        }
      ],

      '/dependency': [
        {
          text: '依赖管理',
          items: [
            { text: '依赖管理概述', link: '/dependency_manager' },
            { text: 'npm 依赖管理', link: '/npm_dependency_management' }
          ]
        }
      ],

      '/status': [
        {
          text: '状态管理',
          items: [
            { text: '状态管理概述', link: '/status_manager' }
          ]
        }
      ],

      '/void': [
        {
          text: '其他',
          items: [
            { text: 'void 0 是什么', link: '/void_zero' }
          ]
        }
      ]
    }
  }
})