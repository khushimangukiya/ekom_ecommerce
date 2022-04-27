import React from 'react';

function Footer(props) {
    return (
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

    );
}

export default Footer;