import axios from 'axios';
import { GET_PRODUCTS} from '../types';

export function getProductsByArrival (){
    const req = axios.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
        .then(res => {
            return res.data;
        })
    return {
        type: GET_PRODUCTS_BY_ARRIVAL,
        payload: req
    }
}