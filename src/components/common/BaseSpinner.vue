<template>
  <div class="base-spinner"></div>
</template>

<script>
export default {
  name: 'BaseSpinner',
};
</script>

<style lang="scss">
.base-spinner {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border-top: 3px solid rgba($--primary, 0.2);
  border-right: 3px solid rgba($--primary, 0.2);
  border-bottom: 3px solid rgba($--primary, 0.2);
  border-left: 3px solid $--primary;
  animation: rotate 0.7s infinite linear;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
