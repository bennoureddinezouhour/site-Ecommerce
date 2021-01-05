import React ,{useEffect}from 'react'
import {Card,Button} from 'react-bootstrap'
import {addPanier} from '../actions/addPanier'
import {getPanier} from '../actions/getPanier'
import {useDispatch,useSelector} from 'react-redux'
import {useState} from 'react'
import {Link} from 'react-router-dom'


export default function OneProduct({state}) {

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
  
    return (
  <li className=' mt-5 mx-4' style={{listStyle:'none'}} >
   <Card style={{ width: '18rem' ,height:"500px"}}>
  <Card.Img variant="top" src={state.url} />
  <Card.Body>
    <Card.Title><p style={{fontSize:14}}>{state.name}</p></Card.Title>
    
    <Card.Text>
      {`${state.price} TND`}
     
    </Card.Text>
    <div>
    <Button variant="primary mr-3" onClick={()=>{
      Panier()
      information()
      
    }} ><p style={{margin:0 ,padding:0,fontSize:11}}>Ajouter</p></Button>
    <Link to={`/product/detail/${state._id}`}><Button variant="primary ml-5" ><p style={{margin:0 ,fontSize:11}}>savoir plus</p></Button></Link>
    </div>
  </Card.Body>
      
</Card>
        </li>
    )
}