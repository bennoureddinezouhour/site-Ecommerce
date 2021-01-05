import React from "react";
import { useDispatch } from "react-redux";
import{Button} from 'react-bootstrap'
import {addPanier} from '../actions/addPanier'



const OneViewDetail = ({el,goBack}) => {
    const dispatch = useDispatch() 
    
    
    const info=localStorage.getItem('token')
    const data={
      url:el.url,
      name:el.name,
      price:el.price,
      }
    
  
  const Panier=()=>{
    dispatch(addPanier(data))
  }


  const information=()=>{
    if(!info){
      alert('please register before')
    }
    
  }
  

    return (
        <div style={{display:"flex",margin:"169px 334px 0 256px"}} >
        <div><img src={el.url} width={200}></img></div>
        <div>
            <h1>{el.name}</h1>
            <p>{el.description}</p>
            <Button onClick={()=>{
          Panier()
          information()
        }}>Ajouter</Button>
        <Button onClick={()=>{
           goBack()
        }}>Ignorer</Button>
        </div>
        </div>
    )
}

export default OneViewDetail
