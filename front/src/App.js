import Register from './pages/Register'
import Home from "./pages/Home"
import Login from './pages/Login'
import NavBar from "./pages/navBar"
import{BrowserRouter, BrowserRouter as Router,Route, Switch,Redirect} from 'react-router-dom'
import './App.css'
import PrivateRoute from './privateroute'
import PrivateRoute2 from './privetRoute2'
import adminPage from './pages/adminPage'
import ProductRoute from './pages/products/productRoute'
import panier from './pages/panier'
import {useSelector} from 'react-redux'
import viewDetails from './pages/ViewDetails'
import Filter from './pages/Filter'
import {useState} from 'react'




function App() {
  const auth=useSelector(state=>state.authReducer)
   const [search, setSearch] = useState('')
   console.log(search)
   const handel=(e)=>{
setSearch(e.target.value)
   }
  return (
    <div className="app">
    <BrowserRouter>
      <NavBar handel={handel}/>
      <ProductRoute/>
      <Route path="/product/detail/:id" component={viewDetails}/>
      
       <Route exact path="/" component={Home}/>
       <Route path="/Register"  render={props=>
                    !auth.role? <Register {...props}/>:<Redirect to='/'/>}/>
       <Route path="/Login" render={props=>
                    !auth.role? <Login {...props}/>:<Redirect to='/'/>}/>
       <PrivateRoute path="/adminPage" component={adminPage}/>
       <PrivateRoute2 path="/panier" component={panier}/>
       <Route path="/filter" render={props=><Filter {...props} search={search}/> }/>
       </BrowserRouter>
       </div>
    
  );
}

export default App;
