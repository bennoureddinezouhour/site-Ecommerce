import {useSelector,useDispatch} from 'react-redux'
import React from 'react'
import News from './News';
import {useEffect} from 'react';
import {getAction} from '../actions/getAction'


export default function Nouveautes() {
    const state=useSelector(state=>state.getReducer)
    const dispatch=useDispatch();       
useEffect(()=>{
    dispatch(getAction())
},[]);
    const phone =state.filter(el=>(el.category== "News"))
    console.log(phone)
    return (
        <div>
            <div className='container  mt-5'>
            <h2>NOUVEAUTES</h2>
            <div className='news '>
            {phone.map((el)=><News state={el}/>)}
            </div>
            </div>

        </div>
    )
}
