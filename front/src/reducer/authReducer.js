import {REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL, DECONECT} from '../actions/types'

let initState={
    token:localStorage.getItem('token'),
    user: null,
    isAuth:false,
    errors:null,
    role:localStorage.getItem('role')

};

const authReducer=(state=initState,action)=>{
    switch (action.type){
     case LOGIN_SUCCESS:
     case REGISTER_SUCCESS :
         localStorage.setItem('token',action.payload.token)
         localStorage.setItem('role',action.payload.role)
         return {
             ...state,
             token:action.payload.token,
             isAuth:true,
             errors:null,
             role:action.payload.role
         }
         case LOGIN_FAIL:
         case REGISTER_FAIL:
           
             localStorage.removeItem('token')
             localStorage.removeItem('role')
             
             return {
                 ...state,
                 errors:action.payload
             }
        case DECONECT:
            return {
                ...state,
                token:null,
                isAuth:false,
                errors:null,
                role:null
            }

        default :
              return state
    }
}

export default authReducer