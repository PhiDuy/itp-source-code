import { put } from "redux-saga/effects";
import * as actions from "../actions";
import { takeAction } from "services/forkActionSagas";
import _ from "lodash";
import { get, clearAll } from "services/localStoredService";

export function* handleCheckLogin(action) {
	try {
		let accessToken = get("accessToken");
		if (_.isEmpty(accessToken)) {
			yield put(actions.checkLoginFail());
		} else {
			yield put(actions.checkLoginSuccess(accessToken));
		}
	} catch (err) {
		yield put(actions.checkLoginFail(err));
	}
}

export function* handleLogOut(action) {
	clearAll();
	yield put(action.payload.history.push("/login"));
}
/*-------------------------------------------------------------*/

export function* checkLogin() {
	yield takeAction(actions.checkLogin, handleCheckLogin);
}
export function* logOut() {
	yield takeAction(actions.logOut, handleLogOut);
}

/*-------------------------------------------------------------*/
export default [checkLogin, logOut];
