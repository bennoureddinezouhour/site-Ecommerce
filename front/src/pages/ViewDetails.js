import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import {getAction} from '../actions/getAction'
import OneViewDetail from './OneViewDetail'

const ViewDetails = (state) => {
    const product = useSelector((state) => state.getReducer).filter(
        (el) => el._id == state.match.params.id);
        
    const dispatch = useDispatch()  
    useEffect(()=>{
        dispatch(getAction())
    },[]);

    
  return (
   <div>{product.map(el=><OneViewDetail el={el} goBack={state.history.goBack}/>)}</div>
  );
};

export default ViewDetails;
