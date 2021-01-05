import {GET_PRODUCT_SUCCESS,GET_PRODUCT_FAIL } from './types';
import axios from 'axios'
export const getAction =()=>dispatch=>{
    axios.get('/product')
    .then(res=>dispatch({
        type:GET_PRODUCT_SUCCESS,
        payload:res.data
    }))
    .catch(err=>dispatch({
        type:GET_PRODUCT_FAIL,
        payload:err.response.data
    }))
}



