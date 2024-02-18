<template>
  <v-card class="mx-auto" rounded="lg">
    <v-card-item class="bg-blue-grey-lighten-4">
      <v-card-title>
        <slot name="title" />
      </v-card-title>
      <v-card-subtitle>
        <slot name="subtitle" />
      </v-card-subtitle>
    </v-card-item>
    <v-card-text class="pa-5 bg-blue-grey-lighten-5">
      <slot name="content" />
    </v-card-text>
  </v-card>
</template>
