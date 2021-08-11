<template>
  <div class="main-layout">
    <the-header />
    <main class="main-layout__main">
      <div class="main-layout__content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'MainLayout',
  components: { TheHeader },
};
</script>

<style lang="scss">
.main-layout {
  &__main {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__content {
    background: $--white;
    max-width: $--content-width;
    width: 100%;
    padding: $--gutter;
    box-shadow: 0px 0px 10px 1px rgb(0 0 0 / 15%);
  }
}
</style>
