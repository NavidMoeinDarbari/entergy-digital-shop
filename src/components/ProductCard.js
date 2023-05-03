import React, { useState , useContext } from 'react';
import { Link } from 'react-router-dom';
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
//Context
import { CartContext } from '../context/CartContextProvider';

const Card = styled.div`
   width: 230px;
   height: 360px;
   background-color: white;
   border-radius: 15px;
   box-shadow: 0px 2px 12px -7px black;
   position: relative;
   overflow: hidden;
   a {
      text-decoration: none;
   }
   @media (max-width: 450px) {
      width: 215px;
      height: 320px;
   }
`
const ProductCard = (props) => {

   const [count , setCount] = useState(0); 
   const {state , dispatch} = useContext(CartContext);

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
                  quantityChecker(state ,props.id) > 1 && <img src={MinusIcon} onClick={()=> dispatch({type: 'DECREASE', payload: props.productData})} /> 
               }
               {
                  quantityChecker(state ,props.id) === 1 && <img src={DeleteIcon}  onClick={()=> dispatch({type: 'REMOVE-ITEM' , payload: props.productData})} />
               }
               {
                  cartChecker(state , props.id) ? 
                  <img src={PlusIcon} onClick={()=> dispatch({type: 'INCREASE' , payload: props.productData})} /> :
                  <button onClick={()=> dispatch({type: 'ADD-ITEM' , payload: props.productData})}>افزودن به سبد</button>
               }
            </div>
         </div>
      </Card>
   )
}

export default ProductCard;
