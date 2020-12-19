import React from 'react';                                                      //React component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';      //Document Object Model - Link
import './App.css';                                                                              
import Navbar from './Components/Navbar';
import Home from './Components/pages/HomePages/Home';
import Service from './Components/pages/Services/Service';
import Product from './Components/pages/Product/Product';
import Footer from './Components/pages/Footer/Footer';
import SignUp from './Components/pages/SignUp/SignUp';
import ErrorPage from './Components/pages/ErrorPage';

function App(){
    //Router should enclose the the <Link>
    //To switch the page route we use <Switch><Route></Switch>
    return(
        <Router>                 
            <Navbar/>
            <Switch>
                <Route path="/webTemplate" exact component={Home}/>
                <Route path="/webTemplate/service" exact component={Service}/>
                <Route path="/webTemplate/product" exact component={Product}/>
                <Route path="/webTemplate/sign-up" exact component={SignUp}/>
                <Route path="" component={ErrorPage}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
