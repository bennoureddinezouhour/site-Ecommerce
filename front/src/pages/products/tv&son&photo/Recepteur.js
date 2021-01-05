import {useSelector,useDispatch} from 'react-redux'
import {getAction} from "../../../actions/getAction"
import {useEffect} from 'react'
import Pagination from '../Pagination'
import {useState} from 'react'
import OneProduct from '../../oneProduct';

const Recepteur = () => {
    const [currentPage,setCurrentPage]=useState(1)
    const [productPerPage,setProductPerPage]=useState(8)
    
    const indexOfLastProduct=currentPage*productPerPage
    const indexOfFirstProduct=indexOfLastProduct-productPerPage
const change=(num)=>{
    setCurrentPage(num)
}
    const state=useSelector(state=>state.getReducer).filter(el=>(el.category== "tv et son et photo")&&(el.name.toLowerCase().includes('récepteur bein')))
    const totalProduct =state.length
    let info=state.slice(indexOfFirstProduct,indexOfLastProduct)
    const dispatch=useDispatch();       
useEffect(()=>{
    dispatch(getAction())
},[]);
    
    return (
        <div>
            <ul className=' product ' >
            {info
            
            .map((el)=><OneProduct state={el}/>)}
           </ul>
           <Pagination totalProduct={totalProduct} productPerPage={productPerPage} change={change}/>
        </div>
    )
}

export default Recepteur
