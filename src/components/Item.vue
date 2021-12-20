<template>
  <li :style="{background: bgcolor}" 
  @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="confirmDelete">删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    todo: Object,
    deleteTodo: Function,
  },
  components: {},
  data() {
    return {
      bgcolor: "white",
      isShow: false
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleEnter(isEnter){
      if(isEnter){
        this.bgcolor = "#aaaaaa"
        this.isShow = true
      }else{
        this.bgcolor = "#ffffff"
        this.isShow = false
      }
    },
    confirmDelete(){
      if(confirm("确定删除吗")){
        this.deleteTodo(this.index)
      }
    }
  },
};
</script>

<style scoped>


/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

</style>
