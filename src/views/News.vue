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

    <base-pagination :page="page" :total-count="totalPageCount" :page-length="10" @update-page="updatePage" />
  </div>
</template>

<script>
import BaseLoader from '@/components/common/BaseLoader.vue';
import BasePagination from '@/components/common/BasePagination.vue';
import NewsItem from '@/components/News/NewsItem.vue';

import newsService from '@/services/news';

const PAGE_LENGTH = 10;

export default {
  name: 'News',
  components: { BasePagination, BaseLoader, NewsItem },
  props: {
    type: { type: String, required: true },
  },
  data() {
    return {
      ids: [],
      news: [],

      page: 1,
      loading: false,
    };
  },
  computed: {
    totalPageCount() {
      return Math.ceil(this.ids.length / PAGE_LENGTH);
    },
  },

  watch: {
    type() {
      this.page = 1;
      this.fetchNews();
    },
  },

  created() {
    this.fetchNews();
  },

  methods: {
    fetchNews() {
      this.loading = true;
      this.fetchNewsIds()
        .then(() => this.fetchNewsPage())
        .finally(() => (this.loading = false));
    },

    fetchNewsPage() {
      this.loading = true;
      const startId = (this.page - 1) * PAGE_LENGTH;
      const endId = this.page * PAGE_LENGTH;

      return newsService
        .fetchItems(this.ids.slice(startId, endId))
        .then(news => (this.news = news))
        .finally(() => (this.loading = false));
    },

    fetchNewsIds() {
      return newsService.fetchList(this.type).then(ids => (this.ids = ids));
    },

    updatePage(page) {
      this.page = page;
      this.fetchNewsPage();
    },
  },
};
</script>
