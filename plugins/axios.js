import axios from 'axios';
import { API_URLs } from '~/constants';

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp
  let api = axios.create({
    baseURL:
      process.env.NODE_ENV === 'development'
        ? API_URLs.STAGING
        : API_URLs.PRODUCTION,
    timeout: 10000, // a timeout for requests
  });

  nuxtApp.provide('axios', api);
});
