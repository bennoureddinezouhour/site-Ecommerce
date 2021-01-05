import { UPDATE_PANIER_FAIL, UPDATE_PANIER_SUCESS } from './types';
import setToken  from '../setToken'
import axios from 'axios'
export const updatePanier =(data)=>dispatch=>{
    setToken()
    axios.put('panier/updateProduct',data)
    .then(res=>dispatch({
        type:UPDATE_PANIER_SUCESS,
        payload:res.data
    }))
    .catch(err=>dispatch({
        type:UPDATE_PANIER_FAIL,
        payload:err.response.data
    }))
}