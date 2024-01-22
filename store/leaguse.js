import { defineStore } from 'pinia'

export const useLeaguesStore = defineStore('leaguesStore', () => {
    const leagues = ref(null)

    async function getAllLeagues() {
        try {
            const { data } = await $fetch('/backEnd/allLeagues')
            leagues.value = data
        } catch (err) {
            console.error(err);
        }
    }

    return { getAllLeagues, leagues }
})
