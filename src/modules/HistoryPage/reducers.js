/**
 * @file reducer
 */

// Using to control stage

import freeze from "deep-freeze";
import { handleActions } from "redux-actions";
// import * as actions from "./actions";

export const name = "HistoryPage";

const initialState = freeze({});

export default handleActions({}, initialState);
