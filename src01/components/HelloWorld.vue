<template>
  <div>
    <h2>{{msg}}</h2>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      msg: "hello world"
    };
  },
};
</script>

<style scoped>
h2 {
  color: blue;
}
</style>
