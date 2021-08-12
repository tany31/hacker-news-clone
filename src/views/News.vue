<template>
  <div class="news">
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
import newsService from '@/services/news';

export default {
  name: 'News',
  components: { NewsItem },
  props: {
    type: { type: String, required: true },
  },
  data() {
    return {
      news: [],
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
      return newsService
        .fetchList(this.type)
        .then(ids => newsService.fetchItems(ids.slice(0, 10)))
        .then(news => (this.news = news));
    },
  },
};
</script>
