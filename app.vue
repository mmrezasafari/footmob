<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#111827' : 'white')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  htmlAttrs: {
    lang: 'fa',
    dir: 'rtl'
  }
})

useSeoMeta({
  titleTemplate: 'فوت موب',
  ogSiteName: 'fotmob - persian'
})
</script>
<template>
  <v-app>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

  </v-app>
</template>
