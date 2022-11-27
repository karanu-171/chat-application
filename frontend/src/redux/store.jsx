import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import chatReducer from "./reducers/chatReducer";
import thunk from "redux-thunk";

const store = createStore(chatReducer, composeWithDevTools(applyMiddleware(thunk))
);

export default store;
