import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {getCatsSuccess, getCatsError} from './catSlice';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* workGetCatsFetch() {
  try {
    const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
    const formatedCats = yield cats.json();
    const formatedCatsSorts = formatedCats.slice(0, 10);
    yield put(getCatsSuccess(formatedCatsSorts));
  } catch (e) {
    yield put(getCatsError({message: e.message}));
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* catSaga() {
//   yield takeEvery('cats/getsCatsFetch', workGetsCatsFetch);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* catSaga() {
  yield takeEvery('cats/getCatsFetch', workGetCatsFetch);
}

export default catSaga;
