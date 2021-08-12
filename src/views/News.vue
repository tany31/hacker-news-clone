<template>
  <div class="news">
    <base-loader v-show="loading" />
    <news-item
      v-for="item in news"
      :key="item.id"
      :score="item.score"
      :by="item.by"
      :time="item.time"
      :title="item.title"
      :utl="item.url"
      :descendants="item.descendants"
    />
  </div>
</template>

<script>
import NewsItem from '@/components/News/NewsItem.vue';
import BaseLoader from '@/components/common/BaseLoader.vue';

import newsService from '@/services/news';

export default {
  name: 'News',
  components: { NewsItem, BaseLoader },
  props: {
    type: { type: String, required: true },
  },
  data() {
    return {
      news: [],
      loading: false,
    };
  },

  watch: {
    type() {
      this.fetchNews();
    },
  },

  created() {
    this.fetchNews();
  },

  methods: {
    fetchNews() {
      this.loading = true;
      return newsService
        .fetchList(this.type)
        .then(ids => newsService.fetchItems(ids.slice(0, 20)))
        .then(news => (this.news = news.filter(n => n)))
        .finally(() => (this.loading = false));
    },
  },
};
</script>
