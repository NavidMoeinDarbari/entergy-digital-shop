import React, { Component } from 'react';
//Styles
import styles from './Banner.module.css';
//Icons
import BannerPic5 from '../images/My project.png';
import Arrow from '../Icons/arrow (1).png';

class Banner extends Component {
   render() {
      return (
         <>
            <div className={styles.bannerContainer}>
               <img src={BannerPic5} alt='banner'/>
               <div className={styles.bannerTitle}>
                  <h1>دسکتاپت رو ارتقا بده!</h1>
                  <p> جدیدترین و پرکاربرد ترین کالا های دیجیتال را با تضمین اصالت و کیفیت و با مناسب ترین قیمت   می توانید اینجا پیدا کنید.<br/> برای مشاهده پیشنهاد های جذاب و تخفیف های ویژه محصولات دکمه زیر رو بزن :) </p>
                  <button><img src={Arrow}/>پیشنهادها</button>
               </div>
            </div>
         </>
      );
   }
}

export default Banner;