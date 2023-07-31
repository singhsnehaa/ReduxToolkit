// rootSaga.js
import {all} from 'redux-saga/effects';

// Import your catSaga
import catSaga from './cat/catSaga';

export default function* rootSaga() {
  yield all([
    // Add other sagas here if you have more than just the catSaga
    catSaga(),
  ]);
}
