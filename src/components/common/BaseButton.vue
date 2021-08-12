<template>
  <button class="base-button" :class="{ 'base-button--icon': icon }" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    icon: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss">
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid $--primary;
  border-radius: 4px;
  padding: $--gutter-sm $--gutter;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: rgba($--primary, 0.2);
  }

  &[disabled] {
    cursor: default;
    border-color: $--gray;
    pointer-events: none;
  }

  &--icon {
    border-radius: 50%;
    border: none;
    color: $--primary;
    padding: $--gutter-sm;

    &[disabled] {
      color: $--dark-gray;
    }
  }
}
</style>
