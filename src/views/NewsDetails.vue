<template>
  <h1>{{ id }}</h1>
</template>

<script>
export default {
  name: 'NewsDetails',
  props: {
    id: { type: Number, required: true },
  },
};
</script>

<style></style>
