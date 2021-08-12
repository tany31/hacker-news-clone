<template>
  <h1>{{ username }}</h1>
</template>

<script>
export default {
  name: 'User',
  props: {
    username: { type: String, required: true },
  },
};
</script>

<style></style>
