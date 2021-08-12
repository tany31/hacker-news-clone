<template>
  <div class="base-pagination">
    <base-button class="base-pagination__button" icon :disabled="isFirstPage" @click="prevPage"
      ><IconRightChevron class="base-pagination__prev-icon"
    /></base-button>
    <span class="base-pagination__page-number">{{ page }} of {{ totalCount }}</span>
    <base-button class="base-pagination__button" icon :disabled="isLastPage" @click="nextPage"
      ><IconRightChevron
    /></base-button>
  </div>
</template>

<script>
import IconRightChevron from '@/components/Icons/IconRightChevron.vue';
import BaseButton from '@/components/common/BaseButton.vue';

export default {
  name: 'BasePagination',
  components: { IconRightChevron, BaseButton },
  props: {
    page: { type: Number, default: 1 },
    totalCount: { type: Number, default: 0 },
    pageLength: { type: Number, default: 0 },
  },

  computed: {
    isLastPage() {
      return this.page >= this.totalCount;
    },

    isFirstPage() {
      return this.page === 1;
    },
  },

  methods: {
    updatePage(page) {
      this.$emit('update-page', page);
    },

    nextPage() {
      if (!this.isLastPage) {
        this.updatePage(this.page + 1);
      }
    },

    prevPage() {
      if (!this.isFirstPage) {
        this.updatePage(this.page - 1);
      }
    },
  },
};
</script>

<style lang="scss">
.base-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: $--gutter;

  &__prev-icon {
    transform: rotate(180deg);
  }

  &__page-number {
    padding: 0 8px;
  }
}
</style>
