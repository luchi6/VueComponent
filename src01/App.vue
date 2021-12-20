<template>
  <div>
    <h2>{{msg}}</h2>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  data() {
    return {
      msg: "hello world",
    };
  },
  components: {
    HelloWorld
  },
};
</script>

<style>
div {
  color: red;
}
</style>