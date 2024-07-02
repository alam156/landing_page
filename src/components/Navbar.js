import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/NavBar.css'
import Logo from  '../album/logo.png'
import Clock from "react-live-clock";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/"><img
                    src={Logo}
                    alt=""
                    className="img-fluid"
                    style={{ width: '50px', height: '35px' }}
                /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</Link>
                            <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h2 className="dropdown-header text-dark" style={{cursor: 'pointer'}}>
                                                About
                                                <i className="bi bi-chevron-down ms-2"></i>
                                            </h2>
                                            <hr className="dropdown-divider" />
                                            <li className="small-text"><Link className="dropdown-item " to="/about-ca">About QuickSign</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/service2">About BCC</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/ed-message">ED's Message</Link></li>
                                        </div>
                                        <div className="col-md-3">

                                        </div>
                                        <div className="col-md-3">

                                        </div>
                                        <div className="col-md-3">

                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
                            <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h2 className="dropdown-header text-dark" style={{cursor: 'pointer'}}>
                                                Why BCC CA?
                                                <i className="bi bi-chevron-down ms-2"></i>
                                            </h2>
                                            <hr className="dropdown-divider" />
                                            <li className="small-text"><Link className="dropdown-item " to="/feature-comparison">Feature Comparison</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/service2">Why Quicksign is Different?</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/service1">Digital Signature Benifits</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/service2">Who can benefit?</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/features">E-Sign Features</Link></li>
                                        </div>
                                        <div className="col-md-3">
                                            <h2 className="dropdown-header text-dark" style={{cursor: 'pointer'}}>
                                                How It works
                                                <i className="bi bi-chevron-down ms-2"></i>
                                            </h2>
                                            <hr className="dropdown-divider" />
                                            <li className="small-text"><Link className="dropdown-item" to="/portfolio">Quick tour</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/quick-tour">Our Services</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/service3">What are Electronic signature?</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/service4">What are digital Signature?</Link></li>
                                        </div>
                                        <div className="col-md-3">
                                            <h2 className="dropdown-header text-dark" style={{cursor: 'pointer'}}>
                                                Mechanisms
                                                <i className="bi bi-chevron-down ms-2"></i>
                                            </h2>
                                            <hr className="dropdown-divider" />
                                            <li className="small-text"><Link className="dropdown-item" to="/key-pair-generation">Key Pair Generation</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/service6">Certificate Creation</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/service5">Signing with Esign</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/faq">Global FAQ</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/faq1">Esign FAQ</Link></li>
                                        </div>
                                        <div className="col-md-3">
                                            <h2 className="dropdown-header text-dark" style={{cursor: 'pointer'}}>
                                                CA Services
                                                <i className="bi bi-chevron-down ms-2"></i>
                                            </h2>
                                            <hr className="dropdown-divider" />
                                            <li className="small-text"><Link className="dropdown-item" to="/service-description-1">Service 1</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/service-description-2">Service 2</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/service5">Signing with Esign</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/faq">Global FAQ</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/faq1">Esign FAQ</Link></li>
                                        </div>
                                        <div className="col-md-3">
                                            <h2 className="dropdown-header text-dark" style={{cursor: 'pointer'}}>
                                                Learn More
                                                <i className="bi bi-chevron-down ms-2"></i>
                                            </h2>
                                            <hr className="dropdown-divider" />
                                            <li className="small-text"><Link className="dropdown-item" to="/pricing-list">Pricing</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/service7">Basic Signatures</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/service8">Advanced Signatures</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/service8">Quick Signatures</Link></li>
                                        </div>
                                    </div>
                                </div>
                            </ul>


                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="MediaDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Media</Link>
                            <ul className="dropdown-menu" aria-labelledby="MediaDropdown">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h2 className="dropdown-header text-dark" style={{cursor: 'pointer'}}>
                                                Photos and Videos
                                                <i className="bi bi-chevron-down ms-2"></i>
                                            </h2>
                                            <hr className="dropdown-divider" />
                                            <li className="small-text"><Link className="dropdown-item " to="/photos">Photos</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/service2">Videos</Link></li>
                                        </div>
                                        <div className="col-md-3">
                                            <h2 className="dropdown-header text-dark" style={{cursor: 'pointer'}}>
                                                Blogs
                                                <i className="bi bi-chevron-down ms-2"></i>
                                            </h2>
                                            <hr className="dropdown-divider" />
                                            <li className="small-text"><Link className="dropdown-item " to="/blogs-cybersecurity">Cybersecurity Blogs</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/blogs-others">Other Blogs</Link></li>
                                        </div>
                                        <div className="col-md-3">
                                            <h2 className="dropdown-header text-dark" style={{cursor: 'pointer'}}>
                                                Current Events
                                                <i className="bi bi-chevron-down ms-2"></i>
                                            </h2>
                                            <hr className="dropdown-divider" />
                                            <li className="small-text"><Link className="dropdown-item " to="/events">Events</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/calendar">Event Calendar</Link></li>
                                        </div>
                                        <div className="col-md-3">
                                            <h2 className="dropdown-header text-dark" style={{cursor: 'pointer'}}>
                                                News
                                                <i className="bi bi-chevron-down ms-2"></i>
                                            </h2>
                                            <hr className="dropdown-divider" />
                                            <li className="small-text"><Link className="dropdown-item " to="/service-news">Latest News</Link></li>
                                            <li className="small-text"><Link className="dropdown-item " to="/news">All news</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/faq">FAQ</Link></li>
                                            <li className="small-text"><Link className="dropdown-item" to="/notes">Notice Board</Link></li>
                                            {/*<li className="small-text"><Link className="dropdown-item" to="/questions">Questions</Link></li>*/}
                                        </div>
                                    </div>
                                </div>


                            </ul>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/registration">Registration</Link></li>
                        <li className="nav-item"><Link className="nav-link" to=""><Clock
                            format={'HH:mm:ss'}
                            ticking={true}
                            timezone={'BST'} /></Link></li>
                        {/*<li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>*/}
                        {/*<li className="nav-item"><Link className="nav-link" to="/logout">Logout Refresh</Link></li>*/}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;