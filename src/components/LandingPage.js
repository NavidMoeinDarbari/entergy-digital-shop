import React from 'react';
//Components
import Banner from "./Banner";
import MainProducts from "./MainProducts";
import Main from './Category';

const LandingPage = () => {

   return (
      <div>
         <Banner/>
         <Main/>
         <MainProducts/>
      </div>
   );
}

export default LandingPage;