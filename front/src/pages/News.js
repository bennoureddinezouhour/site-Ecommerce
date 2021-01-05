import React ,{useEffect}from 'react'
import {Card,Button} from 'react-bootstrap'
import {addPanier} from '../actions/addPanier'
import {getPanier} from '../actions/getPanier'
import {useDispatch,useSelector} from 'react-redux'
import {useState} from 'react'
 
export default function News({state}){

  const info=useSelector(state=>state.authReducer)
 
  const data={
    url:state.url,
    name:state.name,
    price:state.price,
    }

    
  const dispatch = useDispatch()
  const Panier=()=>{
    dispatch(addPanier(data))
    
  }
 
  const information=()=>{
    if(!info.token){
      alert('please register before')
    }
    
  }
 
    return(
        <>
<div className='newcard'>
  <div className="positionner">

  <img src={state.url} height='200'/>
  <p>{state.name}</p>
  <button onClick={()=>{
      Panier()
      information()
      
    }} className='mb-2 hBt'>Ajouter Au panier</button>
  </div>
</div>

        </>
    )
}

