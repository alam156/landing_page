import React from 'react';
import "../css/BlackFooterBootstrap.css";

const BlackFooterBootstrap = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <h2 className="footer-header">Footer Header</h2> {/* Add header */}
                <div className="row mt-4">
                    <div className="col-md-3">

                        <h5>Contact Info</h5>
                        <address className="margin-bottom-10">
                            E-14/X, ICT Tower, <br/>
                            Agargaon, Dhaka-1207 <br/>
                            Telephone: +88-02-55007184 (ext 105) <br/>
                            Fax: +88-02-55006791 <br/>
                            Email: <a href="mailto:support@bcc-ca.gov.bd">support@bcc-ca.gov.bd</a>
                        </address>


                    {/*} <h5>Column 1</h5>*/}
                    {/*<ul className="list-unstyled">
                            <li><a href="https://bcc.gov.bd/" className="text-white">Link 1</a></li>
                            <li><a href="https://bcc.gov.bd/" className="text-white">Link 2</a></li>
                            <li><a href="https://bcc.gov.bd/" className="text-white">Link 3</a></li>
                            <li><a href="https://bcc.gov.bd/" className="text-white">Link 4</a></li>
                            <li><a href="https://bcc.gov.bd/" className="text-white">Link 5</a></li>
                        </ul>*/}
                </div>
                {/*<div className="col-md-2">
                        <h5>Column 2</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://bcc.gov.bd/" className="text-white">Link 1</a></li>
                            <li><a href="https://bcc.gov.bd/" className="text-white">Link 2</a></li>
                            <li><a href="https://bcc.gov.bd/" className="text-white">Link 3</a></li>
                            <li><a href="https://bcc.gov.bd/" className="text-white">Link 4</a></li>
                            <li><a href="https://bcc.gov.bd/" className="text-white">Link 5</a></li>
                        </ul>
                    </div>*/}
                    <div className="col-md-2">
                        <h5>Site Map</h5>
                        <ul className="list-unstyled">
                            <li>
                                <i className="fa fa-angle-right"></i>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right"></i>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right"></i>
                                <a href="/service-list">Services</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right"></i>
                                <a href="/content/downloads">Media</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right"></i>
                                <a href="/content/news">Contact</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right"></i>
                                <a href="/contact">Registration</a>
                            </li>

                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Useful links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <i className="fa fa-angle-right"></i>
                                <a href="https://play.google.com/store/apps/details?id=com.bcc.quickpass">QuickPass App
                                    (android)</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right"></i>
                                <a href="https://apps.apple.com/us/app/quickpass-bcc-ca/id1659265653?itsct=apps_box_badge&itscg=30200">QuickPass
                                    App (iOS)</a>
                            </li>

                            <li>
                                <i className="fa fa-angle-right"></i>
                                <a href="https://quicksign.bcc-ca.gov.bd/">QuickSign eSignature
                                    Portal</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right"></i>
                                <a href="http://www.cca.gov.bd/">Controller of Certifying Authority</a>
                            </li>

                            <li>
                                <i className="fa fa-angle-right"></i>
                                <a href="https://digisigchecker.cca.gov.bd/">Verify Digital
                                    Signature</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right"></i>
                                <a href="https://ndc.bcc.gov.bd/">National Data Center Bangladesh</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right"></i>
                                <a href="http://www.cirt.gov.bd/">BGD e-GOV CIRT</a>
                            </li>

                        </ul>

                        {/*<h5>Column 4</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://bcc.gov.bd/" className="text-white">Link 1</a></li>
                            <li><a href="https://bcc.gov.bd/" className="text-white">Link 2</a></li>
                            <li><a href="https://bcc.gov.bd/" className="text-white">Link 3</a></li>
                            <li><a href="https://bcc.gov.bd/" className="text-white">Link 4</a></li>
                            <li><a href="https://bcc.gov.bd/" className="text-white">Link 5</a></li>
                        </ul>*/}
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="query" className="form-label">Your Query</label>
                                <textarea className="form-control" id="query" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                {/*<div className="text-center mt-4">
                    <p className="footer-copyright">© 2024 Your Company Name. All rights reserved.</p>
                </div>*/}
            </div>
        </footer>
    );
}

export default BlackFooterBootstrap;
