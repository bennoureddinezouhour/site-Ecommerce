
import{
GET_PRODUCT_SUCCESS,
GET_PRODUCT_FAIL,
} from "../actions/types"

let initstate=[]

export default function getReducer(state=initstate,action) {
        switch(action.type){
        case GET_PRODUCT_SUCCESS:
            return action.payload;
          case GET_PRODUCT_FAIL:
            return [...state,'failed to get product']
          default:
            return state;
        }
}
