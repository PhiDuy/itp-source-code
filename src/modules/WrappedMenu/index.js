/**
 * @file index
 * Please import some config when register new module
 * Some base file neeed to update
 * * src/reducers.js
 * * src/sagas.js
 */

import * as actions from "./actions";
import sagas from "./sagas";
import reducer, { name } from "./reducers";

export { name, actions, sagas };

export default reducer;
