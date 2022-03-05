// import the reducers
import { chat_reducer } from "./chat_reducer";
import { combineReducers } from "redux";

export default combineReducers({
  chat: chat_reducer,
});
