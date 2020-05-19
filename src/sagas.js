/**
 * @file init sagas
 */

import { all } from "redux-saga/effects";

// Place for sagas' app
import { sagas as WrappedMenu } from "modules/WrappedMenu";
import { sagas as HomePage } from "modules/HomePage";
import { sagas as UnitsPage } from "modules/UnitsPage";
/*---------------------------------------------------------------*/
/*----Saga Root List-----------------*/
let sagasList = [WrappedMenu(), HomePage(), UnitsPage()];

export default function* rootSaga(getState) {
  yield all(sagasList);
}
