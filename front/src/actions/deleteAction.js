import axios from 'axios';
import { DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCESS } from './types';
import setToken  from '../setToken'
export const deleteAction = data =>dispatch=> {
    setToken()
    axios.put('/panier/delete',data)
    .then(res=>dispatch({
        type:DELETE_PRODUCT_SUCESS,
        info:res.data
        
    }))
    .catch(err=>dispatch({
        type:DELETE_PRODUCT_FAIL,
        payload:err.response.data
    }))
}