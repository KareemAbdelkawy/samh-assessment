<template>
  <header
    class="w-full py-10 px-16 flex flex-row justify-between items-center bg-white sticky top-0 z-[99]"
  >
    <NuxtLink to="/">
      <img
        src="../assets/imgs/moduleImgs/logo.png"
        alt="logo img"
        class="cursor-pointer"
      />
    </NuxtLink>
    <div class="flex flex-row gap-12">
      <NuxtLink
        v-for="(item, index) in tabsData"
        :key="index"
        :to="item.href"
        class="text-[1.2rem]/[1.25rem] font-bold cursor-pointer"
        :class="selectedTabKey === item.key ? 'text-[#EAA121]' : 'text-black'"
        @click="selectedTabKey = item.key"
        >{{ item.text }}</NuxtLink
      >
    </div>
    <button
      class="bg-[#EAA121] text-white font-bold p-x-[1.5rem] py-[0.75rem] rounded-[0.375rem] w-[6.625rem]"
    >
      Sign In
    </button>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      tabsData: [
        { text: 'Home', key: 'home', href: '/' },
        { text: 'Promo', key: 'promo', href: '/promo' },
        { text: 'My Booking', key: 'myBooking', href: '/my-booking' },
      ],
      selectedTabKey: 'home',
    };
  },
};
</script>

<style lang="scss" scoped></style>
