import { ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL } from "./types"

import axios from 'axios'

export const addAction =data=>dispatch=>{
    axios.post('/product',data)
    .then(res=>dispatch({
        type:ADD_PRODUCT_SUCCESS,
        payload:res.data
    }))
    .catch(err=>dispatch({
        type:ADD_PRODUCT_FAIL,
        payload:err.response.data
    }))
}

