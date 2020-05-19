import { call, put } from "redux-saga/effects";
import * as actions from "../actions";
import { takeAction } from "services/forkActionSagas";
import * as wrappedAPI from "api/wrappedMenu";

export function* handleGetAllTermsOfUnit(action) {
  try {
    let res = yield call(wrappedAPI.getAllTermsOfUnit, action.payload);
    if (res.data.success) {
      yield put(actions.getAllTermsOfUnitSuccess(res.data.data));
    } else {
      yield put(actions.getAllTermsOfUnitFail(res.data.message));
    }
  } catch (err) {
    yield put(actions.getAllTermsOfUnitFail(err));
  }
}

export function* handleGetIntroduce(action) {
  try {
    let res = yield call(wrappedAPI.getIntroduce);
    if (res.data.success) {
      yield put(actions.getIntroduceSuccess(res.data.data));
    } else {
      yield put(actions.getIntroduceFail(res.data.message));
    }
  } catch (err) {
    yield put(actions.getIntroduceFail(err));
  }
}

export function* handleGetStructureByTerm(action) {
  try {
    let res = yield call(wrappedAPI.getStructureByTerm, action.payload);
    if (res.data.success) {
      yield put(actions.getStructureByTermSuccess(res.data.data));
    } else {
      yield put(actions.getStructureByTermFail(res.data.message));
    }
  } catch (err) {
    yield put(actions.getStructureByTermFail(err));
  }
}

/*---------------------------------------------------------------------*/
// Get All Terms
export function* getAllTermsOfUnit() {
  yield takeAction(actions.getAllTermsOfUnit, handleGetAllTermsOfUnit);
}
// Get Introduce
export function* getIntroduce() {
  yield takeAction(actions.getIntroduce, handleGetIntroduce);
}
// Get Structure By Term
export function* getStructureByTerm() {
  yield takeAction(actions.getStructureByTerm, handleGetStructureByTerm);
}
/*---------------------------------------------------------------------*/

export default [getAllTermsOfUnit, getIntroduce, getStructureByTerm];
