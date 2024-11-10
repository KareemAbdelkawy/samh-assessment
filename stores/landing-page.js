import { defineStore } from 'pinia';

export const useLandingPageStore = defineStore('landingPage', {
  state: () => ({ name: '' }),
  // Getters are useful when you need to compute something from the state only
  getters: {
    description: (state) => 'description is: ' + state.name,
  },
  actions: {
    async getLandingData() {
      try {
        let lang = useCmsSharedMethodsStore().lang;
        let data = await useCmsSharedMethodsStore().getCMSData('home_intro');

        this.name = data?.response?.[0]?.localizations[lang]?.shortDescription;
      } catch (error) {
        throw error;
      }
    },
  },
});
