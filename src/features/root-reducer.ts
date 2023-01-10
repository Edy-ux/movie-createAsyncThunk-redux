import { combineReducers } from "redux";
import themeReducer from "./theme/sliceTheme";
// import cartReducer  from './cart/slice' 

const rootReducer = combineReducers({themeReducer})        

export default rootReducer