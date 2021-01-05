import React from 'react'
import{Link}from 'react-router-dom'

const SearchNavBar = ({handel}) => {
    return (
        <div>
           
            <div className="container-fluid">
            <form className="d-flex" style={{alignItems:'center'}}>
           <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search" onChange={(e)=>handel(e)}/>
           <Link to='/filter'><button className="btn btn-outline-success" type="submit"  style={{height:"38px", paddingTop:"5px"}}>Rechercher</button></Link>
               </form>
               </div>
               
        </div>
    )
}

export default SearchNavBar
