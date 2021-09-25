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
               "src": "https://images.pexels.com/photos/7352849/pexels-photo-7352849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
          "image": {
               "src": "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
               "alt": ''
          },
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
               "src": "https://images.pexels.com/photos/7352876/pexels-photo-7352876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
               "alt": ""
          },
          "bestseller": false,
          "featured": true,
          "details": {
               "dimmentions": {
                    "width": 1020,
                    "height": 1020
               },
               "size": 15000,
               "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely, This article is concerned with the terms and concept as used in and applied to the visual arts, although other fields such as aural-music and written word-literature have similar issues and philosophies.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
          }

     },
     {
          "name": "Red Bench",
          "category": "people",
          "price": 3.89,
          "currency": "USD",
          "image": {
               "src": "https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
          "image": {
               "src": 'https://images.pexels.com/photos/7352877/pexels-photo-7352877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
               "alt": ''
          },
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
               "src": "https://images.pexels.com/photos/7352855/pexels-photo-7352855.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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


const ProductReducer = (state = stateObj, action) => {

   switch(action.type){
          case GET_PRODUCTS:
             return { ...state, products: action.payload };
        
          default:
               return state;
   }
}
export default ProductReducer;