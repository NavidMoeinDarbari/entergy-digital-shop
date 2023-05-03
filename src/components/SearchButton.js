import React , {useEffect , useState , useContext} from 'react';
import { Link } from 'react-router-dom';
//Functions
import titleSplitter from '../functions/titleSplitter.js';
//Context
import { ProductsContext } from '../App.js';
//Icons
import styles from './SearchButton.module.css';
import SearchIcon from '../Icons/search (1).svg';

const SearchButton = () => {

   const products = useContext(ProductsContext)
   const [value , setValue] = useState("");
   const [searchedItems , setSearchedItems] = useState([]);
   const [isActive , setIsActive] = useState(false);
   
   useEffect(()=> {
      if(value.length >= 1) {
         products.map( item => {
            if(item.title.toLowerCase().trim().includes(value.toLowerCase())) {
               setSearchedItems(searchedFilter([...searchedItems, item]))
            }
         })
         setIsActive(true)
      }
      else {
         setSearchedItems([])
         setIsActive(false)
      }
   }, [value])
   
   const searchedFilter = (array) => {
      const filtered = []
      array.forEach ( item => {
         if(!filtered.includes(item)) filtered.unshift(item)
      })
      return filtered
   }
    
   const searchHandler = () => {
      setIsActive(false)
   }

   return (
      <>
         <div className={styles.searchContainer} style={{width: isActive ? '200px':'110px',}}>
            <img src={SearchIcon} />
            <input type='text' placeholder='جستجو' onChange={(event) => setValue(event.target.value)}/>
         </div>
         {isActive && searchedItems.length &&
            <div  className={styles.searchResults}>
               {
                  searchedItems.reverse().map( element => 
                     <Link to={`/products/${element.id}`} key={element.id} onClick={searchHandler}>
                        <div className={styles.item}>
                           <div className={styles.itemImage}>
                              <img src={element.image}/>
                           </div>
                           <div className={styles.itemTitle}>
                              <h3>{titleSplitter(element.title, 'long')}</h3>
                           </div>
                        </div>
                     </Link>
                  )
               }
            </div>
         }
      </>
   );
}; 

export default SearchButton;