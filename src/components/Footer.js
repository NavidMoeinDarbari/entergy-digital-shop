import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import styles from './Footer.module.css';
//Icons
import ZarinpalLogo from '../images/zarin-palpng.parspng.com_.png';
import EnamadLogo from '../images/enamad_icon_text_color_blue_1024 (1).png'; 
import Logo from '../images/output-onlinepngtools.png';
import TelegramIcon from '../Icons/telegram.svg';
import InstagramIcon from '../Icons/instagram.svg';
import TwitterIcon from '../Icons/twitter (3).svg';

const Footer = () => {
   return (
      <div className={styles.footer}>
         <div className={styles.footerContainer}>
            <div className={styles.descriptionPart}>
               <div className={styles.descriptionImgContainer}>
                  <img src={Logo}/> 
               </div>
               <p>اینترجی ، با هدف ایجاد بروزترین و معتبرترین سایت خرید محصولات دیجیتال برای دوستداران تکنولوژی شکل گرفته و در تلاش است تا بهترین و پرفروش ترین محصولات برندهای روز دنیا را با تضمین اصالت کالا و منصفانه ترین قیمت به دست  خریداران در سراسر کشور برساند. تمامی کالاهای موجود در سایت شامل گارانتی ها معتبر می باشند و در صورت نارضایتی مشتریان می توانند محصول را مرجوع کرده و تمام مبلغ عودت داده می شود. شما می توانید با عضویت در شبکه های اجتماعی ما، هروزه از پیشنهادها، تخفیف های ویژه و محصولات ما باخبر  شوید. 
               </p>
            </div>
            <div className={styles.categoryPart}>
               <h2>بخش های سایت</h2>
               <ul className={styles.categories}>
                  <li><Link to='/products'>محصولات</Link></li>
                  <li><Link to='/discounts'>تخفیف ها</Link></li>
                  <li><Link to='/document'>راهنما</Link></li>
                  <li><Link to='/aboutus'>درباره ما</Link></li>
               </ul>
               <p>برای اطلاع از جدید ترین  محصولات ما را در شبکه ها اجتماعی دنبال کنید :</p>
               <div className={styles.icons}>
                  <div>
                     <img src={TelegramIcon}/>
                  </div>
                  <div>
                     <img src={InstagramIcon}/>
                  </div>
                  <div>
                     <img src={TwitterIcon}/>
                  </div>
               </div>
            </div>
            <div className={styles.logoPart}>
               <h2> پرداخت امن زرین پال    </h2>
               <div>
                  <img src={ZarinpalLogo}/>
               </div>
               <div>
                  <img src={EnamadLogo}/>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;