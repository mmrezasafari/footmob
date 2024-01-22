<template>
  <v-layout>
    <NavBar />

    <slot />

    <Footer />
  </v-layout>
</template>
<script setup lang="ts">
import NavBar from '~/components/layouts/NavBar.vue'
import Footer from '~/components/layouts/Footer.vue'
</script>
