/**
 * @file All actions will be listed here
 */

import { createAction } from "redux-actions";
import * as CONST from "./constants";

export const toggleForm = createAction(CONST.TOGGLE_FORM);
export const toggleModal = createAction(CONST.TOGGLE_MODAL);

/*---------------------------------------------------------------------*/

export const getAllTermsOfUnit = createAction(CONST.GET_ALL_TERMS_OF_UNIT);
export const getAllTermsOfUnitSuccess = createAction(CONST.GET_ALL_TERMS_OF_UNIT_SUCCESS);
export const getAllTermsOfUnitFail = createAction(CONST.GET_ALL_TERMS_OF_UNIT_FAIL);

export const getIntroduce = createAction(CONST.GET_INTRODUCE);
export const getIntroduceSuccess = createAction(CONST.GET_INTRODUCE_SUCCESS);
export const getIntroduceFail = createAction(CONST.GET_INTRODUCE_FAIL);

export const getStructureByTerm = createAction(CONST.GET_STRUCTURE_BY_TERM);
export const getStructureByTermSuccess = createAction(CONST.GET_STRUCTURE_BY_TERM_SUCCESS);
export const getStructureByTermFail = createAction(CONST.GET_STRUCTURE_BY_TERM_FAIL);
/*---------------------------------------------------------------------*/

export const handleClear = createAction(CONST.HANDLE_CLEAR);
export const handleMemberDetail = createAction(CONST.HANDLE_MEMBER_DETAIL);
export const handleTabChange = createAction(CONST.HANDLE_TAB_CHANGE);
export const handleInputChange = createAction(CONST.HANDLE_INPUT_CHANGE);