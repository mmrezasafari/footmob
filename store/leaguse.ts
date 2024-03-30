import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { AllLeagues } from "fotmob/dist/esm/types/all-leagues";

export const useLeaguesStore = defineStore("leaguesStore", () => {
  const allLeagues = ref<AllLeagues>();

  const popularLeagues = computed(() => allLeagues.value?.popular)
  const countries = computed(() => allLeagues.value?.countries)
  const internationalLeagues = computed(() => allLeagues.value?.international)

  async function fetchAllLeagues() {
    try {
      const data: AllLeagues = await $fetch("/backEnd/allLeagues");
      if (data) {
        allLeagues.value = data
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error("fetchAllLeagues default error", err.message);
      }
    }
  }

  return { fetchAllLeagues, allLeagues, popularLeagues, internationalLeagues, countries };
});
