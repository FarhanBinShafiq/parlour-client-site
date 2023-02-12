import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);


    const {logOut,user}=useContext(AuthContext)

    const signout=()=>{
        logOut()
    }

    const menuItems=
    <>
            <li className="nav-item">
                            <NavLink
                                exact
                                to="/"

                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"

                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/blog"

                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Contact Us
                            </NavLink>
                        </li>

                     {
                        user?.uid ?
                        <>

                         <li className="nav-item">
                            
                                <NavLink
                                    exact
                                    className="nav-links"
                                    to="/dashboard"
                                     
                                >
                                    Dashboard
                                </NavLink>
                            
                        </li>

                              <li className="nav-item">
                            <button className='btn btn-info'>
                                <NavLink
                                    exact
                                    to="/login"
                                    onClick={signout}
                                >
                                    Sign Out
                                </NavLink>
                            </button>
                        </li>

                       
                        </>  :

                        

                        <li className="nav-item">
                            <button className='btn btn-info'>
                                <NavLink
                                    exact
                                    to="/login"
                                  
                                >
                                    Log In
                                </NavLink>
                            </button>
                        </li>
                     }
     
     
     
     </>

    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        CodeBucks
                        <i className="fa fa-code"></i>
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                            {menuItems}
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </ div>
    );
};

export default Navbar;