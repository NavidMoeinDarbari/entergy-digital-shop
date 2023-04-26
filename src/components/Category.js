import React, { Component } from 'react';
//Styles
import styles from './Category.module.css';
//Components
import CategoryCard from './CategoryCard.js';
//!Icons
import Laptop from '../images/Macbook-Pro-13-20162019_Silver_600x.webp';
import Monitor from '../images/AG273FXR_F.png';
import Headphones from '../images/214.png';
import Graphic from '../images/201910081109291220983babf0c75df5c0f8288d2ac4cc4a-big-506x506.png';
import hardExternal from '../images/4bd71ce7a1fc3903b16723a0a5380edc3f4c48cc_346a4dfed409d8773ba2033dba4720cea404d1f5_1509659173000_1336261-removebg-preview.png';

class Category extends Component {
   render() {
      return (
         <div className={styles.container}>
            <CategoryCard src={Laptop} alt="laptop" category="لپ تاپ و الترابوک"/>
            <CategoryCard src={Headphones} alt="headphones" category="هدفون و هدست"/>
            <CategoryCard src={Monitor} alt="monitor" category="مانیتور و تلوزیون"/>           
            <CategoryCard src={Graphic} alt="graphic-card" category="سخت افزار کامپیوتر"/>
            <CategoryCard src={hardExternal} alt="graphic-card" category="هارد و مموری"/>                 
         </div>
      );
   }
}

export default Category; 