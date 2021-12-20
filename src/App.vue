<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :deleteTodo="deleteTodo"/>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
export default {
  data() {
    return {
      todos: [
        { id: 1, title: "A", complete: false },
        { id: 2, title: "B", complete: true },
        { id: 3, title: "C", complete: false },
        { id: 4, title: "C", complete: false },
      ],
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
  components: {
    Header,
    List,
    Footer,
  },
};
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>