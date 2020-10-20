import HomepageIntroduction from './';
import mock from './mock.json'

export default {
  title: 'HomepageIntroduction'
};

export const __DefaultSlice = () => ({
  components: { HomepageIntroduction },
  data() {
    return {
      mock
    }
  },
  template: '<HomepageIntroduction :slice="mock" />'
});
