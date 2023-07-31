import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import catSaga from './cat/catSaga';
import todoReducer from './todo/todoSlice';
import catReducer from './cat/catSlice';

import rootReducer from './rootReducer'; // Import your rootReducer
import rootSaga from './rootSaga'; // Import your rootSaga

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  // reducer: {
  //   todos: todoReducer,
  //   cats: catReducer,
  // },
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

// then run the saga
// sagaMiddleware.run(catSaga);
sagaMiddleware.run(rootSaga);

export default store;
