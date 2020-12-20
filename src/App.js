import React from 'react';                                                      //React component
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';      //Document Object Model - Link
import './App.css';                                                                              
import Navbar from './Components/Navbar';
import Home from './Components/pages/HomePages/Home';
import Service from './Components/pages/Services/Service';
import Product from './Components/pages/Product/Product';
import Footer from './Components/pages/Footer/Footer';
import SignUp from './Components/pages/SignUp/SignUp';
import ErrorPage from './Components/pages/ErrorPage';

function App(){
    //Router should enclose the the <Link>/webTemplate
    //To switch the page route we use <Switch><Route></Switch><Route path="" component={ErrorPage}/>
    return(
        <Router>                 
            <Navbar/>
            <Switch>
                <Route exact path="/webTemplate"  component={Home}/>
                <Route path="/webTemplate/service" component={Service}/>
                <Route path="/webTemplate/product" component={Product}/>
                <Route path="/webTemplate/sign-up" component={SignUp}/>
                <Route component={ErrorPage}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
