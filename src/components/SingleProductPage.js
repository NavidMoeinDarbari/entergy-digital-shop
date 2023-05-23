import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector , useDispatch } from 'react-redux';
//Redux Actions
import { increase,decrease,removeItem,addItem } from '../redux/cart/cartAction';
//Functions
import quantityChecker from '../functions/quantityChecker';
import cartChecker from '../functions/cartChecker';
//Styles
import styles from './SingleProductPage.module.css';
//Icons
import DeleteIcon from '../Icons/recycle-bin.svg';
import PlusIcon from '../Icons/plus.svg';
import MinusIcon from '../Icons/minus.svg';
import Notice from '../Icons/information.svg';
import FastTime from '../Icons/flash-delivery.svg';
import Return from '../Icons/debit-credit-card-back.svg';
import Support from '../Icons/support (1).svg';
import Payment from '../Icons/payment.svg';
import OriginalTag from '../Icons/award.svg';


const SingleProductPage = () => {

   const params = useParams()
   const [myProduct , setMyProduct] = useState([])
   const [rating , setRating] = useState([])
   const state = useSelector(state => state.cartState)
   const dispatch = useDispatch()

   useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/${params.key}`)
      .then(response => {
         setMyProduct(response.data)
         setRating(response.data.rating)
      })
   }, [])
   
   return (
      <div className={styles.page}>
         <div className={styles.productContainer}>
            <div className={styles.infoContainer}>
               <div className={styles.imagePart}>
                  <div className={styles.divider}></div>
                  <img src={myProduct.image} alt={myProduct.title}/>
               </div>
               <div className={styles.infoPart}>
                  <h2>{myProduct.title}</h2>
                  <ul>
                     <li>
                        دسته بندی : <span>{myProduct.category}</span>
                     </li>
                     <li>
                        امتیاز : <span className={styles.rate}>{rating.rate} <span className={styles.votesCount}> ({rating.count} رای)</span></span>
                     </li>
                     <li>
                        قیمت : <span className={styles.price}>{myProduct.price}<span className={styles.dollarSign}>$</span></span>
                     </li>
                  </ul>
                  <div className={styles.buttonContainer}>
                     <div className={styles.count}>
                        {
                           quantityChecker(state ,myProduct.id) > 1 && <img src={MinusIcon} onClick={()=> dispatch(decrease(myProduct))} /> 
                        }
                        {
                           quantityChecker(state ,myProduct.id) === 1 && <img src={DeleteIcon}  onClick={()=> dispatch(removeItem(myProduct))} />
                        }
                        {
                           quantityChecker(state , myProduct.id) && <p>{quantityChecker(state , myProduct.id)}</p>
                        }
                        {
                           cartChecker(state , myProduct.id) ? 
                           <img src={PlusIcon} onClick={()=> dispatch(increase(myProduct))} /> :
                           <button onClick={()=> dispatch(addItem(myProduct))}>افزودن به سبد</button>
                        }
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.shopServicesContainer}>
               <div>
                  <img src={FastTime}/>
                  <p>امکان تحویل اکسپرس</p>
               </div>
               <div>
                  <img src={Return}/>
                  <p>هفت روز ضمانت بازگشت کالا</p>
               </div>
               <div>
                  <img src={Payment}/>
                  <p>امکان پرداخت در محل</p>
               </div>
               <div>
                  <img src={Support}/>
                  <p>۲۴ ساعته، ۷ روز هفته</p>
               </div>
               <div>
                  <img src={OriginalTag}/>
                  <p>ضمانت اصل بودن کالا</p>  
               </div>
            </div>
            <div className={styles.descriptionContainer}>
               <div className={styles.descriptionPart}>
                  <h2> توضیحات محصول :</h2>
                  <p>{myProduct.description}</p>
               </div>
               <div className={styles.noticePart}>
                  <img src={Notice}/>
                  <p>امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد. تمام گوشی‌های دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌ شده را مرجوع کنید.</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default SingleProductPage;