import {createStore} from "redux";
import{act} from "react";
import{omit} from "lodash"

function cartReducer(state ={ items:{}} , action){ 
    //reducer manipulates the global state
    switch(action.type){
        case "ADD_TO_CART":{
            const product = action.payload;
            if(state.items[product.id]){
                return{
                    ...state,
                    items:{
                        ...state.items,
                        [product.id]:{
                            ...state.items[product.id],
                            quantity:state.items[product.id].quantity+1
                        }
                    }
                }

            }
            else{
                return{
                    ...state,
                    items:{
                        ...state.items,
                        [product.id]:{
                            ...product,
                            quantity:1

                        }
                    }
            }

        }
    }
        case "REMOVE_FROM _CART":{
            const product = action.payload;
            if(state.items[product.id].quantity <= 1){
                return {
                    ...state,
                    items:omit(state.items,[product.id])
                }

            }
            else{
                return{
                    ...state,
                    items:{
                        ...state,items,
                        [product.id]:{
                            ...state.items[product.id],
                            quantity: state.items[product.id].quantity-1
                        }
                    }
                }
            }

        }
        default:
            return state;
    }


    }

const store=createStore(cartReducer);
export default store;

//action is object having twokeys
//type: specifies what action to perform(add to cart or remove)
//payload: data to be used for action