/**
 * @file reducer
 */

// Using to control stage

import freeze from "deep-freeze";
import { handleActions } from "redux-actions";
import * as actions from "./actions";

export const name = "WrappedMenu";

const initialState = freeze({
  token: null,
  data: {}
});

export default handleActions(
  {
    /*---
    ----- Check Login
    */
    [actions.checkLoginSuccess]: (state, action) => {
      return freeze({
        ...state,
        token: action.payload
      });
    },
    [actions.checkLoginFail]: (state, action) => {
      return freeze({
        ...state,
        token: null
      });
    },
    /*---
    ----- Handle Clear
    */
    [actions.handleClear]: (state, action) => {
      return freeze({
        ...state,
        data: {
          searching: ""
        },
        listUnitsSearching: state.listUnits
      });
    }
  },
  initialState
);
