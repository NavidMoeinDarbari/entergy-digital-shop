import React, { useEffect, useState } from 'react';
import axios from 'axios';
//Components
import ProductCard from './ProductCard';
//Styles
import styles from './ProductsPage.module.css';


const ProductsPage = () => {

   const [products , setProducts] = useState([])
   const [filteredProducts , setFilteredProducts] = useState([])

   useEffect(() => {
      axios.get('fakestoreapi.com/products')
      .then(response => response.filter( product => {
         if(product.category === 'electronics') filteredProducts.push(product);
         setProducts(filteredProducts)
      }))
   }, [])

   return (
      <>
         <div className={styles.pageContainer}>
            <div className={styles.productsContainer}>
               {
                  filteredProducts.map(product => <ProductCard key={product.id} src={product.image} alt={product.title} title={product.title} price={product.price} category={product.category} productNumber={product.id.toString()} productData={product} id={product.id}/>
                  )
               }
            </div>
         </div>
      </>
   );
}

export default ProductsPage;