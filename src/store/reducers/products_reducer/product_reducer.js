import {
     GET_PRODUCTS
} from '../../../store/actions/types';

const products = [
     {
          "name": "Red Bench",
          "category": "people",
          "price": 3.89,
          "currency": "USD",
          "image": {
               "src": "",
               "alt": ""
          },
          "bestseller": true,
          "featured": false,
          "details": null
     },
     {
          "name": "Egg Balloon",
          "category": "food",
          "price": 93.89,
          "currency": "USD",
          "image": "",
          "bestseller": false,
          "featured": false,
          "details": null
     },
     {
          "name": "Man",
          "category": "people",
          "price": 100,
          "currency": "USD",
          "image": {
               "src": "",
               "alt": ""
          },
          "bestseller": false,
          "featured": false,
          "details": null
     },
]

const stateObj = {
     products
}


const rootReducer = (state = stateObj, action) => {
     
    
   switch(action.type){
          case GET_PRODUCTS:
             return { ...state, products: action.payload};
          default:
               return state;
   }
}
export default rootReducer;