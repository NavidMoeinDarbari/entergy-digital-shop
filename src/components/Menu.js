import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//Icon
import PowerIcon from '../Icons/power.svg';

const PageMenu = styled.div`
   direction: rtl;
   width: ${props => props.open ? '250px' : '0'};
   height: 100vh;
   background-color: rgb(15,30,49);
   position: fixed;
   display: ${props => props.isClosed ? 'flex' : 'none'};
   justify-content: center;
   align-items: center;
   border-right: 1px solid black;
   padding: 50px 0em 10px 0em;
   right: -10px ;
   top: 0;
   z-index: 2;
   transform: ${props => props.isClosed ? 'translateX(0)' : 'translateX(100%)'};
   opacity: ${props => props.open ? '1' : '0'};
   transition: all .2s;
   ul{
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: right;
      padding: 40px 0 25px 0;
      display: ${props => props.open ? 'flex' : 'none'};
   }
   ul div {
      width: 100%;
      height: fit-content;
      display: flex; 
      flex-direction: column;
      justify-content: start;
   }
   ul li {
      font-family: 'YekanBakh';
      font-weight: 500;
      letter-spacing: .2px;
      color: rgb(244,244,244);
      width: 100%;
      font-size: 1.05rem;
      padding: 10px 30px;
      transition: .2s;
      cursor: pointer;
      list-style: inside circle;
      white-space: nowrap;
   }
   button {
      width: 65%;
      padding: 8px 0px;
      font-family: 'YekanBakh';
      font-size: 1rem;
      font-weight: 500;
      background-color: #AA2E2E;
      color: rgb(244,244,244);
      border: none;
      border-radius: 13px;
      display: flex; justify-content: center; align-items: center;
      gap: 7px;
   }
   button img {
      width: 18px;
   }
   li:hover {
      background-color: rgb(33, 55, 80);
      list-style: inside disc;
   }
   button:hover {
      background-color: rgb(255, 0, 0, 0.3);
   }
   /* @media (min-width: 1440px) {
      width: 265px;
      button img {
         width: 20px;
      }
   } */
   @media (max-width: 768px) {
      /* width: 215px; */
      width: ${props => props.open ? '215px' : '0'};
      ul li {
         padding: 10px 25px;
      }
      button {
         width: 70%;
         font-size: 1rem
      }
   }
   @media (max-width: 415px) {
      /* width: 185px; */
      width: ${props => props.open ? '185px' : '0'};
      ul li {
         padding: 10px 20px;
         font-size: 1rem;
      }
      button {
         font-size: .9rem;
      }
   }
`

const Menu = (props) => {

   const [isClosed, setIsClosed] = useState(true);
   const pageMenu = useRef(null);

   useEffect(()=> {
      if(pageMenu.current.clientWidth === 150) setIsClosed(false)
   },[props.open])

   return (
      <PageMenu open={props.open} isClosed={isClosed} ref={pageMenu}>
         <ul>
            <div>
               <Link to='/'><li>خانه</li></Link>
               <Link to='/cart'><li>سبد خرید</li></Link>
               <Link to='/products'><li>محصولات</li></Link>
               <li>تخفیف ها</li>
               <li>راهنما</li>
               <li>درباره ما</li>
               <li>تنظیمات</li>
               <li>تاریخچه سفارش ها</li>
            </div>
            <button><img src={PowerIcon}/>خروج از حساب</button>
         </ul>
      </PageMenu>
   );
}

export default Menu;