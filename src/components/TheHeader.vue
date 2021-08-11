<template>
  <header class="the-header">
    <nav class="the-header__nav">
      <router-link class="the-header__nav-link" to="/newstories">New</router-link>
      <router-link class="the-header__nav-link" to="/topstories">Top</router-link>
      <router-link class="the-header__nav-link" to="/jobstories">Job</router-link>
      <router-link class="the-header__nav-link" to="/askstories">Ask</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style lang="scss">
.the-header {
  position: sticky;
  top: 0;
  width: 100%;
  background: $--primary;
  display: flex;
  justify-content: center;
  padding: $--gutter;

  &__nav {
    max-width: $--content-width;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
  }

  &__nav-link {
    font-size: $--font-size-medium;
    color: rgba($--white, 0.7);
    letter-spacing: 0.04em;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    padding: 0 $--gutter-sm;
    padding-bottom: 3px;
    transition: border-color 0.3s, color 0.3s;

    &:not(:last-child) {
      margin-right: $--gutter;
    }

    &:hover,
    &:focus {
      color: $--white;
    }

    &.router-link-active {
      border-color: $--white;
      color: $--white;
    }
  }
}
</style>
