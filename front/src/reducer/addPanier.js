import {
    ADD_PANIER_SUCCESS,
    ADD_PANIER_FAIL,
    GET_PANIER_SUCCESS,
    GET_PANIER_FAIL
  } from "../actions/types";
  const initState = []
  function addPanier(state = initState, action) {
    switch (action.type) {
     
      case ADD_PANIER_SUCCESS:
        return action.payload;
       
      case ADD_PANIER_FAIL:
        return ['Please Register Before'];
      default:
        return state;
    }
  }
  export default addPanier;





