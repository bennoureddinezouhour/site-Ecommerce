import {Route} from 'react-router-dom'
import Refregirateur from './electromenager/Refregirateur'
import Papier from './bureautique/papier'
import Photocopieurs from './bureautique/photocopieurs'
import Tableaux from './bureautique/tableaux'
import MachineLaver from './electromenager/MachineLaver'
import Mixeur from './electromenager/Mixeur'
import PcPortables from './informatique/PcPortables'
import Peripherique from './informatique/Peripherique&accessoirs'
import Smartphone from './informatique/SmartPhone'
import Tablette from './informatique/TabletteTactiles'
import HomeCinema from './tv&son&photo/HomeCinema'
import Recepteur from './tv&son&photo/Recepteur'
import Televiseur from './tv&son&photo/Televviseurs'
import Electromenager from './electromenager/Electromenager'



const productRoute = () => {
    return (
        <div>
            <Route  path="/electromenager/Electromenager" component ={Electromenager}/> 
            <Route path="/electromenager/refregirateur" component={Refregirateur}/>
            <Route path="/electromenager/machineLaver" component={MachineLaver}/>
            <Route path="/electromenager/mixeur" component={Mixeur}/>
            <Route path="/informatique/pc" component={PcPortables}/>
            <Route path="/informatique/phone" component={Smartphone}/>
            <Route path="/informatique/tablette" component={Tablette}/>
            <Route path="/informatique/accessoire" component={Peripherique}/>
            <Route path="/tvSonPhoto/televiseur" component={Televiseur}/>
            <Route path="/tvSonPhoto/recepteur" component={Recepteur}/>
            <Route path="/tvSonPhoto/homeCinema" component={HomeCinema}/>
            <Route path="/bureautique/photocopieurs" component={Photocopieurs}/>
            <Route path="/bureautique/papier" component={Papier}/>
            <Route path="/bureautique/tableaux" component={Tableaux}/>
            
        </div>
    )
}

export default productRoute
