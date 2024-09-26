<template>
  <div>
    <h1>{{ titleText }}</h1>
  </div>
</template>

<script>
export default {
  name: "TitleComponent",
  props: {
    titleText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: left;
  font-size: 40px;
  margin-bottom: 30px;
  font-weight: bold;
}
</style>
