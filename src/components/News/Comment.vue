<template>
  <div class="news-comment">
    <small class="news-comment__details">
      <router-link :to="{ name: 'User', params: { username: by } }">
        {{ by }}
      </router-link>
      {{ new Date(time * 1000).toLocaleString() }}
    </small>
    <p v-html="text"></p>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    by: { type: String, required: true },
    time: { type: Number, required: true },
    text: { type: String, required: true },
  },
};
</script>

<style lang="scss">
.news-comment {
  &__details {
    color: $--dark-gray;
  }
}
</style>
