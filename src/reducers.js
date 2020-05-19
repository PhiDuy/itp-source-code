/**
 * @file reducers
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// Place for reducers' app
import WrappedMenu, { name as nameOfWrappedMenu } from "modules/WrappedMenu";
import HomePage, { name as nameOfHomePage } from "modules/HomePage";
import UnitsPage, { name as nameOfUnitsPage } from "modules/UnitsPage";

/*---------------------------------------------------------------*/

const reducers = {
  [nameOfWrappedMenu]: WrappedMenu,
  [nameOfHomePage]: HomePage,
  [nameOfUnitsPage]: UnitsPage
};

export default history =>
  combineReducers({
    ...reducers,
    router: connectRouter(history)
  });
