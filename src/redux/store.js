import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';



export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promise, thunk)));
