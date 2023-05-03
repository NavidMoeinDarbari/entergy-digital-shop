import React, { useEffect, useState } from 'react';
import axios from 'axios';
//Components
import ProductCard from './ProductCard';
//Styles
import styles from './ProductsPage.module.css';
//Icons 
import Loader from '../Icons/loader (1).gif';


const ProductsPage = () => {

   const [products , setProducts] = useState([])
   const [filteredProducts , setFilteredProducts] = useState([])

   useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
      .then(response => response.data.filter( product => {
         if(product.category === 'electronics') filteredProducts.push(product);
         setProducts(filteredProducts)
      }))
   }, [])

   return (
      <>
         <div className={styles.pageContainer}>
            <div className={styles.productsContainer}>
               {
                  filteredProducts.length ? filteredProducts.map(product => <ProductCard key={product.id} src={product.image} alt={product.title} title={product.title} price={product.price} category={product.category} productNumber={product.id.toString()} productData={product} id={product.id}/>
                  ) :
                  <div className={styles.loader}>
                        <img src={Loader}/>
                  </div>
               }
            </div>
         </div>
      </>
   );
}

export default ProductsPage;