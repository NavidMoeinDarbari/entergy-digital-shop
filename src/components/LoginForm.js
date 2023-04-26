import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
//Functions
import {validation} from '../functions/validation';
import { notify } from '../functions/toast';
//Styles
import styles from './Signup-loginForm.module.css';
//Icons
import Banner2 from '../images/buy-online.gif';

const LoginForm = () => {
   const [data , setData] = useState({
      email:'',
      password:'',
   })
   const [errors , setErrors] = useState({})
   const [focused , setFocused] = useState({})

   useEffect(() => {
      setErrors(validation(data , 'login'))
      console.log(errors);
   },[data , focused])

   const clickHandler = (event) => {
      if(event.target.name === 'isAccepted') {
         setData({...data, [event.target.name]:event.target.checked })
      }
      else {
         setData({...data, [event.target.name]:event.target.value })
      }
   }

   const focusHandler = (event) => {
      setFocused({...focused , [event.target.name]: true})
   }

   const submitHandler = (event) => {
      event.preventDefault()
      if(!Object.keys(errors).length) {
         notify('success' , 'خوش آمدید')
      }
      else {
         setFocused({
            email: true,
            password: true
         })
         notify('unsuccess' , 'مشخصات خود را کامل وارد کنید')
      }
   }

   return (
      <div className={styles.loginFormPage}>
         <form onSubmit={submitHandler} className={styles.formContainer}>
            <div className={styles.loginFormPart}>
               <h2>ورود به حساب کاربری</h2>
               <div className={styles.inputContainer}>
                  <label>ایمیل: </label>
                  <input type='email' name='email' onChange={clickHandler} onFocus={focusHandler}
                  className={(errors.email && focused.email) ? styles.incomplete : styles.complete}/>
                  {errors.email && focused.email && <span>{errors.email}</span>}
               </div>
               <div className={styles.inputContainer}>
                  <label>رمز عبور: </label>
                  <input type='password' name='password' onChange={clickHandler} onFocus={focusHandler}
                  className={(errors.password && focused.password) ? styles.incomplete : styles.complete}/>
                  {errors.password && focused.password && <span>{errors.password}</span>}
               </div>
               
               <div className={styles.loginButtonContainer}>
                  <button type='submit'>ورود</button>
                  <p>تاکنون ثبت نام نکرده اید؟</p>
                  <Link to="/signup">ایجاد حساب کابری</Link>
               </div>
               <span className={styles.divider}></span>
            </div>
            <div className={styles.bannerPart}>
               <img src={Banner2}/>
               <p>رمز عبور خود را فراموش کرده اید؟</p>
               <a>بازیابی رمز عبور</a>
            </div>
         </form>
         <ToastContainer/>
      </div>
   );
};

export default LoginForm;