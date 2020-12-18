<template>
  <div>
    <header-bar></header-bar>
  </div>
  <div class="main-content">
    <todo-list></todo-list>
  </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import TodoList from "./components/TodoList.vue";
export default {
  components: {
    HeaderBar,
    TodoList,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@330&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  font-family: "Roboto", consolas, tahoma;
}

body {
  background-color: rgb(167, 167, 167);
}

.main-content {
  margin-top: 6em;
}
</style>
