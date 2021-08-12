<template>
  <div class="news-details">
    <div class="news-details__main">
      <div class="news-details__content">
        <div class="news-details__headline">
          <news-score>{{ story.score }}</news-score>
          <small>
            <router-link :to="{ name: 'User', params: { username: story.by } }">{{ story.by }}</router-link></small
          >

          <h1 class="news-details__title">{{ story.title }}</h1>
        </div>
      </div>
      <div class="news-details__content">
        <div class="news-details__comments">
          <p>Comments {{ story.descendants }}</p>
          <base-divider />
          <template v-for="(comment, i) in comments">
            <div :key="comment.id" class="news-details__comment">
              <news-comment v-bind="comment" />
            </div>
            <base-divider :key="i" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseDivider from '@/components/common/BaseDivider.vue';
import NewsScore from '@/components/News/Score.vue';
import NewsComment from '@/components/News/Comment.vue';

import newsService from '@/services/news';

export default {
  name: 'NewsDetails',
  components: { BaseDivider, NewsScore, NewsComment },
  props: {
    id: { type: [Number, String], required: true },
  },
  data() {
    return {
      story: {},
      comments: [],
    };
  },

  created() {
    this.fetchStory().then(() => {
      this.fetchComments();
    });
  },
  methods: {
    fetchStory() {
      return newsService.fetchItem(this.id).then(story => (this.story = story));
    },

    fetchComments() {
      const commentsId = this.story.kids;
      if (commentsId && commentsId.length) {
        return newsService.fetchItems(commentsId).then(comments => (this.comments = comments));
      }
    },
  },
};
</script>

<style lang="scss">
.news-details {
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
    margin-bottom: $--gutter;
  }

  &__headline {
    padding: $--gutter;
  }

  &__comments {
    padding: $--gutter;
  }

  &__comment {
    margin: $--gutter 0;
  }

  &__title {
    font-size: $--font-size-subtitle;
  }
}
</style>
