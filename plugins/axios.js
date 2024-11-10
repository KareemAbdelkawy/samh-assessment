import axios from 'axios';
import { API_URLs, X_TENANT_ID } from '~/constants';

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp
  let api = axios.create({
    baseURL:
      process.env.NODE_ENV === 'development'
        ? API_URLs.STAGING
        : API_URLs.PRODUCTION,
    headers: {
      common: {
        'X-TENANT-ID': X_TENANT_ID,
      },
    },
  });

  nuxtApp.provide('axios', api)
});
