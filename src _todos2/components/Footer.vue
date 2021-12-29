<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll" />
    </label>
    <span>
      <span>已完成{{ completeNum }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger" v-show="completeNum > 0" @click="clearAllCompleted">
      清除已完成任务
    </button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    todos: Array,
    allCheck: Function,
    clearAllCompleted: Function,
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    completeNum() {
      // return this.todos.filter((todo) => todo.complete).length;
      return this.todos.reduce((pre, todo) => pre + (todo.complete ? 1 : 0), 0);
    },
    isCheckAll: {
      get() {
        return this.completeNum === this.todos.length && this.completeNum > 0;
      },
      set(value) {
        this.allCheck(value);
      },
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
