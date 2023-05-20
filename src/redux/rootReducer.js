import { combineReducers } from "redux";
import cartReducer from "./shoppingCart/shoppingCartReducer";

const rootReducer = combineReducers({
   productsState: cartReducer
})

export default rootReducer;