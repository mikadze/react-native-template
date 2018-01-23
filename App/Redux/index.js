import { combineReducers } from "redux";
import configureStore from "./CreateStore";
import nav from "./Reducers/NavReducer";

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav
  });

  return configureStore(rootReducer);
};
