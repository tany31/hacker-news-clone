<template>
  <div class="news-item">
    <div class="news-item__score">{{ score }}</div>
    <div class="news-item__content">
      <p class="news-item__title">
        {{ title }}
        <a class="news-item__link" :href="url" target="_blank"><icon-new-tab class="news-item__link-icon" /></a>
      </p>
      <small class="news-item__subtitle">by {{ by }} | {{ time }} ago | {{ descendants }} comments</small>
    </div>
  </div>
</template>

<script>
import IconNewTab from '@/components/Icons/IconNewTab.vue';

export default {
  name: 'NewsItem',
  components: { IconNewTab },
  props: {
    by: { type: String, default: '' },
    descendants: { type: Number, default: 0 },
    score: { type: Number, default: 0 },
    time: { type: Number, default: 0 },
    title: { type: String, default: '' },
    url: { type: String, default: '' },
  },
};
</script>

<style lang="scss">
.news-item {
  display: flex;
  padding: $--gutter;

  &:not(:last-child) {
    border-bottom: 1px solid $--gray;
  }

  &__score {
    flex-shrink: 0;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: $--gutter-sm;
    font-weight: $--font-weight-semiBold;
    color: $--primary;
    font-size: $--font-size-medium;
  }

  &__subtitle {
    color: $--dark-gray;
  }

  &__link {
    color: inherit;
    transition: color 0.3s;
    text-decoration: none;
    vertical-align: middle;

    &:hover {
      color: $--primary;
    }
  }

  &__link-icon {
    width: 14px;
    height: 14px;
  }
}
</style>
