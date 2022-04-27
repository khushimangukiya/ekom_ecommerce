import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <header className="header-wrap style1">
                <div className="header-top bg-mine-shaft">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-4 col-md-5">
                                <div className="header-top-left">
                                    <p>Free shipping for all orders of 20% off</p>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-8 col-md-7">
                                <div className="header-top-right">
                                    <div className="select-lang">
                                        <i className="ri-earth-fill" />
                                        <div className="navbar-option-item navbar-language dropdown language-option">
                                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="lang-name" />
                                            </button>
                                            <div className="dropdown-menu language-dropdown-menu">
                                                <a className="dropdown-item" href="#">
                                                    <img src="assets/img/uk.png" alt="flag" />
                                                    Eng
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <img src="assets/img/china.png" alt="flag" />
                                                    简体中文
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <img src="assets/img/uae.png" alt="flag" />
                                                    العربيّة
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="social-profile list-style">
                                        <li>
                                            <a target="_blank" href="https://facebook.com/">
                                                <i className="ri-facebook-fill" />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://twitter.com/">
                                                <i className="ri-twitter-fill" />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://linkedin.com/">
                                                <i className="ri-linkedin-fill" />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://instagram.com/">
                                                <i className="ri-pinterest-fill" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand" href="index.html">
                                <img className="logo-light" src="assets/img/logo.png" alt="logo" />
                                <img className="logo-dark" src="assets/img/logo-white.png" alt="logo" />
                            </a>
                            <div className="collapse navbar-collapse main-menu-wrap" id="navbarSupportedContent">
                                <div className="menu-close xl-none">
                                    <a href="javascript:void(0)"> <i className="ri-close-line" /></a>
                                </div>
                                <ul className="navbar-nav ms-auto">
                                <li className='nav-item'>
                                    <NavLink className="nav-link" exact to={"/"}>Home
                                    </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a href="about.html" className="nav-link">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            Shop
                                            <i className="ri-arrow-down-s-line" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="shop_layout.html" className="nav-link">
                                                    Shop Layout
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="shop-details.html" className="nav-link">Shop Details</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="track-order.html" className="nav-link">Track Order</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            Pages
                                            <i className="ri-arrow-down-s-line" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="faq.html" className="nav-link">FAQ</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="testimonials.html" className="nav-link">Testimonials</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="terms-of-service.html" className="nav-link">Terms of Service</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="contact.html" className="nav-link">Contact Us</a>
                                    </li>
                                    <li className="nav-item xl-none  mt-3">
                                        <a href="login.html" className="btn style1">Login</a>
                                    </li>
                                </ul>
                                <div className="others-options lg-none">
                                    <a href="login.html" className="btn style1">Login</a>
                                </div>
                                <div className="others-options lg-none">
                                    <button className="searchbtn" type="button">
                                        <i className="flaticon-search" />
                                    </button>
                                </div>
                                <div className="others-options lg-none">
                                    <div className="shopcart">
                                        <i className="flaticon-shopping-cart" />
                                        <span>1</span>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="mobile-bar-wrap">
                            <button className="searchbtn xl-none" type="button">
                                <i className="flaticon-search" />
                            </button>
                            <div className="shopcart d-xl-none">
                                <i className="flaticon-shopping-cart" />
                                <span>1</span>
                            </div>
                            <div className="mobile-menu xl-none">
                                <a href="javascript:void(0)"><i className="ri-menu-line" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-area">
                    <div className="container">
                        <button type="button" className="close-searchbox">
                            <i className="ri-close-line" />
                        </button>
                        <form action="#">
                            <div className="form-group">
                                <input type="search" placeholder="Search Here" autofocus />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="cart-popup">
                    <button type="button" className="close-cart-popup"><i className="ri-close-fill" /></button>
                    <div className="cart-popup-body">
                        <div className="cart-item">
                            <div className="cart-item-action">
                                <button className="delete-cart-item">
                                    <i className="ri-close-circle-fill" />
                                </button>
                            </div>
                            <div className="cart-item-img">
                                <img src="assets/img/products/product-thumb-1.png" alt="Image" />
                            </div>
                            <div className="cart-item-info">
                                <h5><a href="shop-details.html">Over-Ear Headphone</a></h5>
                                <p>$28.00</p>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="cart-item-action">
                                <button className="delete-cart-item">
                                    <i className="ri-close-circle-fill" />
                                </button>
                            </div>
                            <div className="cart-item-img">
                                <img src="assets/img/products/product-thumb-2.png" alt="Image" />
                            </div>
                            <div className="cart-item-info">
                                <h5><a href="shop-details.html">JLB Base Earphone</a></h5>
                                <p>$40.00</p>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="cart-item-action">
                                <button className="delete-cart-item">
                                    <i className="ri-close-circle-fill" />
                                </button>
                            </div>
                            <div className="cart-item-img">
                                <img src="assets/img/products/product-thumb-3.png" alt="Image" />
                            </div>
                            <div className="cart-item-info">
                                <h5><a href="shop-details.html">Wireless Headphone</a></h5>
                                <p>$35.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart-popup-footer">
                        <div className="total-amt">
                            <h5>Total Payable</h5>
                            <h5>$178.00</h5>
                        </div>
                        <div className="cart-popup-btn">
                            <a href="cart.html" className="btn style1">View Cart</a>
                            <a href="checkout.html" className="btn style2">Checkout</a>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    );
}

export default Header;