<template>
  <div id="app" class="app-wrapper">
    <Header />
    <main>
      <!-- The page-key forces the component to be destroyed and re-rendered on each route change. -->
      <NuxtPage :page-key="(route) => route.fullPath" />
    </main>
    <footer class="footer"><Footer /></footer>
  </div>
</template>

<script>
import WindowResize from '../mixins/window-resize';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
export default {
  mixins: [WindowResize],
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  bottom: 0;
  width: 100%;
}
</style>
