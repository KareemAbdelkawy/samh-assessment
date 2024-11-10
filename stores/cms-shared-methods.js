import { defineStore } from 'pinia';
import { WEBSITE_TITLE } from '~/constants';
export const useCmsSharedMethodsStore = defineStore('cmsSharedMethods', {
  state: () => ({
    lang: 'EN',
    seoMeta: {
      title: WEBSITE_TITLE,
      meta: [],
    },
  }),
  getters: {
    // description: (state) => 'description is: ' + state.name,
  },
  actions: {
    async getCMSData(contentType) {
      try {
        const url = `post/find-post-parent-and-children/${contentType}/language/${this.lang}`;
        const response = await useNuxtApp().$axios.get(url);
        return response.data;
      } catch (error) {
        throw error;
      }
    },

    async getCMSProjects({ contentType, isFeatured }) {
      try {
        const url = `post/language/${this.lang}/contentTypeCode/${contentType}?isFeatured=${isFeatured}`;
        const response = await useNuxtApp().$axios.get(url);
        return response;
      } catch (error) {
        throw error;
      }
    },

    async getCMSDataByID(id) {
      try {
        const url = `post/${id}/${this.lang}`;
        const response = await useNuxtApp().$axios.get(url);
        return response;
      } catch (error) {
        throw error;
      }
    },

    async getCMSFilteredData(queryParams) {
      try {
        const url = `/post?locale=${this.lang}${queryParams}`;
        const response = await useNuxtApp().$axios.get(url);
        return response;
      } catch (error) {
        throw error.response && error.response.data;
      }
    },

    async setSEO(page = '') {
      try {
        if (page == '') {
          this.seoMeta.title = WEBSITE_TITLE;
        } else {
          const url = `page/find-by-name/${page}/${this.lang}`;
          const response = await useNuxtApp().$axios.get(url);
          let data = response?.data?.response;
          if (data) {
            this.seoMeta.title = data.localizations[this.lang]?.title;

            let metaTages = [
              {
                name: 'description',
                content: data.localizations[this.lang]?.description,
              },
              {
                name: 'keywords',
                content: data.localizations[this.lang]?.keyWord,
              },
              {
                name: 'og:title',
                content: data.localizations[this.lang]?.title,
              },
              {
                name: 'og:description',
                content: data.localizations[this.lang]?.description,
              },
              {
                name: 'og:url',
                content: data.pageUrl,
              },
              {
                name: 'og:image',
                content: data.imgUrl,
              },
            ];
            this.seoMeta.meta = metaTages;
          }
        }
      } catch (error) {
        throw error;
      }
    },
  },
});
