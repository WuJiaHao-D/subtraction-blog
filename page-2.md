---
title: 第2页
layout: page
---

<Page :pagination="2" :total="3" :size="6" :homepage="false">
<template #doc-after>
  <AdItem :custom="ads" type="doc" />
</template>
</Page>

<script lang="ts" setup>
import AdItem from '/src/components/AdItem.vue';
import { ads } from '/.vitepress/theme/ads.ts';
</script>