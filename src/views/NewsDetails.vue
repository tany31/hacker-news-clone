<template>
  <div class="news-details">
    <base-loader v-show="loading" />
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
          <CommentList v-if="story.kids" :comments="story.comments" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseLoader from '@/components/common/BaseLoader.vue';
import BaseDivider from '@/components/common/BaseDivider.vue';
import NewsScore from '@/components/News/Score.vue';
import CommentList from '@/components/News/CommentList.vue';

import newsService from '@/services/news';

export default {
  name: 'NewsDetails',
  components: { BaseLoader, BaseDivider, NewsScore, CommentList },
  props: {
    id: { type: [Number, String], required: true },
  },
  data() {
    return {
      story: {},
      comments: [],

      loading: false,
    };
  },

  created() {
    this.loading = true;
    this.fetchStory()
      .then(() => this.fetchComments(this.story.kids))
      .then(comments => {
        this.story.comments = comments;
      })
      .finally(() => (this.loading = false));
  },

  methods: {
    fetchStory() {
      return newsService.fetchItem(this.id).then(story => (this.story = story));
    },

    fetchComments(kids) {
      if (kids) {
        return Promise.all(
          kids.map(async kid => {
            const comment = await newsService.fetchItem(kid);
            const children = await this.fetchComments(comment.kids);

            return children.length ? { ...comment, comments: children } : comment;
          })
        );
      }

      return Promise.resolve([]);
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

  &__title {
    font-size: $--font-size-subtitle;
  }
}
</style>
