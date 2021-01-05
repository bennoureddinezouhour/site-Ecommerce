import React from 'react'
import {useState}from 'react'
import {addAction} from "../actions/addAction"
import {useDispatch} from 'react-redux'



export default function () {
    const [info,setInfo]=useState({
        url:"",
        name:"",
        category:"",
        description:"",
        référence:"",
        price:""
    })
    const handle=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value.trim()})
    }
    const dispatch=useDispatch()
    const addNewProduct=e=>{
        e.preventDefault()
        dispatch(addAction(info))
       setInfo({
        url:"",
        name:"",
        category:"",
        description:"",
        référence:"",
        price:""
        })
    }

    return (
        <div className='container register'>
            <form onSubmit={addNewProduct}>
            <div className='row my-4'>
            <div className="col-md-3" ><h4 style={{fontWeight:'bold',color:'violet'}}>Add product</h4></div> 
            </div>
            <div className='row my-4'>
            <div className="col-md-2 ">url</div>
            <div className='col-md-5 col-xs-9'><input type ="url" name="url" value={info.url} style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">name</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="name" value={info.name} style={{width:'100%'}} onChange={handle} ></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">category</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="category" value={info.category} style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">description</div>
            <div className='col-md-5 col-xs-9'><textarea type ="text" name="description" value={info.description} style={{width:'100%'}} onChange={handle}></textarea></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">référence</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="référence" value={info.référence} style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">price</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="price" value={info.price} style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            <div>
            <div className='row my-4'>
             <div className='col-md-2'></div>
             <div className='col-md-5'> <button type='submit' style={{margin:"auto"}}>Add</button></div>
            </div>
           </div>
    
            </form>
            </div>
    )
}