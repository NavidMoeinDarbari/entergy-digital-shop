import React from 'react';
//Components
import Banner from "./Banner";
import MainProducts from "./MainProducts";
import Category from './Category';

const LandingPage = () => {
   return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center' , alignItems:'center'}}>
         <Banner/>
         <Category/>
         <MainProducts/>
      </div>
   );
}

export default LandingPage;