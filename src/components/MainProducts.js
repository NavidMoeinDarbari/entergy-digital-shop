import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//Components
import ProductCard from './ProductCard';
//Styles
import styles from './MainProducts.module.css';
//Icons 
import leftArrow from '../Icons/arrow-left_1_.svg';
import rightArrow from '../Icons/arrow-right (1).svg';
import goToArrow from '../Icons/arrow (1).svg';
import Loader from '../Icons/loader (1).gif';
import HeaderLeftArrow from '../Icons/left-arrow (1).svg';

const MainProducts = () => {
   
   const allProducts = useSelector(state => state.productsState.products)
   const carrousel = useRef(null);

   const scrollHandler = (direction) => {
      if(direction === 'right') {
         carrousel.current.scrollBy({
            top: 0,
            left: 120,
            behavior : "smooth"
         })
      } 
      else {
         carrousel.current.scrollBy({
            top: 0,
            left: -120,
            behavior : "smooth"
         })
      }
   }

   return (
      <>
         <div className={styles.mainProducts}>
            <div className={styles.headerTitles}>
               <img src={HeaderLeftArrow}/>
               <h2> جدید ترین محصولات</h2>
               <span></span>
               <Link to="/products"><p><img src={goToArrow}/>مشاهده همه</p></Link>
            </div>
            <div className={styles.carrousel}>
               <div className={styles.arrowsContainerRight} onClick={() => scrollHandler('right')}>
                  <img src={rightArrow}/>
               </div>
               <div ref={carrousel} className={allProducts ? styles.container : styles.loaderContainer}>
                  {
                     allProducts ? allProducts.map(product => <ProductCard key={product.id} src={product.image} alt={product.title} title={product.title} price={product.price} category={product.category} productNumber={product.id.toString()} productData={product} id={product.id}/>
                     ) : 
                     <div  className={styles.loader}>
                        <img src={Loader}/>
                     </div>
                  }
               </div>
               <div className={styles.arrowsContainerLeft} onClick={() => scrollHandler('left')}>
                  <img src={leftArrow}/>
               </div>
            </div>
         </div>
      </>
   );
}

export default MainProducts;