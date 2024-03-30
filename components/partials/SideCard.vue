<template>
  <v-card class="mx-auto bg-blue-grey-lighten-5" rounded="lg">
    <v-card-item class="border-b px-3 py-1">
      <v-card-title>
        <slot name="title" />
      </v-card-title>
      <v-card-subtitle v-if="$slots.subtitle">
        <slot name="subtitle" />
      </v-card-subtitle>
    </v-card-item>
    <v-card-text class="pa-0">
      <slot name="content" />
    </v-card-text>
  </v-card>
</template>
