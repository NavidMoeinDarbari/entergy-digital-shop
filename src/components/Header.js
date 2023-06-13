import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//Components
import BurgerButton from './BurgerButton';
import SearchButton from './SearchButton';
import EnterAccount from './EnterAccount';
//Styles
import styles from './Header.module.css';
//Icons
import Logo from '../images/output-onlinepngtools.png';
import CartIcon from '../Icons/cart.svg';


const Header = () => {

   const state = useSelector(state => state.cartState) 

   return (
      <header className={styles.header}>
         <BurgerButton/>
         <nav className={styles.nav}>
            <ul>
               <Link to='/'><li>خانه</li></Link>
               <Link to='/products'><li>محصولات</li></Link>
               <Link to='/discounts'><li>تخفیف ها</li></Link>
               <Link to='/document'><li>راهنما</li></Link>
               <Link to='/aboutus'><li>درباره ما</li></Link>
            </ul>
            <div className={styles.logoContainer}>
               <img className={styles.logo} src={Logo} alt='logo'/>
            </div>
         </nav>
         <Link to='/cart'>
            <div className={styles.cartIconContainer}>
               <img src={CartIcon} className={state.itemsCounter ? styles.active : ''}/>
               <span className={state.itemsCounter ? styles.showCount : styles.hideCount}>{state.itemsCounter}</span>
            </div>
         </Link>
         <SearchButton/>
         <EnterAccount/>
      </header> 
   );
}

export default Header;