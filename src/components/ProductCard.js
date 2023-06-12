import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
//Redux
import { addItem,removeItem,increase,decrease } from '../redux/cart/cartAction';
//Functions
import titleSplitter from '../functions/titleSplitter';
import cartChecker from '../functions/cartChecker';
import quantityChecker from '../functions/quantityChecker';
//Styles
import styled from 'styled-components';
import styles from './ProductCard.module.css';
//Icons
import PlusIcon from '../Icons/plus.svg';
import MinusIcon from '../Icons/minus.svg';
import DeleteIcon from '../Icons/recycle-bin.svg';
import StarIcon from '../Icons/star (2).svg';


const Card = styled.div`
   width: 220px;
   height: 360px;
   background-color: white;
   border-radius: 15px;
   box-shadow: 0px 2px 12px -7px black;
   position: relative;
   overflow: hidden;
   a {
      text-decoration: none;
   }
   @media (max-width: 600px) {
      /* width: 170px; */
      width: 94%;
      height: 287px;
   }
   @media (max-width: 350px) {
      width: 70%;
   }
   /* @media (max-width: 445px) { */
      /* width: 150px;
      height: 232px; */
      /* width: 180px;
      height: 268px; */
   /* } */
   /* @media (max-width: 370px) {
      
   } */
`
const ProductCard = (props) => {

   const [count , setCount] = useState(0); 

   const state = useSelector(state => state.cartState)
   const dispatch = useDispatch()

   return (
      <Card>
         {
            quantityChecker(state , props.id) && 
               <span className={styles.cardCounterOn}>{quantityChecker(state,props.id)}</span> 
         }
         <Link to={`/products/${props.productNumber}`}>
            <div className={styles.imgContainer}>
               <img src={props.src} alt={props.alt}/>
            </div>
         </Link>
         <div className={styles.infoContainer}>
            <h2>{titleSplitter(props.title, 'short')}</h2>
            <div className={styles.category}>
               <p>دسته بندی :</p>
               <p>{props.category}</p>
            </div>
            <div className={styles.ratingStars}>
               <p>امتیاز :</p>
               <div className={styles.starsContainer}>
                  <div>
                     <span style={{width: `${(5 - props.productData.rating.rate) * 13}px`}}></span>
                     <img src={StarIcon}/>
                     <img src={StarIcon}/>
                     <img src={StarIcon}/>
                     <img src={StarIcon}/>
                     <img src={StarIcon}/>
                  </div>
               </div>
            </div>
            <div className={styles.price}>
               <p>قیمت :</p>
               <p className={styles.priceNumber}>{count ? count * props.price : props.price}$</p>
            </div>
            <div className={quantityChecker(state, props.id) ? styles.btnContainerRight : styles.btnContainer}>
               {
                  quantityChecker(state ,props.id) > 1 && <img src={MinusIcon} onClick={()=> dispatch(decrease(props.productData))} /> 
               }
               {
                  quantityChecker(state ,props.id) === 1 && <img src={DeleteIcon}  onClick={()=> dispatch(removeItem(props.productData))} />
               }
               {
                  cartChecker(state , props.id) ? 
                  <img src={PlusIcon} onClick={()=> dispatch(increase(props.productData))} /> :
                  <button onClick={()=> dispatch(addItem(props.productData))}>افزودن به سبد</button>
               }
            </div>
         </div>
      </Card>
   )
}

export default ProductCard;
