import React, { useState, useEffect } from 'react'             //React component
import { Link } from 'react-router-dom'             //Document Object Model - Link
import { FaBars, FaTimes } from 'react-icons/fa'    //Icons fa
import { MdFingerprint } from 'react-icons/md'      //Icons md
import { Button } from './Button'
import { IconContext } from 'react-icons/lib'
import './Navbar.css'


function Navbar(){
    const [click, setClick] = useState(false)       //initial value of setClick ==> click == false [Shows FaBars(default)]
    const handleClick = () => setClick(!click)      //onClick the 'click' value is changed
    const closeMobileMenu = () => setClick(false);  //On clicking closeMobileMenu : it closes the FaBars


    const [button, setButton] = useState(true);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false); 
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton)

    // Returning the JSX component
    return(
        <>
        <IconContext.Provider value={{color : "#ffffff" }}>
            <div className = "navbar">
                <div className = "navbar-container container">
                    <Link to = "/webTemplate/app" className = "navbar-logo">
                        <MdFingerprint className = "navbar-icon" onClick = {closeMobileMenu}/>
                        SHAW
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className = {click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/webTemplate/app" className="nav-links" onClick = {closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/webTemplate/service" className="nav-links" onClick = {closeMobileMenu}>
                                Service
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/webTemplate/product" className="nav-links" onClick = {closeMobileMenu}>
                                Product
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ?(
                                <Link to = "/webTemplate/sign-up" className='btn-link'>
                                    <Button buttonStyle="btn--outline" onClick = {closeMobileMenu}>SIGN UP</Button>
                                </Link>
                            ):(
                                <Link to = "/webTemplate/sign-up" className="btn-link">
                                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile" onClick = {closeMobileMenu}>
                                        SIGN UP
                                    </Button> 
                                </Link>
                            )}
                        </li>
                    </ul>
                </div> 
            </div>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;                              //Exporting default, many other function can be exported but needs to be specified(only one is exported as default)              