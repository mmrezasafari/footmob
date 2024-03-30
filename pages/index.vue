<template>
  <v-main>
    <div class="mt-16">
      <v-container>
        <v-row>
          <v-col cols="3">
            <SideCard>
              <template #title>titile</template>

              <template #content>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus enim explicabo facere ab, ut harum maiores sequi
                deleniti nam ex quisquam odit non placeat voluptatem dolor illo,
                vitae recusandae nobis!
              </template>
            </SideCard>
          </v-col>
          <v-col cols="6" mar>
            <div class="grid">
              <!-- <MainCard -->
              <!--   v-for="(val, index) in leagueStore.allLeagues.popular" -->
              <!--   class="mb-5" -->
              <!--   :key="index" -->
              <!-- > -->
              <!--   <template #title>{{ val.name }}</template> -->
              <!---->
              <!--   <template #content> </template> -->
              <!-- </MainCard> -->
            </div>
          </v-col>
          <v-col cols="3" class="d-flex flex-column ga-4">
            <SideCard v-if="leagueStore.allLeagues?.popular.length" class="w-100">
              <template #title>
                <p class="mb-0">برترین لیگ ها</p>
              </template>
              <template #content>
                <template v-for="(league, index) in  leagueStore.allLeagues?.popular " :key="index">
                  <v-hover v-slot="{ isHovering, props }">
                    <p class="text-left cursor-pointer px-5 py-2" :class="{ 'bg-green-darken-4': isHovering }"
                      v-bind="props">
                      {{ league.name }}
                    </p>
                  </v-hover>
                </template>
              </template>
            </SideCard>
            <SideCard v-if="leagueStore.allLeagues?.popular.length" class="w-100">
              <template #title>
                <p class="mb-0">تمام لیگ ها</p>
              </template>
              <template #content>
                <v-expansion-panels class="rounded-0" variant="accordion">
                  <template v-for="(league, index) in  leagueStore.allLeagues?.countries" :key="index">
                    <v-expansion-panel class="bg-blue-grey-lighten-5" dir="ltr">
                      <v-hover v-slot="{ isHovering, props }">
                        <v-expansion-panel-title :class="{ 'bg-green-darken-4': isHovering }" v-bind="props">
                          {{ league.name }}
                        </v-expansion-panel-title>
                      </v-hover>
                      <template v-for="(innerLeague, index) in league.leagues" :key="index">
                        <v-hover v-slot="{ isHovering, props }">
                          <v-expansion-panel-text class="cursor-pointer"
                            :class="{ 'bg-blue-grey-lighten-4': isHovering }" v-bind="props">
                            {{ innerLeague.name }}
                          </v-expansion-panel-text>
                        </v-hover>
                      </template>
                    </v-expansion-panel>
                  </template>
                </v-expansion-panels>
              </template>
            </SideCard>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script setup lang="ts">
import MainCard from "~/components/partials/MainCard.vue";
import SideCard from "~/components/partials/SideCard.vue";
import { useLeaguesStore } from "~/store/leaguse";
import { nextTick } from "vue";

definePageMeta({
  name: "home",
  layout: "default",
});

const leagueStore = useLeaguesStore();

onMounted(() => {
  nextTick(async () => {
    await leagueStore.fetchAllLeagues();
  })
})

</script>
