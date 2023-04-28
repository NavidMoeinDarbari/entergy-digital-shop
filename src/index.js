import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"; 
import axios from 'axios';
import App from './App';
import './index.css';

axios.defaults.baseURL = 'https://';

// axios.interceptors.request.use((request) => {
//    return request
// }, (error) => {
//    console.log(error)
//    return Promise.reject(error)
// })

// axios.interceptors.response.use((response) => {
//    return response.data
// }, (error) => {
//    console.log(error)
//    return Promise.reject(error)
// })

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
   <BrowserRouter>
      <App/>
   </BrowserRouter>  
)