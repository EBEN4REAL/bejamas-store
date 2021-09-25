import { GET_PRODUCTS} from '../types';

export function getProducts(products) {
    console.log(products)
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}