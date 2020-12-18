<template>
  <div class="add-new-todo">
    <input
      type="text"
      placeholder="Type something..."
      v-model.trim="newTodoInput"
      @keyup.enter="addNewTodo()"
      :class="{ inputEmpty: isEmpty }"
    />
  </div>
  <div class="filter">
    <button class="filter__button" @click="getList('all')">
      All
    </button>
    <button class="filter__button" @click="getList('completed')">
      Completed
    </button>
    <button class="filter__button" @click="getList('uncomplete')">
      Uncomplete
    </button>
  </div>
  <div v-for="item in showList" :key="item.id" class="todo-list">
    <todo-item
      :todoItemProp="item"
      @make-done-request="makeDone($event)"
      @remove-request="removeTodo($event)"
      :class="{ done: item.isDone }"
    ></todo-item>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { mapGetters, mapState } from "vuex";
export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      newTodoInput: "",
      isEmpty: false,
      filterOption: "",
      showList: this.$store.state.todoList
    };
  },
  computed: {
    ...mapState(["todoList", "completedList"]),
    ...mapGetters(["getCompletedTodo", 'getAllTodo', 'getUncompleteTodo']),
  },
  methods: {
    addNewTodo() {
      if (this.newTodoInput !== "") {
        this.$store.commit("addNewTodo", {
          id: Math.floor(Math.random() * 101),
          content: this.newTodoInput,
          isDone: false,
        });
        this.newTodoInput = "";
      } else {
        this.isEmpty = true;
        setTimeout(() => (this.isEmpty = false), 500);
      }
    },

    makeDone(e) {
      this.$store.dispatch("makeDoneRequest", e);
    },

    removeTodo(id) {
      this.$store.dispatch("removeRequest", id);
    },

    getList(filterOption) {
      switch(filterOption) {
        case 'all': this.showList = this.getAllTodo; break;
        case 'completed': this.showList = this.getCompletedTodo; break;
        case 'uncomplete': this.showList = this.getUncompleteTodo; break;
        default: this.showList = this.getAllTodo; break;
      }
    }
  },
};
</script>

<style scoped>
.todo-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

/* input new todo */
.add-new-todo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-new-todo > input {
  width: 55%;
  border: 1px solid #d2dae2;
  border-radius: 5px;
  padding: 15px 10px;
  font-size: 1.5em;
  margin-bottom: 2em;
  transition: all 0.3s;
}

.add-new-todo > input:focus {
  outline: none;
  box-shadow: 0 0 20px #00cec9;
}

.inputEmpty {
  background-color: #ff5252;
  color: white;
}

/* filter buttons*/
.filter {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
}

.filter__button {
  width: 120px;
  padding: 10px;
  border: none;
  background-color: #6d214f;
  border-radius: 5px;
  box-shadow: 5px 5px 15px #8395a7;
  margin: 0 1em;
  color: white;
  transition: all 0.2s;
  font-size: 0.9em;
  cursor: pointer;
}

.filter__button:focus {
  outline: none;
}

.filter__button:hover {
  background-color: #227093;
  box-shadow: 5px 5px 20px #48b4e6;
}

.done {
  background-color: #218c74;
  box-shadow: 5px 5px 20px#3bcaab;
}
</style>
