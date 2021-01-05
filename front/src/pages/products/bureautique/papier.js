import {useSelector} from 'react-redux'

import OneProduct from '../../oneProduct';

const Papier = () => {
    const state=useSelector(state=>state.getReducer)
    return (
        <div>
            <ul className=' product ' >
            {state
            .filter(el=>(el.category== "bureautique")&&(el.name.includes('papier')))
            .map((el)=><OneProduct state={el}/>)}
           </ul>
        </div>
    )
}

export default Papier
