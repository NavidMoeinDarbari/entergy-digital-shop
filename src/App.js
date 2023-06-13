import React , {useEffect} from "react";
import { useLocation } from "react-router-dom";
//Redux
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/products/productsAction";
//Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import BurgerButton from "./components/BurgerButton";
//Routes
import MainRoutes from "./components/MainRoutes";
//Styles
import styles from './App.module.css';


const App = () => {

   const dispatch = useDispatch()
   const location = useLocation()

   useEffect(()=> {
      dispatch(fetchProducts())
   }, [])
   
   useEffect(()=> {
      window.scrollTo(0,0)
   },[location])

   return (
      <div className={styles.app}>
         <Header/>
         <MainRoutes/>
         <Footer/>
      </div>
   )
}
export default App;