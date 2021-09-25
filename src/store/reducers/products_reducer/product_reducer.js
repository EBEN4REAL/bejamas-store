import {
     GET_PRODUCTS
} from '../../../store/actions/types';

const products = []

const stateObj = {
     products
}


const ProductReducer = (state = stateObj, action) => {

   switch(action.type){
          case GET_PRODUCTS:
             return { ...state, products: action.payload };
        
          default:
               return state;
   }
}
export default ProductReducer;