<template>
  <div id="app" class="app-wrapper">
    <header class="header">Some header</header>
    <main>
      <!-- The page-key forces the component to be destroyed and re-rendered on each route change. -->
      <NuxtPage :page-key="(route) => route.fullPath" />
    </main>
    <footer class="footer">Some Footer</footer>
  </div>
</template>

<script>
// import WindowResize from '../mixins/window-resize';

export default {
  // mixins: [WindowResize],
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100vh;
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
}
.header {
  position: sticky;
  top: 0;
  width: 100%;
  background: rgb(33, 9, 9);
  color: #fff;
  padding: 1rem;
}

.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  background: rgb(84, 84, 12);
  color: #fff;
  padding: 1rem;
}
</style>
