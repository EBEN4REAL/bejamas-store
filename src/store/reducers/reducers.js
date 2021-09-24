
import {combineReducers} from 'redux';
import products from '../reducers/products_reducer/product_reducer';
import cart from '../reducers/Cart';

const rootReducer = combineReducers({
    products,
    cart
})

export default rootReducer;