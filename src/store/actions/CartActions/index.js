import { ADD_TO_CART, CLEAR_CART } from '../types';

export function addToCart(payload) {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export function clearCart() {
    return {
        type: CLEAR_CART,
        payload: []
    }
}


