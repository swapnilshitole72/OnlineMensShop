import handleCart from "./handlecart";
import { CombinedState, combineReducers } from "redux";


const rootReducer = combineReducers({
    handleCart,
})


export default rootReducer;