import{
    GET_PANIER_SUCCESS,
    GET_PANIER_FAIL,
    UPDATE_PANIER_SUCESS,
    UPDATE_PANIER_FAIL,
    DELETE_PRODUCT_FAIL,
    } from "../actions/types"
    
    let initstate=[]
    
    export default function getReducer(state=initstate,action) {
            switch(action.type){
            case UPDATE_PANIER_SUCESS:
            case GET_PANIER_SUCCESS:    
                return action.payload;
            case DELETE_PRODUCT_FAIL:
            case UPDATE_PANIER_FAIL:
            case GET_PANIER_FAIL:
                return action.payload
              default:
                return state;
            }
    }
    