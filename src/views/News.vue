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

export default {
  name: 'News',
  components: { NewsItem },
  data() {
    return {
      news: [
        {
          by: 'myth_buster',
          descendants: 96,
          id: 28138161,
          kids: [],
          score: 158,
          time: 1628657561,
          title: 'The Problem with Ethereum',
          type: 'story',
          url: 'https://tomerstrolight.medium.com/the-problem-with-ethereum-af9692f4af95',
        },
        {
          by: 'em500',
          descendants: 477,
          id: 28133017,
          kids: [],
          score: 754,
          time: 1628623274,
          title: 'TikTok overtakes Facebook as most downloaded app',
          type: 'story',
          url: 'https://asia.nikkei.com/Business/Technology/TikTok-overtakes-Facebook-as-world-s-most-downloaded-app',
        },
        {
          by: 'myth_buster',
          descendants: 96,
          id: 5,
          kids: [],
          score: 158,
          time: 6,
          title: 'The Problem with Ethereum',
          type: 'story',
          url: 'https://tomerstrolight.medium.com/the-problem-with-ethereum-af9692f4af95',
        },
      ],
    };
  },
};
</script>
