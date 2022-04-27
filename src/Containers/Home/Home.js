import React from 'react';

function Home(props) {
    return (
        <div>
            {/* <div className="loader js-preloader">
                <div />
                <div />
                <div />
            </div> */}
            <div className="switch-theme-mode">
                <label id="switch" className="switch">
                    <input type="checkbox" onchange="toggleTheme()" id="slider" />
                    <span className="slider round" />
                </label>
            </div>
            <div className="page-wrapper">
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
                                        <li className="nav-item">
                                            <a href="#" className="nav-link active">
                                                Home
                                            </a>
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
                <section className="hero-wrap style1">
                    <div className="hero-slider-one owl-carousel">
                        <div className="hero-slide-item">
                            <div className="container-fluid">
                                <span className="hero-promotext">HEADPHONES</span>
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="hero-content">
                                            <span data-aos="fade-right" data-aos-duration={1200} data-aos-delay={100}>PXC 550
                                                WIRELESS</span>
                                            <h1 data-aos="fade-right" data-aos-duration={1200} data-aos-delay={300}>Superior
                                                Sound With Tengible Quality</h1>
                                            <p data-aos="fade-right" data-aos-duration={1200} data-aos-delay={500}>Lorem ipsum
                                                dolor sit amet consectetur adipisicing elit. Cum verit atis assum enda maiores
                                                eos ducimus ullam accusamus vitae beatae quas in.</p>
                                            <a href="shop-left-sidebar.html" className="btn style1" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={700}> Shop Now</a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="hero-img-wrap" data-speed="0.10" data-revert="true">
                                            <img src="assets/img/hero/hero-slider-1.png" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slide-item">
                            <div className="container-fluid">
                                <span className="hero-promotext">HEADPHONES</span>
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="hero-content">
                                            <span data-aos="fade-right" data-aos-duration={1200} data-aos-delay={100}>NEW
                                                ARRIVALS</span>
                                            <h1 data-aos="fade-right" data-aos-duration={1200} data-aos-delay={300}>Change Your
                                                State Of Mind With Music</h1>
                                            <p data-aos="fade-right" data-aos-duration={1200} data-aos-delay={500}>Lorem ipsum
                                                dolor sit amet consectetur adipisicing elit. Cum verit atis assum enda maiores
                                                eos ducimus ullam accusamus vitae beatae quas in.</p>
                                            <a href="shop-left-sidebar.html" className="btn style1" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={700}> Shop Now</a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="hero-img-wrap" data-speed="0.10" data-revert="true">
                                            <img src="assets/img/hero/hero-slider-2.png" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slide-item">
                            <div className="container-fluid">
                                <span className="hero-promotext">HEADPHONES</span>
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="hero-content">
                                            <span data-aos="fade-right" data-aos-duration={1200} data-aos-delay={100}>HOT
                                                COLLECTION</span>
                                            <h1 data-aos="fade-right" data-aos-duration={1200} data-aos-delay={300}>Pro DJ
                                                Headphone With Stereo Mood</h1>
                                            <p data-aos="fade-right" data-aos-duration={1200} data-aos-delay={500}>Lorem ipsum
                                                dolor sit amet consectetur adipisicing elit. Cum verit atis assum enda maiores
                                                eos ducimus ullam accusamus vitae beatae quas in.</p>
                                            <a href="shop-left-sidebar.html" className="btn style1" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={700}> Shop Now</a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="hero-img-wrap" data-speed="0.10" data-revert="true">
                                            <img src="assets/img/hero/hero-slider-3.png" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="feature-wrap pt-100 pb-75">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={100}>
                                <div className="feature-card style1">
                                    <span className="feature-icon">
                                        <img src="assets/img/shape/feature-shape.png" alt="Image" />
                                        <i className="flaticon-volume" />
                                    </span>
                                    <div className="feature-text">
                                        <h3>Clear Sound Performance</h3>
                                        <p>Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis bibend
                                            sit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={200}>
                                <div className="feature-card style1">
                                    <span className="feature-icon">
                                        <img src="assets/img/shape/feature-shape.png" alt="Image" />
                                        <i className="flaticon-touch-screen" />
                                    </span>
                                    <div className="feature-text">
                                        <h3>Touch Sensitive Trackpad</h3>
                                        <p>Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis bibend
                                            sit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={300}>
                                <div className="feature-card style1">
                                    <span className="feature-icon">
                                        <img src="assets/img/shape/feature-shape.png" alt="Image" />
                                        <i className="flaticon-headphones" />
                                    </span>
                                    <div className="feature-text">
                                        <h3>Comfortable To Wear</h3>
                                        <p>Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis bibend
                                            sit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="about-wrap style1 pb-100">
                    <span className="section-text">ABOUT US</span>
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
                                <div className="about-img-wrap" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={200}>
                                    <img src="assets/img/about/about-img-5.png" alt="Image" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1">
                                <div className="about-content" data-aos="fade-left" data-aos-duration={1200} data-aos-delay={200}>
                                    <div className="content-title style1">
                                        <span>ABOUT US</span>
                                        <h2>We’ve Best Quality Products With Best Colections</h2>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuse antium lorem
                                            sit totam rem aperiam, eaque ipsa quae ab illution inventore veritatis quasi archi.
                                        </p>
                                    </div>
                                    <div className="feature-item-wrap style1">
                                        <div className="feature-item">
                                            <div className="feature-icon">
                                                <i className="flaticon-audio-waves" />
                                            </div>
                                            <div className="feature-text">
                                                <h3>Enjoy Your Own Audio Language</h3>
                                                <p>Vestibulum ac diam sit amet quam vehicula elemen tum sed sit amet dui
                                                    praesent sapien pellen tesque .</p>
                                            </div>
                                        </div>
                                        <div className="feature-item">
                                            <div className="feature-icon">
                                                <i className="flaticon-volume-1" />
                                            </div>
                                            <div className="feature-text">
                                                <h3>Feel The Shape Of Comfort</h3>
                                                <p>Vestibulum ac diam sit amet quam vehicula elemen tum sed sit amet dui
                                                    praesent sapien pellen tesque.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="about.html" className="btn style1">More About Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="product-wrap bg-athens pt-100 pb-75">
                    <div className="container">
                        <div className="section-title style1 text-center mb-40">
                            <span>HOT COLLECTION</span>
                            <h2>Browse Our Top Products</h2>
                        </div>
                        <div className="product-slider-one owl-carousel">
                            <div className="product-card style1">
                                <div className="product-img bg-athens">
                                    <img src="assets/img/products/product-1.png" alt="image" />
                                    <span className="promo-text">Sale</span>
                                    <ul className="product-option list-style">
                                        <li><button type="button" data-bs-toggle="modal" data-bs-target="#product-modal"><i className="ri-eye-line" /></button></li>
                                        <li><a href="cart.html"><i className="ri-shopping-cart-2-line" /></a></li>
                                        <li><a href="wishlist.html"><i className="ri-heart-line" /></a></li>
                                    </ul>
                                </div>
                                <div className="product-info">
                                    <ul className="ratings list-style">
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star-2" /></li>
                                        <li><i className="flaticon-star-2" /></li>
                                    </ul>
                                    <h3><a href="shop-details.html">Over-ear Headphones</a></h3>
                                    <p className="product-price">$28.00 <span className="discount">$50.00</span></p>
                                </div>
                            </div>
                            <div className="product-card style1">
                                <div className="product-img bg-athens">
                                    <img src="assets/img/products/product-2.png" alt="image" />
                                    <ul className="product-option list-style">
                                        <li><button type="button" data-bs-toggle="modal" data-bs-target="#product-modal"><i className="ri-eye-line" /></button></li>
                                        <li><a href="cart.html"><i className="ri-shopping-cart-2-line" /></a></li>
                                        <li><a href="wishlist.html"><i className="ri-heart-line" /></a></li>
                                    </ul>
                                </div>
                                <div className="product-info">
                                    <ul className="ratings list-style">
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star-2" /></li>
                                        <li><i className="flaticon-star-2" /></li>
                                    </ul>
                                    <h3><a href="shop-details.html">Wireless Headphones</a></h3>
                                    <p className="product-price">$38.00 <span className="discount">$40.00</span></p>
                                </div>
                            </div>
                            <div className="product-card style1">
                                <div className="product-img bg-athens">
                                    <span className="promo-text">30% off</span>
                                    <img src="assets/img/products/product-3.png" alt="image" />
                                    <ul className="product-option list-style">
                                        <li><button type="button" data-bs-toggle="modal" data-bs-target="#product-modal"><i className="ri-eye-line" /></button></li>
                                        <li><a href="cart.html"><i className="ri-shopping-cart-2-line" /></a></li>
                                        <li><a href="wishlist.html"><i className="ri-heart-line" /></a></li>
                                    </ul>
                                </div>
                                <div className="product-info">
                                    <ul className="ratings list-style">
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star-2" /></li>
                                        <li><i className="flaticon-star-2" /></li>
                                    </ul>
                                    <h3><a href="shop-details.html">In-ear Headphones</a></h3>
                                    <p className="product-price">$48.00 </p>
                                </div>
                            </div>
                            <div className="product-card style1">
                                <div className="product-img bg-athens">
                                    <img src="assets/img/products/product-4.png" alt="image" />
                                    <ul className="product-option list-style">
                                        <li><button type="button" data-bs-toggle="modal" data-bs-target="#product-modal"><i className="ri-eye-line" /></button></li>
                                        <li><a href="cart.html"><i className="ri-shopping-cart-2-line" /></a></li>
                                        <li><a href="wishlist.html"><i className="ri-heart-line" /></a></li>
                                    </ul>
                                </div>
                                <div className="product-info">
                                    <ul className="ratings list-style">
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star-2" /></li>
                                        <li><i className="flaticon-star-2" /></li>
                                    </ul>
                                    <h3><a href="shop-details.html">JBL Headphones</a></h3>
                                    <p className="product-price">$58.00 <span className="discount">$80.00</span></p>
                                </div>
                            </div>
                            <div className="product-card style1">
                                <div className="product-img bg-athens">
                                    <span className="promo-text">New</span>
                                    <img src="assets/img/products/product-5.png" alt="image" />
                                    <ul className="product-option list-style">
                                        <li><button type="button" data-bs-toggle="modal" data-bs-target="#product-modal"><i className="ri-eye-line" /></button></li>
                                        <li><a href="cart.html"><i className="ri-shopping-cart-2-line" /></a></li>
                                        <li><a href="wishlist.html"><i className="ri-heart-line" /></a></li>
                                    </ul>
                                </div>
                                <div className="product-info">
                                    <ul className="ratings list-style">
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star-2" /></li>
                                        <li><i className="flaticon-star-2" /></li>
                                    </ul>
                                    <h3><a href="shop-details.html">Vivo YH-10</a></h3>
                                    <p className="product-price">$48.00 </p>
                                </div>
                            </div>
                            <div className="product-card style1">
                                <div className="product-img bg-athens">
                                    <img src="assets/img/products/product-6.png" alt="image" />
                                    <ul className="product-option list-style">
                                        <li><button type="button" data-bs-toggle="modal" data-bs-target="#product-modal"><i className="ri-eye-line" /></button></li>
                                        <li><a href="cart.html"><i className="ri-shopping-cart-2-line" /></a></li>
                                        <li><a href="wishlist.html"><i className="ri-heart-line" /></a></li>
                                    </ul>
                                </div>
                                <div className="product-info">
                                    <ul className="ratings list-style">
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star" /></li>
                                        <li><i className="flaticon-star-2" /></li>
                                        <li><i className="flaticon-star-2" /></li>
                                    </ul>
                                    <h3><a href="shop-details.html">Sunshine XLX</a></h3>
                                    <p className="product-price">$58.00 <span className="discount">$80.00</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="partner-wrap style1">
                    <div className="container ">
                        <div className="partner-slider-one owl-carousel">
                            <div className="partner-item">
                                <img src="assets/img/partner/partner-9.png" alt="Image" />
                            </div>
                            <div className="partner-item">
                                <img src="assets/img/partner/partner-10.png" alt="Image" />
                            </div>
                            <div className="partner-item">
                                <img src="assets/img/partner/partner-11.png" alt="Image" />
                            </div>
                            <div className="partner-item">
                                <img src="assets/img/partner/partner-12.png" alt="Image" />
                            </div>
                            <div className="partner-item">
                                <img src="assets/img/partner/partner-13.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="testimonial-wrap pt-100 pb-75">
                    <div className="container">
                        <div className="section-title style1 text-center mb-40">
                            <span>TESTIMONIALS</span>
                            <h2>What People Say About Us</h2>
                        </div>
                        <div className="testimonial-slider-one owl-carousel">
                            <div className="testimonial-card style1">
                                <ul className="ratings list-style">
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                </ul>
                                <h3 className="promo-text">Full Enjoyable!</h3>
                                <p className="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur delni vel
                                    quam aliqous earadi umiotion sit explibom dolor eme.</p>
                                <div className="client-info-wrap">
                                    <div className="client-img">
                                        <img src="assets/img/testimonials/client-4.jpg" alt="Image" />
                                    </div>
                                    <div className="client-info">
                                        <h4>Harry Jackson</h4>
                                        <span>Enterpreneur</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card style1">
                                <ul className="ratings list-style">
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                </ul>
                                <h3 className="promo-text">In Love With This!</h3>
                                <p className="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur delni vel
                                    quam aliqous earadi umiotion sit explibom dolor eme.</p>
                                <div className="client-info-wrap">
                                    <div className="client-img">
                                        <img src="assets/img/testimonials/client-5.jpg" alt="Image" />
                                    </div>
                                    <div className="client-info">
                                        <h4>Chris Haris</h4>
                                        <span>MD, ITec</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card style1">
                                <ul className="ratings list-style">
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                </ul>
                                <h3 className="promo-text">Can't Stop Listening!</h3>
                                <p className="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur delni vel
                                    quam aliqous earadi umiotion sit explibom dolor eme.</p>
                                <div className="client-info-wrap">
                                    <div className="client-img">
                                        <img src="assets/img/testimonials/client-6.jpg" alt="Image" />
                                    </div>
                                    <div className="client-info">
                                        <h4>Anthony Mascar</h4>
                                        <span>Enterpreneur</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card style1">
                                <ul className="ratings list-style">
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                </ul>
                                <h3 className="promo-text">Everything Available!</h3>
                                <p className="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur delni vel
                                    quam aliqous earadi umiotion sit explibom dolor eme.</p>
                                <div className="client-info-wrap">
                                    <div className="client-img">
                                        <img src="assets/img/testimonials/client-1.jpg" alt="Image" />
                                    </div>
                                    <div className="client-info">
                                        <h4>Jim Morison</h4>
                                        <span>Director, BAT</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card style1">
                                <ul className="ratings list-style">
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                </ul>
                                <h3 className="promo-text">Looking Good!</h3>
                                <p className="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur delni vel
                                    quam aliqous earadi umiotion sit explibom dolor eme.</p>
                                <div className="client-info-wrap">
                                    <div className="client-img">
                                        <img src="assets/img/testimonials/client-2.jpg" alt="Image" />
                                    </div>
                                    <div className="client-info">
                                        <h4>Alex Cruis</h4>
                                        <span>CEO, IBAC</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card style1">
                                <ul className="ratings list-style">
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                </ul>
                                <h3 className="promo-text">Awesome Features</h3>
                                <p className="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur delni vel
                                    quam aliqous earadi umiotion sit explibom dolor eme.</p>
                                <div className="client-info-wrap">
                                    <div className="client-img">
                                        <img src="assets/img/testimonials/client-3.jpg" alt="Image" />
                                    </div>
                                    <div className="client-info">
                                        <h4>Tom Haris</h4>
                                        <span>Engineer, Olleo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="promo-wrap  pb-75">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={100}>
                                <div className="feature-card style3">
                                    <div className="feature-icon">
                                        <img src="assets/img/shape/feature-shape.png" alt="Image" />
                                        <i className="flaticon-delivery" />
                                    </div>
                                    <div className="feature-text">
                                        <h3>Free Shipping</h3>
                                        <p>There are many variations of lorem Ipsum available.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={200}>
                                <div className="feature-card style3">
                                    <div className="feature-icon">
                                        <img src="assets/img/shape/feature-shape.png" alt="Image" />
                                        <i className="flaticon-24-hour-clock" />
                                    </div>
                                    <div className="feature-text">
                                        <h3>Support 24/7</h3>
                                        <p>There are many variations of lorem Ipsum available.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={300}>
                                <div className="feature-card style3">
                                    <div className="feature-icon">
                                        <img src="assets/img/shape/feature-shape.png" alt="Image" />
                                        <i className="flaticon-return" />
                                    </div>
                                    <div className="feature-text">
                                        <h3>7 Days Return</h3>
                                        <p>There are many variations of lorem Ipsum available.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={400}>
                                <div className="feature-card style3">
                                    <div className="feature-icon">
                                        <img src="assets/img/shape/feature-shape.png" alt="Image" />
                                        <i className="flaticon-credit-card" />
                                    </div>
                                    <div className="feature-text">
                                        <h3>Secured Payment</h3>
                                        <p>There are many variations of lorem Ipsum available.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="offer-wrap style1 bg-albastor ptb-100">
                    <span className="offer-promo-text">OFFER</span>
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-lg-6">
                                <div className="offer-content">
                                    <div className="content-title style1 mb-25">
                                        <span>SPECIAL OFFER</span>
                                        <h2>Discount 50% On All Wireless Model Product</h2>
                                    </div>
                                    <a href="shop-left-sidebar.html" className="btn style1">Shop Now</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="offer-img-wrap" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={400}>
                                    <img src="assets/img/offer-img-1.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="product-feature-wrap ptb-100 td-aztech">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                                <div className="section-title style1 text-center mb-40">
                                    <span>SPECIFICATION</span>
                                    <h2>Product Specification</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-xl-4">
                                <div className="feature-item-wrap style4">
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <i className="flaticon-wifi" />
                                        </div>
                                        <div className="feature-text">
                                            <h3>Wireless</h3>
                                            <p>Nisl suscipit adipiscing bibendum est tempus imperdiet nulla malesuada.</p>
                                        </div>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <i className="flaticon-headphone" />
                                        </div>
                                        <div className="feature-text">
                                            <h3>Perfect Sound Quality</h3>
                                            <p>Nisl suscipit adipiscing bibendum est tempus imperdiet nulla malesuada.</p>
                                        </div>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <i className="flaticon-microphone" />
                                        </div>
                                        <div className="feature-text">
                                            <h3>Awsome Microphone</h3>
                                            <p>Nisl suscipit adipiscing bibendum est tempus imperdiet nulla malesuada.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="featured-product-img bg-athens">
                                    <img src="assets/img/products/single-product-1.png" alt="Image" />
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="feature-item-wrap style4">
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <i className="flaticon-sound" />
                                        </div>
                                        <div className="feature-text">
                                            <h3>Noise Cancelling</h3>
                                            <p>Nisl suscipit adipiscing bibendum est tempus imperdiet nulla malesuada.</p>
                                        </div>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <i className="flaticon-bluetooth" />
                                        </div>
                                        <div className="feature-text">
                                            <h3>Bluetooth</h3>
                                            <p>Nisl suscipit adipiscing bibendum est tempus imperdiet nulla malesuada.</p>
                                        </div>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <i className="flaticon-sound-control" />
                                        </div>
                                        <div className="feature-text">
                                            <h3>Easy To Control</h3>
                                            <p>Nisl suscipit adipiscing bibendum est tempus imperdiet nulla malesuada.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-wrap  pb-75 dpt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                                <div className="section-title style1 text-center mb-40">
                                    <span>LATEST NEWS</span>
                                    <h2>Reading Our Blog Content</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={100}>
                                <div className="blog-card style1">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog-1.jpg" alt="Image" />
                                    </div>
                                    <div className="blog-info">
                                        <ul className="blog-metainfo  list-style">
                                            <li><i className="flaticon-user" /><a href="posts-by-author.html">Admin</a></li>
                                            <li><i className="flaticon-bubble-chat" />No Comment</li>
                                            <li><i className="flaticon-calendar" /><a href="posts-by-date.html">01 Nov, 2021</a>
                                            </li>
                                        </ul>
                                        <h3><a href="blog-details-right-sidebar.html">Augmented Headphones</a></h3>
                                        <p>White in eu mi bibendum neque egestas set cong tincidunt nunc pulvinar sapien</p>
                                        <a href="blog-details-right-sidebar.html" className="link style1">Read More
                                            <i className="flaticon-right-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={200}>
                                <div className="blog-card style1">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog-2.jpg" alt="Image" />
                                    </div>
                                    <div className="blog-info">
                                        <ul className="blog-metainfo  list-style">
                                            <li><i className="flaticon-user" /><a href="posts-by-author.html">Admin</a></li>
                                            <li><i className="flaticon-bubble-chat" />No Comment</li>
                                            <li><i className="flaticon-calendar" /><a href="posts-by-date.html">22 Oct, 2021</a>
                                            </li>
                                        </ul>
                                        <h3><a href="blog-details-right-sidebar.html">Authentic, Engaging Sound</a></h3>
                                        <p>White in eu mi bibendum neque egestas set cong tincidunt nunc pulvinar sapien</p>
                                        <a href="blog-details-right-sidebar.html" className="link style1">Read More
                                            <i className="flaticon-right-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={300}>
                                <div className="blog-card style1">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog-3.jpg" alt="Image" />
                                    </div>
                                    <div className="blog-info">
                                        <ul className="blog-metainfo  list-style">
                                            <li><i className="flaticon-user" /><a href="posts-by-author.html">Admin</a></li>
                                            <li><i className="flaticon-bubble-chat" />No Comment</li>
                                            <li><i className="flaticon-calendar" /><a href="posts-by-date.html">12 Sep, 2021</a>
                                            </li>
                                        </ul>
                                        <h3><a href="blog-details-right-sidebar.html">User Ratings Confirmation</a></h3>
                                        <p>White in eu mi bibendum neque egestas set cong tincidunt nunc pulvinar sapien</p>
                                        <a href="blog-details-right-sidebar.html" className="link style1">Read More
                                            <i className="flaticon-right-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="newsletter-wrap">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="newsletter-title style1">
                                    <h2>Subscribe Our Newsletter</h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form action="#" className="newsletter-form">
                                    <input type="email" placeholder="Enter Your Email Address" />
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer-wrap bg-mine-shaft">
                    <div className="container">
                        <div className="row pt-100 pb-75">
                            <div className="col-xl-7 col-lg-7 col-md-6 col-sm-6 pe-xl-5">
                                <div className="footer-widget">
                                    <a href="index.html" className="footer-logo">
                                        <img src="assets/img/logo-white.png" alt="Image" />
                                    </a>
                                    <p className="comp-desc">
                                        Lorem ipsum dolor sit amet consec tetur adisoom isotope elit eiusmod temporum incidunt
                                        labore dolore magna aliqu core tetur adip iscing eliteous sedun amet adisoom isotope.
                                    </p>
                                    <div className="social-link">
                                        <h6>Follow Us:</h6>
                                        <ul className="social-profile list-style style3">
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
                            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h3 className="footer-widget-title">Get In Touch</h3>
                                    <ul className="contact-info list-style">
                                        <li>
                                            <i className="flaticon-pin" />
                                            <h6>Location</h6>
                                            <p>2967 Sunrise Street, New York</p>
                                        </li>
                                        <li>
                                            <i className="flaticon-email-1" />
                                            <h6>Email</h6>
                                            <a href="mailto:demo@gmail.com"><span className="__cf_email__">demo@gmail.com</span></a>
                                        </li>
                                        <li>
                                            <i className="flaticon-call" />
                                            <h6>Phone</h6>
                                            <a href="tel:13454567877">+1-3454-5678-77</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="copyright-text">
                        <i className="ri-copyright-line" />
                        <span>eKom</span>. All Rights Reserved By <a href="https://hibootstrap.com/" target="_blank">HiBootstrap</a>
                    </p>
                </footer>
            </div>
            <a href="javascript:void(0)" className="back-to-top bounce"><i className="ri-arrow-up-s-line" /></a>
            <div className="modal fade" id="product-modal" tabIndex={-1} role="dialog" aria-labelledby="product-modal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="ri-close-line" />
                            </button>
                        </div>
                        <div className="product-details-wrap">
                            <div className="container">
                                <div className="row gx-5 ">
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="single-product-gallery">
                                            <div className="swiper-container single-product-thumbs">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide single-product-thumb bg-albastor">
                                                        <img src="assets/img/products/product-1.png" alt="Image" />
                                                    </div>
                                                    <div className="swiper-slide single-product-thumb bg-albastor">
                                                        <img src="assets/img/products/product-2.png" alt="Image" />
                                                    </div>
                                                    <div className="swiper-slide single-product-thumb bg-albastor">
                                                        <img src="assets/img/products/product-3.png" alt="Image" />
                                                    </div>
                                                    <div className="swiper-slide single-product-thumb bg-albastor">
                                                        <img src="assets/img/products/product-4.png" alt="Image" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-container single-product-slider">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide single-product-item">
                                                        <img src="assets/img/products/product-1.png" alt="Image" />
                                                    </div>
                                                    <div className="swiper-slide single-product-item">
                                                        <img src="assets/img/products/product-2.png" alt="Image" />
                                                    </div>
                                                    <div className="swiper-slide single-product-item">
                                                        <img src="assets/img/products/product-3.png" alt="Image" />
                                                    </div>
                                                    <div className="swiper-slide single-product-item">
                                                        <img src="assets/img/products/product-4.png" alt="Image" />
                                                    </div>
                                                </div>
                                                <div className="swiper-button-next"> <i className="flaticon-right-arrow" /></div>
                                                <div className="swiper-button-prev"><i className="flaticon-left-arrow-1" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5">
                                        <div className="single-product-details">
                                            <div className="single-product-title">
                                                <h2>Over-Ear Headphone</h2>
                                                <h3><span>$120</span> <span className="discount">$200</span></h3>
                                                <div className="ratings">
                                                    <ul className="list-style">
                                                        <li><i className="ri-star-fill" /></li>
                                                        <li><i className="ri-star-fill" /></li>
                                                        <li><i className="ri-star-fill" /></li>
                                                        <li><i className="ri-star-fill" /></li>
                                                        <li><i className="ri-star-fill" /></li>
                                                    </ul>
                                                    <span>(12 rating)</span>
                                                </div>
                                            </div>
                                            <p className="single-product-desc">
                                                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Ipsum non facilis
                                                corporis modi consequatur. Iure perferendis dicta illum deleniti veritatis vero
                                                tempora maxime ducimus quaerat, iusto omnis magni doloribus. Repellat
                                                exercitationem odio amet sit.
                                            </p>
                                            <div className="product-more-option">
                                                <div className="product-more-option-item">
                                                    <h5>Category :</h5>
                                                    <a href="shop-left-sidebar.html">Earrings</a>
                                                </div>
                                                <div className="product-more-option-item">
                                                    <h5>Product Code :</h5>
                                                    <span>AE-009</span>
                                                </div>
                                                <div className="product-more-option-item">
                                                    <h5>Quantity:</h5>
                                                    <div className="product-quantity">
                                                        <div className="qtySelector">
                                                            <span className="decreaseQty">
                                                                <i className="ri-subtract-line" />
                                                            </span>
                                                            <input type="text" className="qtyValue" defaultValue={1} />
                                                            <span className="increaseQty">
                                                                <i className="ri-add-line" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-more-option-item">
                                                    <h5>Availability :</h5>
                                                    <span>In Stock</span>
                                                </div>
                                            </div>
                                            <div className="single-product-option">
                                                <a href="cart.html" className="btn style1">Add To Cart </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="modal fade" id="modal-subscribe" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
              <div class="modal-header border-0">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                      <i class="ri-close-line"></i>
                  </button>
              </div>
              <div class="modal-body">
                  <div class="row align-items-center gx-5">
                      <div class="col-sm-6 col-lg-6">
                          <div class="subscribe-bg bg-f">
                          </div>
                      </div>
                      <div class="col-sm-6 col-lg-6">
                          <div class="subscribe-content">
                              <h2>Subscribe Newsletter</h2>
                              <p>Subscribe our newsletter to get our updated news</p>
                              <form class="newsletter-form" data-toggle="validator">
                                  <input type="email" class="form-control" placeholder="Enter Your Email" name="EMAIL"
                                      required autocomplete="off">
                                  <button class="btn style1" type="submit">
                                      Subscribe
                                  </button>
                                  <div class="inner-check mt-30">
                                      <div class="checkbox style2">
                                          <input type="checkbox" id="test_3">
                                          <label for="test_3">Dont' show this popup again.</label>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div> */}
        </div>



    );
}

export default Home;