<template>
  <h1>{{ username }}</h1>
</template>

<script>
export default {
  name: 'User',
  props: {
    username: { type: Number, required: true },
  },
};
</script>

<style></style>
