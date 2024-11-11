<template>
  <div class="w-full h-full grid grid-cols-4 pt-10 pb-5">
    <div class="grid-cols-1 flex justify-center">
      <NuxtLink to="/">
        <img
          src="../assets/imgs/moduleImgs/logo.png"
          alt="logo img"
          class="cursor-pointer"
        />
      </NuxtLink>
    </div>
    <div
      v-for="(item, index) in 3"
      :key="index"
      class="grid-cols-1 flex flex-col items-center gap-5"
    >
      <span
        class="text-[#6E7491] font-bold text-[1.125rem]/[1.5625rem] text-left"
        >Support</span
      >
      <span
        v-for="(item, index) in 6"
        :key="index"
        class="text-[1.0625rem]/[21px]"
        >Help Center</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped></style>
