export const useCounterStore = defineStore('counter', {
  state() {
    return {
      count: 0,
      name: 'Eduardo',
      moreText: 'herrrrr',
    };
  },
  getters: {
    doubleCount: (state) => state.count + 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
