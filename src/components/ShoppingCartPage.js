import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//Context
import { CartContext } from '../context/CartContextProvider';
//Styles
import styles from './ShoppingCartPage.module.css';
//Icons
import CloseIcon from '../Icons/close-tick.svg';
import PlusIcon from '../Icons/plus.svg';
import MinusIcon from '../Icons/minus.svg';

const ShoppingCartPage = () => {

   const {state , dispatch} = useContext(CartContext);

   return (
      <div className={styles.pageContainer}>
         <div className={styles.cartContainer}>
            {state.selectedItems.length ? 
               <div className={styles.checkoutPart}>
                  <div className={styles.totalCount}>
                     <h3>تعداد کالاها :</h3>
                     <p>{state.itemsCounter}</p>
                  </div>
                  <div className={styles.totalCost}>
                     <h3>قیمت کل کالاها :</h3>
                     <p>{state.total}</p>
                  </div>
                  <div className={styles.totalDiscount}>
                     <h3>سود شما از خرید :</h3>
                     <p>0</p>
                  </div>
                  <div className={styles.discountCode}>
                     <h3>کد تخفیف :</h3>
                     <input type='text'/>
                     <button>ثبت</button>
                  </div>
                  <button className={styles.payment}>پرداخت</button>
               </div> 
               :
               <div className={styles.emptyCardMessage}>
                  <h2>سبد خرید شما خالی است!</h2>
                  <Link to='/products'>مشاهده محصولات</Link>
               </div>
            }
            <div className={styles.selectedItemsPart}>
               {
                  state.selectedItems.map(item => 
                     <div className={styles.item} key={item.id}>
                        <img className={styles.closeButton} src={CloseIcon} onClick={() => dispatch({type:'REMOVE-ITEM' , payload:item})}/>
                        <section className={styles.imagePart}>
                           <img src={item.image} alt={item.title}/>
                           <span></span>
                        </section>
                        <section className={styles.infoPart}>
                           <div className={styles.info}>
                              <h2>{item.title}</h2>
                              <ul>
                                 <li className={styles.price}>قیمت محصول : <span>$</span> {item.price}</li>
                                 <li>گارانتی اصالت و سلامت فیزیکی کالا</li>
                                 <li>ارسال فوری با پست پیشتاز (4 الی 6 روز)</li>
                                 <li>موجود در انبار فروشنده</li>
                              </ul>
                           </div>
                           <span className={styles.divider}></span>
                           <div className={styles.count_price}>
                              <div className={styles.count}>
                                 <h3>تعداد :</h3>
                                 <div>
                                    <img src={PlusIcon} onClick={()=> dispatch({type: 'INCREASE' , payload: item})} />
                                    <p>{item.quantity}</p>
                                    <img src={MinusIcon} onClick={()=> dispatch({type: 'DECREASE' , payload: item})} />
                                 </div>
                              </div>
                              <div className={styles.totalPrice}>
                                 <h3>قیمت کل :</h3>
                                 <h3><span>{item.price * item.quantity}</span>$</h3>
                              </div>
                           </div>
                        </section>
                     </div>
                  )
               }
            </div>
         </div>
      </div>
   );
};

export default ShoppingCartPage;