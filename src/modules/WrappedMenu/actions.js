/**
 * @file All actions will be listed here
 */

import { createAction } from 'redux-actions';
import * as CONST from './constants';

export const logOut = createAction(CONST.LOG_OUT);

export const checkLogin = createAction(CONST.CHECK_LOGIN);
export const checkLoginSuccess = createAction(CONST.CHECK_LOGIN_SUCCESS);
export const checkLoginFail = createAction(CONST.CHECK_LOGIN_FAIL);

/*---------------------------------------------------------------------*/
/*---------------------------------------------------------------------*/
export const handleInputChange = createAction(CONST.HANDLE_INPUT_CHANGE);
export const handleSearching = createAction(CONST.HANDLE_SEARCHING);
export const handleClear = createAction(CONST.HANDLE_CLEAR);