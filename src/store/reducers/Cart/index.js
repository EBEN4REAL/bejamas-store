import {
    GET_CART,
    ADD_TO_CART,
    CLEAR_CART,
    SHOW_CART
} from '../../../store/actions/types';

const stateObj = {
    cartItems: [],
    showCart: false
};

const CartReducer = (state = stateObj,  action) => {

    switch (action.type) {
        case GET_CART:
            return { ...state, cartItems: [...state.cartItems, action.payload] };
        
        case CLEAR_CART:
            return { ...state, cartItems: [] };
        
        case SHOW_CART:
            return {
                ...state,
                cartItems: [...state.cartItems],
                showCart: action.payload
            }
        
        case ADD_TO_CART:
            return { 
                ...state, 
                cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state;
    }
}
export default CartReducer;