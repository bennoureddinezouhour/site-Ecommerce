import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import NavbarProduct from './products/navBarProduct'
import {useLocation} from 'react-router-dom'
import { DECONECT } from '../actions/types'
import SearchNavBar from "./SearchNavBar"
import {getPanier} from '../actions/getPanier'



const NavBar = ({ handel}) => {
    const add =useSelector(state=>state.addPanier)
    const auth = useSelector(state => state.authReducer)
const dispatch=useDispatch()
useEffect(()=>{
    dispatch(getPanier())
},[add,auth]);
const deconnection=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    dispatch({type:DECONECT})
}
    const location=useLocation()
    console.log(location)
    
    const Panier =useSelector(state=>state.getPanier).length
    
    
   
        

    return (

        <div >
            {!auth.role ?

                <div className={"nav-bar"} > 
                    <ul style={{display:"flex", alignItems:"center"}} >
                        <li><i className="fas fa-dice" style={{fontSize:50}}></i>
                        <br/>
                        <label>MyHouse</label>
                        </li>
                        
                        <li><Link style={{textDecoration:"none",color:"black"}} to="/">accueil</Link></li>   
                        <li><NavbarProduct/></li>
                        <li><SearchNavBar  handel={ handel}/></li>
                    </ul>
                        
                    <ul style={{display:"flex" ,alignItems:"center"}}>
                        <li><Link style={{textDecoration:"none",color:"black",marginLeft:"10px"}} to="/Login">connexion</Link></li>
                        <li><Link to='/panier' style={{textDecoration:"none",color:"black",marginLeft:"10px"}} to="/panier"><i class="fas fa-shopping-cart" style={{fontSize:30}}>0</i></Link></li>
                        
                        
                    </ul>

                </div>
                :
                auth.role == "admin" ?
                <div className="nav-bar "> 
                <ul style={{display:"flex", alignItems:"center"}} >
                    <li><i className="fas fa-dice" style={{fontSize:50}}></i>
                    <br/>
                    <label>MyHouse</label>
                    </li>
                    
                    <li><Link style={{textDecoration:"none",color:"black"}} to="/">accueil</Link></li>   
                    <li><NavbarProduct/></li>
                    <li><SearchNavBar handel={handel}/></li>
                </ul>
                    
                <ul style={{display:"flex" ,alignItems:"center"}}>
                <li><Link style={{textDecoration:"none",color:"black", marginLeft:"10px"}} onClick={deconnection} to="/">se déconnecter</Link></li>
                    <li><Link to='/panier' style={{textDecoration:"none",color:"black",marginLeft:"10px"}} to="/panier"><i class="fas fa-shopping-cart" style={{fontSize:30}}>{Panier}</i></Link></li>
                    <li> <Link style={{textDecoration:"none",color:"black",marginLeft:"10px"}} to="/adminPage"><i class="fas fa-plus-circle" style={{fontSize:30}}></i></Link></li>
                    
                </ul>

            </div>
                    :
                    <div className="nav-bar "> 
                <ul style={{display:"flex", alignItems:"center"}} >
                    <li><i className="fas fa-dice" style={{fontSize:50}}></i>
                    <br/>
                    <label>MyHouse</label>
                    </li>
                    
                    <li><Link style={{textDecoration:"none",color:"black"}} to="/">accueil</Link></li>   
                    <li><NavbarProduct/></li>
                    <li><SearchNavBar  handel={ handel}/></li>
                </ul>
                    
                <ul style={{display:"flex" ,alignItems:"center"}}>
                <li><Link style={{textDecoration:"none",color:"black", marginLeft:"10px"}} onClick={deconnection} to="/">se déconnecter</Link></li>
                    <li><Link to='/panier' style={{textDecoration:"none",color:"black",marginLeft:"10px"}} to="/panier"><i class="fas fa-shopping-cart" style={{fontSize:30}}>{Panier}</i></Link></li>
                    
                    
                </ul>

            </div>

            }

                    
                     

        </div>
    )
}

export default NavBar
