// rootReducer.js
import {combineReducers} from '@reduxjs/toolkit';
// import catReducer from './catSlice'; // Import your catSlice reducer
// import todoReducer from './todo/todoSlice';

import todoReducer from './todo/todoSlice';
import catReducer from './cat/catSlice';

const rootReducer = combineReducers({
  // Add more reducers here if you have others
  todos: todoReducer,
  cats: catReducer,
});

export default rootReducer;
