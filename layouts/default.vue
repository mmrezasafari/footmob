<template>
  <q-layout view="hHh lpR fFf">
    <NavBar />

    <q-page-container>
      <slot />
    </q-page-container>

    <Footer />
  </q-layout>
</template>
<script setup lang="ts">
import NavBar from '~/components/layouts/NavBar.vue'
import Footer from '~/components/layouts/Footer.vue'
</script>
