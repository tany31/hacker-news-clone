<template>
  <div class="news-score">
    <icon-star class="news-score__icon" />
    <span><slot /></span>
  </div>
</template>

<script>
import IconStar from '@/components/Icons/IconStar.vue';

export default {
  name: 'Score',
  components: { IconStar },
};
</script>

<style lang="scss">
.news-score {
  display: flex;
  align-items: center;
  font-size: $--font-size-subtitle;
  font-weight: $--font-weight-semiBold;

  &__icon {
    margin-right: 5px;
    color: $--primary;
    width: 15px;
    height: 15px;
  }
}
</style>
