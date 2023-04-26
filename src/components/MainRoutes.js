import React, { Component } from 'react';
import { Redirect, Route , Switch } from "react-router-dom";
//Components
import LandingPage from "./LandingPage";
import ProductsPage from "./ProductsPage";
import AboutUsPage from "./AboutUsPage";
import DocumentPage from "./DocumentPage";
import DiscountsPage from "./DiscountsPage";
import SingleProductPage from './SingleProductPage';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import ShoppingCartPage from './ShoppingCartPage';

class MainRoutes extends Component {
   render() {
      return (
         <div>
            <Switch>
               <Route path='/products/:key' component={SingleProductPage}/>
               <Route path='/products' component={ProductsPage} />
               <Route path='/cart' component={ShoppingCartPage} />
               <Route path='/document' component={DocumentPage} />
               <Route path='/discounts' component={DiscountsPage} />
               <Route path='/aboutus' component={AboutUsPage} />
               <Route path='/login' component={LoginForm} />
               <Route path='/signup' component={SignUpForm}/>
               <Route path='/' component={LandingPage} />
            </Switch>
         </div>
      )
   }
}

export default MainRoutes;