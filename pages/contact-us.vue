<template>
  <NuxtLoadingIndicator />
  <div>
    <div
      class="py-2 px-3 w-fit bg-brand-blue-100 rounded-full text-sm font-semibold"
    >
      <NuxtLink to="/"> back Home</NuxtLink>
    </div>

    <some-cmp />

    <h1>useCounterStore():-</h1>
    <div class="my-3">
      <h6 class="text-xl font-bold underline uppercase">count {{ count }}</h6>
      <div>
        <br />
        <button
          class="bg-brand-gray-500 text-brand-white px-2 py-1 rounded-full text-base w-40 p-5"
          @click="decrement()"
        >
          -
        </button>
        <button
          class="bg-brand-gray-500 text-brand-white px-2 py-1 rounded-full text-base w-40 p-5"
          @click="increment()"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores, mapActions, mapState } from 'pinia';
import SomeCmp from '~/components/SomeCmp.vue';

export default {
  components: { SomeCmp },
  name: 'contactUs',
  computed: {
    ...mapStores(useCounterStore),
    ...mapState(useCounterStore, ['count']),
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(useCounterStore, ['increment', 'decrement']),
  },
  async mounted() {
    // await this.getlandingData();
    // // NOTE : if will use just pinia
    // await useSomeModuleStore().getHomeData();
  },
};
</script>

<style lang="scss" scoped></style>
