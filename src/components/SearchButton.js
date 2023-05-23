import React , {useEffect , useState , useRef} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//Functions
import titleSplitter from '../functions/titleSplitter.js';
//Icons
import styles from './SearchButton.module.css';
import SearchIcon from '../Icons/search (1).svg';

const SearchButton = () => {

   const products = useSelector(state => state.productsState.products)
   const [value , setValue] = useState("");
   const [searchedItems , setSearchedItems] = useState([]);
   const [isActive , setIsActive] = useState(false);

   const input = useRef(null)
   
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
      setSearchedItems([])
      input.current.value = ''
   }

   return (
      <>
         <div className={styles.searchContainer} style={{width: isActive ? '200px':'110px'}}>
            <img src={SearchIcon} />
            <input type='text' placeholder='جستجو' ref={input} onChange={(event) => setValue(event.target.value)}/>
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