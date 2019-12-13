import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from  './reducers/rootReducers';

const middleware = composeWithDevTools(applyMiddleware(promise, thunk));
const store=createStore(rootReducer,middleware)
console.log(store.getState());
export default store;