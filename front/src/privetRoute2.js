import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'


const PrivateRoute2=({component:Component,...rest}) =>{
    const auth=useSelector(state=>state.authReducer)
    
    return (
        <div>
                <Route {...rest}
                   render={props=>
                    auth.role? <Component {...props}/>:<Redirect to='/Login'/>
                   }
                   />
        </div>
    )
}
export default PrivateRoute2
