# ReduxToolkit
## _Steps for Setup Redux ToolKit_
#### 1. Installation
```sh
npm install @reduxjs/toolkit react-redux
```
#### 2. Folder Structure for redux setup
- ###### App.js : the top-level React component
- ###### /src
  - ###### screen: All  React component
    - Todo.js: a React component that shows the UI for the todo list feature
  - ###### /redux
    - store.js: creates the Redux store instance
    - /features
        - /todo
            - todoSlice.js: the Redux logic for the counter feature
 
#### 3.Development
- Create a Redux Store (src/redux/store.js)
```sh
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
  reducer: {},
})
```

- Provide the Redux Store to React (App.js)
```sh
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/features/store';
import TodoList from './src/screen/TodoList';
const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};
export default App;
```

- Create a Redux State Slice (src/redux/features/todo/todoSlice.js)
```sh
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
```

- Add Slice Reducers to the Storee (src/redux/store.js)
```sh
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todo/todoSlice'

const store = configureStore({
   reducer:{
    todos:todoReducer,
   }
})
export default store;
```
- Use Redux State and Actions in React Components
    check :-https://github.com/singhsnehaa/ReduxToolkit/blob/main/src/screen/TodoList.jsx
#### 4. Run 
    now clean, Build and Run the project.
