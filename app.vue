<template>
  <div>
    <section>

      {{ counter }}
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)

</script>