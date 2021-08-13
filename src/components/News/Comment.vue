<template>
  <div class="news-comment">
    <div class="news-comment__body">
      <small class="news-comment__details">
        <router-link :to="{ name: 'User', params: { username: by } }">
          {{ by }}
        </router-link>
        {{ new Date(time * 1000).toLocaleString() }}
      </small>
      <!-- eslint-disable-next-line -->
    <p v-html="text"></p>
    </div>

    <template v-if="comments && comments.length">
      <button class="news-comment__show-button" @click="isHiddenComments = !isHiddenComments">
        {{ isHiddenComments ? `[ + ${comments.length} more]` : '[ - ]' }}
      </button>
      <CommentList v-if="!isHiddenComments" class="news-comment__replies" :comments="comments" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    by: { type: String, default: '' },
    time: { type: Number, required: true },
    text: { type: String, default: '' },
    comments: { type: Array, default: () => [] },
  },

  data() {
    return {
      isHiddenComments: false,
    };
  },
  beforeCreate: function () {
    this.$options.components.CommentList = require('./CommentList.vue').default;
  },

  methods: {
    showComments() {},
  },
};
</script>

<style lang="scss">
.news-comment {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__body {
    padding: $--gutter-sm 0;
  }

  &__details {
    color: $--dark-gray;
  }

  &__replies {
    padding-left: 24px;
    border-left: 1px solid $--gray;
    margin-left: 8px;
  }

  &__show-button {
    background: none;
    border: none;
    color: $--dark-gray;
    cursor: pointer;
    padding: 0;
    margin-bottom: $--gutter-sm;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
