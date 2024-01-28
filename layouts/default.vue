<template>
  <v-layout>
    <v-locale-provider rtl>
      <NavBar />

      <slot />

      <Footer />
    </v-locale-provider>
  </v-layout>
</template>
<script setup lang="ts">
import NavBar from '~/components/layouts/NavBar.vue'
import Footer from '~/components/layouts/Footer.vue'
</script>
