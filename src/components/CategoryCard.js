import React, { Component } from 'react';
//Styles
import styles from './CategoryCard.module.css';

class Card extends Component {
   render() {
      const {src,alt,category} = this.props;
      return (
         <div className={styles.container}>
            <div className={styles.imgContainer}>
               <img src={src}  alt={alt}/>
            </div>
            <div className={styles.headerContainer}>
               <h2>{category}</h2>
            </div>
         </div>
      );
   }
}

export default Card;