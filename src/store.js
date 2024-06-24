import {createStore} from "redux";

function cartReducer(state ={ items:{}} , action){ 
    //reducer manipulates the global state
    switch(action.type){
        case "ADD_ITEM":{

        }
        case "REMOVE_FROM _CART":{

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