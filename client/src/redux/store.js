import { createStore,applyMiddleware,compose } from "redux";
import thunkMidlleware from 'redux-thunk'
import rootReducer from "./reducer";

const extend = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    extend(applyMiddleware(thunkMidlleware))
);
export default store;