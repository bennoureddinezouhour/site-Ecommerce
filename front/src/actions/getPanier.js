import {GET_PANIER_SUCCESS,GET_PANIER_FAIL } from './types';
import setToken  from '../setToken'
import axios from 'axios'
export const getPanier =()=>dispatch=>{
    setToken()
    axios.get('/panier')
    .then(res=>dispatch({
        type:GET_PANIER_SUCCESS,
        payload:res.data
    }))
    .catch(err=>dispatch({
        type:GET_PANIER_FAIL,
        payload:err.response.data
    }))
}
