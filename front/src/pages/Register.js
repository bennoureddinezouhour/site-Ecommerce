import React from 'react';
import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {registerUser} from '../actions/authActions'

export default function Register() {
    const auth=useSelector(state=>state.authReducer)
    const [info,setInfo]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        phone:""
    })
    const dispatch = useDispatch()
    const handle=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }
    const registerNow=e=>{
        e.preventDefault()
        dispatch(registerUser(info))
    }
    return (
        <div className='container register'>
            <form onSubmit={registerNow}>
            <div className='row my-4'>
            <div className="col-md-3" ><h4 style={{fontWeight:'bold',color:'violet'}}>Créer votre compte</h4></div> 
            </div>
            <div className='row my-4'>
            <div className="col-md-2 ">Prénom</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="firstname" style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">Nom</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="lastname" style={{width:'100%'}} onChange={handle} ></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">Email</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="email" style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">Mot de passe</div>
            <div className='col-md-5 col-xs-9'><input type ="password" name="password" style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">Téléphone</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="phone" style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            <div>
            <div className='row my-4'>
             <div className='col-md-2'></div>
             <div className='col-md-5'> <button type='submit' style={{margin:"auto"}} className="btn btn-primary">S'inscrire</button></div>
            </div>
           </div>
    <div><h6 style={{color:'red'}}>{!auth.errors? null:auth.errors}</h6></div>
            </form>
        </div>
    )
}
