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


const SignUpForm = () => {

   const [data , setData] = useState({
      name:'',
      email:'',
      password:'',
      confirmPassword:'',
      isAccepted: false
   })
   const [errors , setErrors] = useState({})
   const [focused , setFocused] = useState({})

   useEffect(() => {
      setErrors(validation(data, 'signUp'))
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
         notify('success' , 'ثبت نام با موفقیت انجام شد')
      }
      else {
         setFocused({
            name: true,
            email: true,
            password: true,
            confirmPassword: true,
            isAccepted: true
         })
         notify('unsuccess' , 'مشخصات خود را کامل وارد کنید')
      }
   }

   return (
      <div className={styles.loginFormPage}>
         <form onSubmit={submitHandler} className={styles.formContainer}>
            <div className={styles.formPart}>
               <h2>ایجاد حساب کاربری</h2>
               <div className={styles.inputContainer}>
                  <label>نام کاربری: </label>
                  <input type='text' name='name' onChange={clickHandler} onFocus={focusHandler}
                  className={(errors.name && focused.name) ? styles.incomplete : styles.complete}/>
                  {errors.name && focused.name && <span>{errors.name}</span>}
               </div>
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
               <div className={styles.inputContainer}>
                  <label> تکرار رمز عبور: </label>
                  <input type='password' name='confirmPassword' onChange={clickHandler} onFocus={focusHandler}
                  className={(errors.confirmPassword && focused.confirmPassword) ? styles.incomplete : styles.complete}/>
                  {errors.confirmPassword && focused.confirmPassword && <span>{errors.confirmPassword}</span>}
               </div>
               <div className={styles.checkboxContainer}>
                  <label>با قوانین و سیاست های سایت مواقفت می کنم : </label>
                  <input type='checkbox' name='isAccepted' onChange={clickHandler} onFocus={focusHandler}
                  className={(errors.isAccepted && focused.isAccepted) ? styles.incomplete : styles.complete}/>
                  {errors.isAccepted && focused.isAccepted && <span>{errors.isAccepted}</span>}
               </div>
               <div className={styles.buttonContainer}>
                  <button type='submit'>ثبت نام</button>
               </div>
               <span className={styles.divider}></span>
            </div>
            <div className={styles.bannerPart}>
               <img src={Banner2}/>
               <p>قبلا ثبت نام کرده اید؟</p>
               <Link to="/login">ورود به حساب کاربری</Link>
            </div>
         </form>
         <ToastContainer/>
      </div>
   );
};

export default SignUpForm;