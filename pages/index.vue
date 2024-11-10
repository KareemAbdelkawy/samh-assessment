<template>
  <div>
    <div class="text-8xl text-neutral-400">from index page</div>
    <div
      class="my-5 rounded-full bg-brand-green-800 shadow-md py-2 px-5 text-white w-fit"
    >
      <NuxtLink to="/contact-us"> Go to ContactUs </NuxtLink>
    </div>
    <p>{{ name }}</p>
    ----------------
    <p>description {{ description }}</p>
  </div>
</template>

<script>
import { mapActions, mapState, mapStores } from 'pinia';

export default {
  name: 'landingPage',
  computed: {
    ...mapStores(useLandingPageStore, useCmsSharedMethodsStore),
    ...mapState(useLandingPageStore, ['name', 'description']),
    ...mapState(useCmsSharedMethodsStore, ['seoMeta']),
  },
  methods: {
    ...mapActions(useLandingPageStore, ['getLandingData']),
    ...mapActions(useCmsSharedMethodsStore, ['setSEO']),
  },

  async created() {
    // You can add dynamic SEO meta tags using this action, but first, ensure this page is included in the SEO section of the CMS.
    // await this.setSEO('add page title here');

    //useHead lets you define your site's SEO meta tags as an object
    useHead(this.seoMeta);
  },

  // must use serverPrefetch() hook for Server-Side Rendering.
  async serverPrefetch() {
    if (!this.name) {
      await this.getLandingData();
    }
  },

  // must use mounted() hook for Client-Side Rendering.
  async mounted() {
    // Don't forget to add condition before call backend
    if (!this.name) {
      await this.getLandingData();
    }
  },
};
</script>

<style scoped>
/* Your styles go here */
</style>
<style lang="scss" scoped></style>
