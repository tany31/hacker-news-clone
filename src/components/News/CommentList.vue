<template>
  <div>
    <template v-for="comment in comments">
      <div :key="comment.id" class="news-details__comment">
        <comment v-bind="comment" />
      </div>
    </template>
  </div>
</template>

<script>
import Comment from '@/components/News/Comment.vue';

export default {
  name: 'CommentList',
  components: { Comment },
  props: {
    comments: { type: Array, default: () => [] },
  },
};
</script>
