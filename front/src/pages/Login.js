
import React ,{useEffect}from 'react';


import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {loginUser} from '../actions/authActions'
import {Link} from 'react-router-dom'
export default function Login({history}) {
    const auth=useSelector(state=>state.authReducer)
    
    const [info,setInfo]=useState({
        email:"",
        password:" ",
    })
    const handle=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }
    const dispatch = useDispatch()
    const registerNow=e=>{
        e.preventDefault()
        dispatch(loginUser(info))
    }
    
    return (
        <div className='container register' >
            <form onSubmit={registerNow}>
            < div className='row my-4'>
            <div className="col-md-2">Email</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="email" style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">Mot de passe</div>
            <div className='col-md-5 col-xs-9'><input type ="password" name="password" style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            <div className='row my-4'>
             <div className='col-md-2'></div>
             <div className='col-md-5'> <button  className="lBt btn btn-primary" type='submit' style={{margin:"auto"}}>S'identifier</button></div>
            </div>
            <div><h6 style={{color:'red'}}>{!auth.errors? null:auth.errors}</h6></div>
            </form>
            <p>pas de compte<Link to="/Register"> créez-en un</Link></p>
    
        </div>
    )
}
