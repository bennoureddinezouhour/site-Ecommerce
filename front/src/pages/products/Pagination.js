import React from 'react'




const paginationBasic = ({totalProduct,productPerPage,change}) => {
    
let items = [];
for (let number = 1; number <= Math.ceil(totalProduct/productPerPage); number++) {
  items.push(number)
    
}

    return (
        <div >
            <nav aria-label="Page navigation example">
                 <ul className="pagination" style={{justifyContent:"center",marginTop:"50px" , marginBottom:"0px" ,paddingBottom:"30px"}}>
                 {items.map(el=><li className="page-item" style={{border:"1px solid #9999ff"}}><a className="page-link" href={`#${el}`} onClick={()=>change(el)} >{el}</a></li>)}
                 </ul>
              </nav>
    </div>
    )
}

export default paginationBasic
