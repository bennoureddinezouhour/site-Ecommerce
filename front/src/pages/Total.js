import React,{useState} from 'react'

const Total = ({cart}) => {

    const [total,setTotal]=useState(0)

    cart.map(el=>setTotal(total+(el.amount*parseInt(el.price))))
console.log(cart)
   
    return (
        <div>
            <li className='col-x>s-3 col-sm-3 '><h5>{total}</h5></li>
        </div>
    )
}

export default Total
