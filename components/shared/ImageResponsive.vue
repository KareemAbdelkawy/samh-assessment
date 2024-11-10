<template>
  <picture class="h-full">
    <source media="(min-width:1025px)" :srcset="imgObject.imgWeb" />
    <source
      media="(min-width:640px)"
      :srcset="imgObject.imgTablet ?? imgObject.imgWeb"
    />
    <img
      :src="imgObject.imgMobile ?? imgObject.imgWeb"
      :alt="imgObject.fileName ?? ''"
      class="img lg:"
      :class="extraClasses"
    />
  </picture>
</template>
<script>
export default {
  name: 'ImageResponsive',
  props: {
    imgObject: {
      type: Object,
      required: true,
    },
    extraClasses: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
