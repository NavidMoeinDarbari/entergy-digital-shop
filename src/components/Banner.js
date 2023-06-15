import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Styles
import styles from './Banner.module.css';
//Icons
import BannerPic5 from '../images/My project 2.png';
import Arrow from '../Icons/left-arrow-white.svg';

class Banner extends Component {
   render() {
      return (
         <>
            <div className={styles.bannerContainer}>
               <img className={styles.bannerPhoto} src={BannerPic5} alt='banner'/>
               <div className={styles.bannerTitle}>
                  <h1>دنیای دیجیتال،<br/> همراه تو</h1>
                  <p> جدیدترین و پرکاربرد ترین کالا های دیجیتال را با تضمین اصالت و کیفیت و با مناسب ترین قیمت   می توانید اینجا پیدا کنید.<br/> برای مشاهده پیشنهاد های جذاب و تخفیف های ویژه محصولات دکمه زیر رو بزن :) </p>
                  <Link to='/products'><button><img className={styles.arrowIcon} src={Arrow}/>پیشنهادها</button></Link>
               </div>
            </div>
         </>
      );
   }
}

export default Banner;