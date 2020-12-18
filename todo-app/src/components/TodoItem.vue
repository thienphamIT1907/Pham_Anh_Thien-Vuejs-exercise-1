<template>
  <div class="todo-item">
    <div class="todo-item__no">
      {{ todoItemProp.id }}
    </div>
    <div class="todo-item__content">
      <p>
        {{ todoItemProp.content }}
      </p>
    </div>
    <div class="todo-item__status">
      <button class="todo-item__done-btn" @click="makeDone(todoItemProp)">
        Done
      </button>
      <button class="todo-item__remove-btn" @click="removeTodo(todoItemProp.id)">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todoItemProp"],
  methods: {
    makeDone(id) {
      this.$emit("make-done-request", id);
    },
    removeTodo(id) {
      this.$emit("remove-request", id);
    }
  },
};
</script>

<style scoped>
.todo-item {
  padding: 20px 10px;
  box-shadow: 5px 5px 9px #8395a7;
  border-radius: 5px;
  width: 55%;
  background: #4b4b4b;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  color: white;
  margin-bottom: 1em;
  transition: all 0.3s;
  cursor: pointer;
}

.todo-item:hover {
  box-shadow: 5px 5px 20px #918ab6;
  background-color: #786fa6;
}

.todo-item__status,
.todo-item__no,
.todo-item__content {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Done - remove button */
.todo-item__done-btn,
.todo-item__remove-btn {
  border: none;
  padding: 0.8em 0.8em;
  margin: 0 10px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
}

.todo-item__done-btn:focus,
.todo-item__remove-btn:focus {
  outline: none;
}

.todo-item__done-btn {
  background-color: #1289a7;
  color: white;
  transition: all 0.4s;
}

.todo-item__done-btn:hover {
  background-color: #46c0df;
  box-shadow: 0 0 20px#63c5dd;
}

.todo-item__remove-btn {
  background-color: #ed4c67;
  color: white;
  transition: all 0.4s;
}

.todo-item__remove-btn:hover {
  background-color: #f37c90;
  box-shadow: 0 0 20px#ee6e83;
}
</style>
