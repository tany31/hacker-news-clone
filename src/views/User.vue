<template>
  <div class="user">
    <base-loader v-show="loading" />
    <div class="user__content">
      <h1>{{ username }}</h1>
    </div>
  </div>
</template>

<script>
import BaseLoader from '@/components/common/BaseLoader.vue';
import newsService from '@/services/news';

export default {
  name: 'User',
  components: { BaseLoader },
  props: {
    username: { type: String, required: true },
  },

  data() {
    return {
      user: {},
      loading: false,
    };
  },

  created() {
    this.fetchUser();
  },

  methods: {
    fetchUser() {
      return newsService.fetchUser(this.username);
    },
  },
};
</script>

<style lang="scss">
.user {
  display: flex;
  flex-direction: row;
  margin: $--gutter-md;
  max-width: $--content-width;
  width: 100%;

  &__main {
    width: 100%;
  }

  &__content {
    width: 100%;
    background: $--white;
    box-shadow: 0px 0px 10px 1px rgb(0 0 0 / 15%);
    border-radius: 5px;
    padding: $--gutter;
  }
}
</style>
