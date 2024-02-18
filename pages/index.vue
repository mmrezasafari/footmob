<template>
  <v-main>
    <div class="mt-16">
      <v-container>
        <v-row>
          <v-col cols="3">
            <SideCard>
              <template #title>titile</template>
              <template #content>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim explicabo facere ab, ut harum
                maiores sequi deleniti nam ex quisquam odit non placeat voluptatem dolor illo, vitae recusandae nobis!
              </template>
            </SideCard>
          </v-col>
          <v-col cols="6" mar>
            <div class="grid">
              <template v-for="(val, index) in 10">
                <MainCard class="mb-5">
                  <template #title>{{ val }}</template>
                  <template #content>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim explicabo facere ab, ut harum
                    maiores sequi deleniti nam ex quisquam odit non placeat voluptatem dolor illo, vitae recusandae nobis!
                  </template>
                </MainCard>
              </template>
            </div>
          </v-col>
          <v-col cols="3">
            <SideCard>
              <template #title>titile</template>
              <template #content>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim explicabo facere ab, ut harum
                maiores sequi deleniti nam ex quisquam odit non placeat voluptatem dolor illo, vitae recusandae nobis!
              </template>
            </SideCard>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script setup lang="ts">
import MainCard from '~/components/partials/MainCard.vue';
import SideCard from '~/components/partials/SideCard.vue';

definePageMeta({
  name: 'home',
  layout: 'default'
})
</script>
