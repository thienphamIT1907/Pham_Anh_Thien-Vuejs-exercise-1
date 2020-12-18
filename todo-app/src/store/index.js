import { createStore } from "vuex";

export default createStore({
  state: {
    todoList: [
      {
        id: 1,
        content: "Do something with company on the rainy day",
        isDone: false
      },
      {
        id: 2,
        content: "Do something with company on the rainy day",
        isDone: true
      },
      {
        id: 3,
        content: "Do something with company on the rainy day",
        isDone: false
      },
      {
        id: 4,
        content: "Do something with company on the rainy day",
        isDone: true
      },
    ],
  },
  mutations: {
    addNewTodo(state, newTodo) {
      state.todoList.push(newTodo);
    },

    makeDone(state, todoItem) {
      state.todoList =  state.todoList.map(item => {
        if (item.id === todoItem.id) {
          return {...item, isDone: !item.isDone}
        }
        return item;
      });
    },

    removeTodo(state, id) {
      let index = state.todoList.map(item => {
        return item.id;
      }).indexOf(id);
      state.todoList.splice(index, 1);
    }
  },
  actions: {
    addNewTodoRequest({ commit }, newTodo) {
      commit('addNewTodo', newTodo);
    },

    deleteTodoRequest({ commit }, todoItem) {
      commit('delelteTodo', todoItem);
    },

    makeDoneRequest({ commit }, todoItem) {
      commit('makeDone', todoItem);
    },

    removeRequest({ commit }, id ) {
      commit('removeTodo', id);
    }
  },

  getters: {
    getCompletedTodo(state) {
      if(state.todoList.length !== 0) {
        return state.todoList.filter(item => item.isDone === true);
      }
    },

    getUncompleteTodo(state) {
      if(state.todoList.length !== 0) {
        return state.todoList.filter(item => item.isDone === false);
      }
    },

    getAllTodo(state) {
      console.log('from store: ' + state.todoList)
      return state.todoList;
    }
  },
  modules: {},
});
