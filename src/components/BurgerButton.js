import React, { useState } from 'react';
//Components
import Menu from './Menu';
//Styles
import styled from 'styled-components';

const Ul = styled.ul`
   direction: rtl;
   width: 40px;
   height: 40px;
   background-color: ${props => props.open ? 'rgb(23, 42, 64)' : 'rgb(15, 30, 49)'};
   box-shadow: 0px 4px 10px -6px black;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 3px;
   position: fixed;
   right: ${props => props.open ? '180px':'25px'};
   top: 21px;
   z-index: 10;
   transition: .3s;
   cursor: pointer;
   :hover {
      background-color: rgb(27, 53, 87);
   }
   div {
      transform-origin: center;
      transition: all .8s;
      width: 21px;
      height: 3px;
      background-color: white;
      border-radius: 3px;
      position: ${props => props.open ? 'absolute':'static'};
      &:nth-child(1) {
         transform: ${props => props.open ? 'rotate(-45deg)':'rotate(0)'};
      }
      &:nth-child(2) {
         opacity: ${props => props.open ? '0':'1'};
      }
      &:nth-child(3) {
         transform: ${props => props.open ? 'rotate(45deg)':'rotate(0)'};
      }
   }

   @media (max-width: 768px) {
      right: ${props => props.open ? '150px':'18px'};
   }
   @media (max-width: 415px) {
      right: ${props => props.open ? '120px' : '18px'};
   }
   
`

const BurgerButton = () => {
   
   const [open , setOpen] = useState(false)

   const clickHandler = ()=> {
      setOpen(!open)
   }
   return (
      <>
         <Ul open={open} onClick={clickHandler}>
            <div></div>
            <div></div>
            <div></div>
         </Ul>
         <Menu open={open}/>
      </>
   );
}

export default BurgerButton;