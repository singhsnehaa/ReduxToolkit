import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    {id: 1, title: 'Todo List 1', isCompleted: false},
    {id: 2, title: 'Todo List 2', isCompleted: false},
    {id: 3, title: 'Todo List 3', isCompleted: true},
  ],
  reducers: {
    deleteTodo: (state, action) => {
      const todoIdToBeDelete = action.payload.todoId;
      const deletetodo = state.filter(todo => todo.id !== todoIdToBeDelete);
      return deletetodo;
    },

    addTodo: (state, action) => {
      const title = action.payload.title;
      state.push({
        title: title,
        id: Date.now(),
        completed: false,
      });
    },

    toggleTodo: (state, action) => {
      const toggleId = action.payload.todoId;

      return state.map(todo => {
        if (todo.id === toggleId) {
          return {...todo, isCompleted: !todo.isCompleted};
        } else {
          return todo;
        }
      });
    },
  },
});

export const {deleteTodo, addTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;
