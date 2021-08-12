<template>
  <transition name="fade">
    <div class="base-loader">
      <base-spinner />
    </div>
  </transition>
</template>

<script>
import BaseSpinner from '@/components/common/BaseSpinner.vue';
export default {
  name: 'BaseLoader',
  components: { BaseSpinner },
};
</script>

<style lang="scss">
.base-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba($--white, 0.7);
  z-index: 999;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
