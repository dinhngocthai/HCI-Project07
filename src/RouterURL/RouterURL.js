import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom'
import Blog from '../components/Blog/Blog'
import BlogArticle from '../components/Blog/BlogArticle'
import Catalog from '../components/Catalog/Catalog'
import ForgotPass from '../components/ForgetPass'
import Gallery from '../components/Gallery/Gallery'
import Home from '../components/HomePage/Main'
import NavContent from '../components/HomePage/NavContent'
import SignIn from '../components/SignIn'
import Signup from '../components/Signup'
import Cart from '../components/Store/Cart'
import Checkout from '../components/Store/Checkout'
import Product from '../components/Store/Product'
import Store from '../components/Store/Store'
import StyleGuide from '../components/StyleGuide'
import Tournaments from '../components/Tournaments/Tournaments'
export default class RouterURL extends Component {
    render() {
        return (
            <Router>
                  <div>
{/* <=================================Navigation============================>          */}
                    <Route  path= "/Tournaments" component={Tournaments}/>
                    <Route  path= "/Nav" component={NavContent}/>
                    <Route exact path= "/" component={Home}/>
                    <Route  path= "/ForgotPass" component={ForgotPass}/>
                    <Route  path= "/Signup" component={Signup}/>
                    <Route  path= "/SignIn" component={SignIn}/>
{/* <=================================Store=================================>          */}
                    <Route  path= "/Cart" component={Cart}/>
                    <Route  path= "/Checkout" component={Checkout}/>
                    <Route  path= "/Product" component={Product}/>
                    <Route  path= "/Store" component={Store}/>
{/* <=================================Gallery=================================>          */}
                    <Route  path= "/Gallery" component={Gallery}/>
{/* <=================================Blog=================================>          */}
                    <Route  path= "/Blog" component={Blog}/>
                    <Route  path= "/BlogArticle" component={BlogArticle}/>
{/* <=================================Catalog=================================>          */}
                    <Route  path= "/Catalog" component={Catalog}/>
                    <Route  path= "/StyleGuide" component={StyleGuide}/>
                </div>
            </Router>
          
        )
    }
}
