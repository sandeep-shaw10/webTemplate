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
                <Route exact path="/webTemplate/app"  component={Home}/>
                <Route exact path="/webTemplate/service" component={Service}/>
                <Route exact path="/webTemplate/product" component={Product}/>
                <Route exact path="/webTemplate/sign-up" component={SignUp}/>
                <Route path="/webTemplate/Error404" component={ErrorPage}/>
                <Redirect from="/webTemplate" to = "/webTemplate/app"/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
