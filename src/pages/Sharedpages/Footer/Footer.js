import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=''>
            <br />
            <footer className="footer  p-10 bg-base-200 text-base-content">
                <div>
                    <NavLink exact to="/" className="nav-logo">
                        Jenny's Parlour

                    </NavLink><br/>
                    <p>Perlour Ltd.Providing reliable tech since 2002</p>

                </div>
                <div>
                    <span className="footer-title text-info">Company</span>
                    < Link to='/about' className="link link-hover">About us</Link>
                    < Link to='/contact' className="link link-hover">Contact</Link>
                    < Link to='/login' className="link link-hover">Log In</Link>
                    < Link to='/signup' className="link link-hover">Sign Up</Link>
                </div>
                <div>
                    <span className="footer-title text-info">Legal</span>
                    < Link to='/' className="link link-hover">Terms of use</Link>
                    < Link to='/' className="link link-hover">Privacy policy</Link>
                    < Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title text-info">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-info">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-info absolute top-0 right-0  rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;