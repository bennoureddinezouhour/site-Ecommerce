import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'


const PrivateRoute=({component:Component,...rest}) =>{
    const auth=useSelector(state=>state.authReducer)
    
    return (
        <div>
                <Route {...rest}
                   render={props=>
                    auth.role=='admin'? <Component {...props}/>:<Redirect to='/'/>
                   }
                   />
        </div>
    )
}
export default PrivateRoute
