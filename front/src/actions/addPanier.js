import axios from 'axios';
import {ADD_PANIER_SUCCESS,ADD_PANIER_FAIL} from './types';
import setToken  from '../setToken'
export const addPanier = data =>dispatch=> {
    setToken()
    axios.post('/panier',data)
    .then(res=>dispatch({
        type:ADD_PANIER_SUCCESS,
        payload:res.data
    }))
    .catch(err=>dispatch({
        type:ADD_PANIER_FAIL,
        payload:err.response.data
    }))
}





