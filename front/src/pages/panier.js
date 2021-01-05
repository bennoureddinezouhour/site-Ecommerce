import React,{useState} from 'react'
import {getPanier} from '../actions/getPanier'
import Total from './Total'


import { useSelector ,useDispatch} from "react-redux";
import Block from './Block';
import { useEffect } from "react";
const Panier=()=>{
    const a=5
    const cart= useSelector((state) => state.getPanier);
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getPanier())
   },[a]);
   
   
    return  (             
         <div className='container' style={{paddingTop:"200px"}}>
             <ul className='row responsive '>
             <li className='col-xs-3 col-sm-3 '><h5>Produit</h5></li>
             <li className='col-xs-3 col-sm-3 '><h5>Prix</h5></li>
             <li className='col-xs-3 col-sm-3 '><h5>Quantité</h5></li>
             <li className='col-x>s-3 col-sm-3 '><h5>Total</h5></li>
             
            </ul>
            <hr/>
            <div>
            {cart.map((el,i)=><div key={i}><Block el={el}/></div>)}
            </div>
           
            </div>
    )  
}
export default Panier;