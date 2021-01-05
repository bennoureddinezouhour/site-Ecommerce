import {REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL} from './types'
import axios from 'axios'

 export const registerUser=info=>dispatch=>{
     axios.post('/register',info)
     .then(res=>dispatch({
         type:REGISTER_SUCCESS,
         payload:res.data
     }))
     .catch(err=>dispatch({
         type:REGISTER_FAIL,
         payload:err.response.data[0].msg
     }))
 }
 export const loginUser=info=>dispatch=>{
    axios.post('/login',info)
    .then(res=>dispatch({
        type:LOGIN_SUCCESS,
        payload:res.data
    }))
    .catch(err=>dispatch({
        type:LOGIN_FAIL,
        payload:err.response.data[0].msg
    }))
}