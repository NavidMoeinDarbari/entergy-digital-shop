import React, { useEffect } from 'react';
//Redux
import { fetchProducts } from '../redux/products/productsAction';
import { useSelector, useDispatch } from 'react-redux';
//Components
import ProductCard from './ProductCard';
//Styles
import styles from './ProductsPage.module.css';
//Icons 
import Loader from '../Icons/loader (1).gif';
import ErrorImage from '../images/404 error with a landscape-amico.svg';


const ProductsPage = () => {

   const dispatch = useDispatch()
   const productsState = useSelector(state => state.productsState)

   useEffect(()=> {
      if(!productsState.products) dispatch(fetchProducts())
   }, [])

   return (
      <>
         <div className={styles.pageContainer}>
            <div className={styles.productsContainer} style={{display: productsState.loading || productsState.error? 'flex' : 'grid'}}>
               {
                  productsState.loading ? <div className={styles.loader}><img src={Loader}/></div> 
                  :
                  productsState.error ? <img className={styles.errorImage} src={ErrorImage}/>
                  :
                  productsState.products.map(product => <ProductCard key={product.id} src={product.image} alt={product.title} title={product.title} price={product.price} category={product.category} productNumber={product.id.toString()} productData={product} id={product.id}/>)
               }
            </div>
         </div>
      </>
   );
}

export default ProductsPage;