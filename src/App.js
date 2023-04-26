import React, { useEffect, useState } from "react";
import axios from "axios";
//!Context
import CartContextProvider from "./context/CartContextProvider";
//!Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import BurgerButton from "./components/BurgerButton";
//!Routes
import MainRoutes from "./components/MainRoutes";
//!Styles
import styles from './App.module.css';

export const ProductsContext = React.createContext();

const App = () => {

   const [products , setProducts] = useState([]);
   const [filtered , setFiltered] = useState([])

   useEffect(() => {
      axios.get('fakestoreapi.com/products')
      .then(response => response.filter( product => {
         if(product.category === 'electronics') filtered.push(product);
         setProducts(filtered)
      }))
   }, [])

   return (
      <div className={styles.app}>
         <CartContextProvider>
            <ProductsContext.Provider value={products}>
               <Header/>
               <MainRoutes/>
               <BurgerButton/>
               <Footer/>
            </ProductsContext.Provider>
         </CartContextProvider>
      </div>
   )
}
export default App;