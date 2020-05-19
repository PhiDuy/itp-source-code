/**
 * @file All actions will be listed here
 */

import { createAction } from "redux-actions";
import * as CONST from "./constants";

export const toggleModal = createAction(CONST.TOGGLE_MODAL);
/*--------------------------------------------------------------------*/
export const getBackground = createAction(CONST.GET_BACKGROUND);
export const getBackgroundSuccess = createAction(CONST.GET_BACKGROUND_SUCCESS);
export const getBackgroundFail = createAction(CONST.GET_BACKGROUND_FAIL);

export const getPostsByYear = createAction(CONST.GET_POSTS_BY_YEAR);
export const getPostsByYearSuccess = createAction(CONST.GET_POSTS_BY_YEAR_SUCCESS);
export const getPostsByYearFail = createAction(CONST.GET_POSTS_BY_YEAR_FAIL);

/*--------------------------------------------------------------------*/
export const handleGenerateYear = createAction(CONST.HANDLE_GENERATE_YEAR);
export const handlePageChange = createAction(CONST.HANDLE_PAGE_CHANGE);
export const handleInputChange = createAction(CONST.HANDLE_INPUT_CHANGE);
export const handleCurPost = createAction(CONST.HANDLE_CUR_POST);
export const handleCurYear = createAction(CONST.HANDLE_CUR_YEAR);

export const handleClear = createAction(CONST.HANDLE_CLEAR);
export const handleClearUnmount = createAction(CONST.HANDLE_CLEAR_UNMOUNT);