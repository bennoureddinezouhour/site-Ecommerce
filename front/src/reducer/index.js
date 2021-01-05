import { combineReducers} from 'redux' ;
import authReducer from "./authReducer";
import addReducer from "./addReducer";
import getReducer from "./getReducer";
import addPanier from "./addPanier";
import getPanier from "./getPanier"

export default combineReducers({authReducer,addReducer,getReducer,addPanier,getPanier})