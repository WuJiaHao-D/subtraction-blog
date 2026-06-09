import { defineConfig } from 'vitepress';
import { usePosts } from '../src/composables/usePosts';
import { hashPassword } from '../src/utils/hashPassword';
import type { ThemeConfig } from '../src/types';

const slot = `
<template #doc-after>
  <AdItem :custom="ads" type="doc" />
</template>
`;

const custom = `
<script lang="ts" setup>
import AdItem from '/src/components/AdItem.vue';
import { ads } from '/.vitepress/theme/ads.ts';
</script>
`;

const { posts, hiddenPosts, excludePosts, descriptionMap, rewrites } = await usePosts({
  pageSize: 6,
  homepage: false,
  srcDir: 'posts',
  excerpt: 150,
  slot,
  custom,
  permalink: 'posts'
});

export default defineConfig<ThemeConfig>({
  base: '/subtraction-blog/',
  title: '减法博客',
  titleTemplate: '减法博客',
  description: '深入原理，精简概念的个人技术博客',
  rewrites,
  cleanUrls: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://wujiahao-d.github.io/subtraction-blog/',
    transformItems: (items) => {
      return items.filter((item) => !hiddenPosts.has(item.url.replace(/\.html$/, '')));
    }
  },
  transformPageData(pageData) {
    const { frontmatter, description } = pageData;
    const { id, password } = frontmatter;

    if (password) {
      frontmatter.password = hashPassword(String(password));
    }
    if (!description) {
      pageData.description = descriptionMap.get(id) as string;
    }
  },
  themeConfig: {
    posts,
    page: {
      max: 5
    },
    classicCategory: false,
    transition: true,
    logo: '/profile.png',
    outline: { level: 2 },
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/frontend' },
      { text: '后端', link: '/backend' },
      { text: 'AI', link: '/ai' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/WuJiaHao-D/subtraction-blog' }],
    footer: {
      message: 'Built with <a href="https://github.com/izhichao/vitepress-theme-minimalism" target="_blank">VitePress Theme Minimalism</a>',
      copyright: `Copyright © 2026-${new Date().getFullYear()} <a href="https://github.com/WuJiaHao-D" target="_blank">WuJiaHao-D</a>`
    },
    search: { provider: 'local' }
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use((md) => {
        md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
          let htmlResult = slf.renderToken(tokens, idx, options);
          if (tokens[idx].tag === 'h1') htmlResult += `<PostMeta />`;
          return htmlResult;
        };
      });
    }
  },
  srcExclude: [...excludePosts, 'README.md', 'README_en-US.md']
});
