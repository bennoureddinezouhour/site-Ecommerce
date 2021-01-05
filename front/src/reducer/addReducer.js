
import {
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  
} from "../actions/types";

const initState = {
  status: null,
  errors: null,
};

function addReducer(state = initState, action) {
  switch (action.type) {
    case ADD_PRODUCT_SUCCESS:
      return { ...state, status: action.payload };
    case ADD_PRODUCT_FAIL:
      return { ...state, errors: "faild to add product" };
    
    default:
      return state;
  }
}

export default addReducer;
