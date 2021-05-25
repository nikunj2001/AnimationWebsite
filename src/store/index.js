import {createStore,combineReducers} from 'redux';
import ProductsReducers from './reducers/ProductsReducers';
const root=combineReducers({
    ProductsReducers
}) 
const store = createStore(root);
export default store;