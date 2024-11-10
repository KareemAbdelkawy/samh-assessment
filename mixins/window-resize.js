import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  EXTRA_SMALL_MOBILE_BREAKPOINT,
} from '../constants';

export default {
  data() {
    return {
      isExtraSmallMobile: false,
      isMobile: false,
      isTablet: false,
    };
  },
  mounted() {
    if (process.client) {
      this.onResize();
      window.addEventListener('resize', this.onResize);
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('resize', this.onResize);
    }
  },
  methods: {
    onResize() {
      if (process.client) {
        const { innerWidth } = window;
        this.isExtraSmallMobile = innerWidth < EXTRA_SMALL_MOBILE_BREAKPOINT;
        this.isMobile = innerWidth <= MOBILE_BREAKPOINT;
        this.isTablet = innerWidth < TABLET_BREAKPOINT;
      }
    },
  },
};
