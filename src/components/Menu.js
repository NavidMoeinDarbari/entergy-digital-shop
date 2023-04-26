import React from 'react';
import styled from 'styled-components';

const PageMenu = styled.div`
   direction: rtl;
   width: 250px;
   height: 100vh;
   background-color: rgb(15,30,49);
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
   /* border-radius: 3% 0 0 3%; */
   border-right: 1px solid black;
   padding: 50px 0em 10px 0em;
   right: 0;
   top: 0;
   z-index: 2;
   transform: ${props => props.open ? 'translateX(0)' : 'translateX(100%)'};
   transition: all .3s;
   ul{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: right;
      list-style: none;
      padding: 40px 0 25px 0;
   }
   ul div {
      width: 100%;
      height: fit-content;
      display: flex; 
      flex-direction: column;
      justify-content: start;
   }
   ul li , p{
      font-family: 'Lalezar';
      font-weight: lighter;
      letter-spacing: .2px;
      color: rgb(244,244,244);
      width: 100%;
      font-size: 1.15rem;
      padding: 10px 35px;
      transition: .2s;
      cursor: pointer;
   }
   li:hover {
      background-color: rgb(33, 55, 80);
   }
   p:hover {
      background-color: rgb(255, 0, 0, 0.3);
   }

   @media (max-width: 768px) {
      width: 210px;
      ul li , p {
         font-size: 1.1rem;
      }
   }
   @media (max-width: 415px) {
      width: 180px;
      ul li , p {
         font-size: 1rem;
         padding: 10px 25px;
      }
   }
`

const Menu = (props) => {
   return (
      <PageMenu open={props.open}>
         <ul>
            <div>
               <li>خانه</li>
               <li>سبد خرید</li>
               <li>محصولات</li>
               <li>تخفیف ها</li>
               <li>راهنما</li>
               <li>درباره ما</li>
               <li>تنظیمات</li>
               <li>تاریخچه سفارش ها</li>
            </div>
            <p style={{color: '#FF5D5D'}}>خروج از حساب کاربری</p>
         </ul>
      </PageMenu>
   );
}

export default Menu;