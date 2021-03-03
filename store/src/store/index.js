import {createStore, combineReducers} from "redux";
import ProductsReducer from "./reducers/ProductsReducer";
import CartReducer from "./reducers/CartReducer";
import userReducers from "./reducers/userReducers";
import { devToolsEnhancer } from 'redux-devtools-extension';

const root = combineReducers({
    ProductsReducer,
    CartReducer,
    userReducers
})

const store = createStore(root,devToolsEnhancer());
export default store;