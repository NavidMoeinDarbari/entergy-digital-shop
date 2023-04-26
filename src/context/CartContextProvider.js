import React , {createContext , useReducer} from 'react';

const initialState = {
   selectedItems: [],
   itemsCounter: 0,
   total: 0,
   checkout: false
}

const sumItems = (items) => {
   const itemsCounter = items.reduce((total , item) => total + item.quantity, 0)
   const total = items.reduce((total , item) => total + item.quantity * item.price, 0).toFixed(2)
   return {itemsCounter , total}
}

const contextReducer = (state , action) => {
   console.log(state);
   switch(action.type){
      case 'ADD-ITEM': 
         if(!state.selectedItems.find(item => item.id === action.payload.id)) {
            state.selectedItems.push({
               ...action.payload,
               quantity: 1
            })
         }
         return {
            ...state,
            selectedItems: [...state.selectedItems],
            ...sumItems(state.selectedItems)
         }
      case 'REMOVE-ITEM':
         const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
         return {
            ...state,
            selectedItems: [...newSelectedItems],
            ...sumItems(newSelectedItems)
         }
      case 'INCREASE':
         const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
         state.selectedItems[indexI].quantity++
         return {
            ...state,
            ...sumItems(state.selectedItems)
         }
      case 'DECREASE':
         const indexB = state.selectedItems.findIndex(item => item.id === action.payload.id)
         if(state.selectedItems[indexB].quantity > 1) state.selectedItems[indexB].quantity--
         return {
            ...state,
            ...sumItems(state.selectedItems)
         }
      case 'CHECKOUT':
         return {
            selectedItems: [],
            itemsCounter: 0,
            total: 0,
            checkout: true
         }
      case 'CLEAR':
         return {
            selectedItems: [],
            itemsCounter: 0,
            total: 0,
            checkout: false
         }
      default :
         return state
   } 
}

export const CartContext = createContext();

const CartContextProvider = (props) => {

   const [state , dispatch] = useReducer(contextReducer , initialState)

   return (
      <CartContext.Provider value={{state , dispatch}}>
         {props.children}
      </CartContext.Provider>
   );
};

export default CartContextProvider;