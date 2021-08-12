<template>
  <div class="main-layout">
    <the-header />
    <main class="main-layout__main">
      <router-view />
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
}
</style>
