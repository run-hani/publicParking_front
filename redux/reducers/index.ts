import { combineReducers } from "redux";
import adminReducer from "./adminReducer.ts";
import boardReducer from "./boardReducer.ts";
import userReducer from "./userReducer.ts";

const rootReducer = combineReducers({
  adminReducer,
  boardReducer,
  userReducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
