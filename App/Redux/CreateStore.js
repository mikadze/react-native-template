import { createStore, applyMiddleware, compose } from "redux";
import Config from "../Config/DebugConfig";
import thunk from "redux-thunk";
import ScreenTracking from "./Middleware/ScreenTrackingMiddleware";

export default rootReducer => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Analytics Middleware ------------- */
  middleware.push(ScreenTracking);

  /* ------------- Thunk Middleware ------------- */
  middleware.push(thunk);

  enhancers.push(applyMiddleware(...middleware));

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = Config.useReactotron
    ? console.tron.createStore
    : createStore;
  const store = createAppropriateStore(rootReducer, compose(...enhancers));

  return store;
};
