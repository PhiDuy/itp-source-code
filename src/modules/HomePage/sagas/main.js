import { call, put } from "redux-saga/effects";
import { delay } from "redux-saga";
import * as actions from "../actions";
import { takeAction } from "services/forkActionSagas";
import * as postsAPI from "api/posts";
import * as wrappedMenuAPI from "api/wrappedMenu";

export function* handleGetPostsByYear(action) {
  try {
    let res = yield call(postsAPI.getPostsByYear, action.payload);
    if (res.data.success) {
      yield delay(500);
      yield put(actions.getPostsByYearSuccess(res.data.data));
    } else {
      yield put(actions.getPostsByYearFail(res.data.message));
    }
  } catch (err) {
    yield put(actions.getPostsByYearFail(err));
  }
}

export function* handleGetBackground(action) {
  try {
    let res = yield call(wrappedMenuAPI.getBackground);
    if (res.data.success) {
      yield delay(500);
      yield put(actions.getBackgroundSuccess(res.data.data));
    } else {
      yield put(actions.getBackgroundFail(res.data.message));
    }
  } catch (err) {
    yield put(actions.getBackgroundFail(err));
  }
}

/*----------------------------------------------------------*/
// Get Post By Year
export function* getPostsByYear() {
  yield takeAction(actions.getPostsByYear, handleGetPostsByYear);
}
// Get Background
export function* getBackground() {
  yield takeAction(actions.getBackground, handleGetBackground);
}
/*----------------------------------------------------------*/

export default [getPostsByYear, getBackground];
