import {useSelector,useDispatch} from 'react-redux'
import {getAction} from "../../../actions/getAction"
import {useEffect} from 'react'

import OneProduct from '../../oneProduct';
import Pagination from '../Pagination'
import {useState} from 'react'

const Mixeur = () => {
    const [currentPage,setCurrentPage]=useState(1)
    const [productPerPage,setProductPerPage]=useState(8)
    
    const indexOfLastProduct=currentPage*productPerPage
    const indexOfFirstProduct=indexOfLastProduct-productPerPage
const change=(num)=>{
    setCurrentPage(num)
}
    const state=useSelector(state=>state.getReducer).filter(el=>(el.category== "électroménager")&&(el.name.toLowerCase().includes('mixeur')))
    const totalProduct =state.length
     let elect=state.slice(indexOfFirstProduct,indexOfLastProduct)
    const dispatch=useDispatch();
        
        useEffect(()=>{
            dispatch(getAction())
       },[]);
    return (
        <div>
            <ul className=' product ' >
            {elect.map((el)=><OneProduct state={el}/>)}
           </ul>
           <Pagination totalProduct={totalProduct} productPerPage={productPerPage} change={change}/>
        </div>
    )
}

export default Mixeur
