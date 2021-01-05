import {useSelector,useDispatch} from 'react-redux'
import {getAction} from "../../../actions/getAction"
import {useEffect} from 'react'

import OneProduct from '../../oneProduct';
import Pagination from '../Pagination'
import {useState} from 'react'


function Machine() {
    const [currentPage,setCurrentPage]=useState(1)
    const [productPerPage,setProductPerPage]=useState(8)
    
    const indexOfLastProduct=currentPage*productPerPage
    const indexOfFirstProduct=indexOfLastProduct-productPerPage
const change=(num)=>{
    setCurrentPage(num)
}
const state=useSelector(state=>state.getReducer)
const dispatch=useDispatch();       
useEffect(()=>{
    dispatch(getAction())
},[]);


let electro= state.filter(el=>(el.category== "électroménager")&&(el.name.includes('Lave')))
const totalProduct =electro.length
let elect=electro.slice(indexOfFirstProduct,indexOfLastProduct)
    return (
        <div>
             
        <ul className=' product ' >
            {elect.map((el)=><OneProduct state={el}/>)}
        </ul>
        <Pagination totalProduct={totalProduct} productPerPage={productPerPage} change={change}/>
        </div>
    )
}

export default Machine
