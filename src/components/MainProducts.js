import React, { useContext, useRef } from 'react';
//Components
import ProductCard from './ProductCard';
//Contexts
import { ProductsContext } from '../App';
//Styles
import styles from './MainProducts.module.css';
//Icons 
import leftArrow from '../Icons/arrow-left(1).png';
import rightArrow from '../Icons/arrow-right (1).png';
import { Link } from 'react-router-dom';

const MainProducts = () => {
   
   const allProducts = useContext(ProductsContext);
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
               <p> جدید ترین محصولات و پیشنهاد ها</p>
               <Link to="/products"><p>مشاهده همه</p></Link>
            </div>
            <div className={styles.carrousel}>
               <div className={styles.arrowsContainerRight} onClick={() => scrollHandler('right')}>
                  <img src={rightArrow}/>
               </div>
               <div ref={carrousel} className={styles.container}>
                  {
                     allProducts.map(product => <ProductCard key={product.id} src={product.image} alt={product.title} title={product.title} price={product.price} category={product.category} productNumber={product.id.toString()} productData={product} id={product.id}/>
                     )
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