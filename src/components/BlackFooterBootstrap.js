import React from 'react';
import "../css/BlackFooterBootstrap.css"; // Ensure this path is correct

const BlackFooterBootstrap = () => {
    return (
        <footer className="bg-dark text-white py-2 footer">
            <div className="container">
                <h2 className="footer-header"></h2> {/* Optional Header */}
                <div className="row mt-4">
                    <div className="col-md-3 mb-2">
                        <h5 className="text-uppercase">Contact Info</h5>
                        <address className="mb-2">
                            E-14/X, ICT Tower, <br />
                            Agargaon, Dhaka-1207 <br />
                            Telephone: <a href="tel:+880255007184" className="text-white">+88-02-55007184 (ext 105)</a><br />
                            Fax: +88-02-55006791<br />
                            Email: <a href="mailto:support@bcc-ca.gov.bd" className="text-white">support@bcc-ca.gov.bd</a>
                        </address>
                    </div>

                    <div className="col-md-2 mb-2">
                        <h5 className="text-uppercase">Site Map</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white no-underline"><i className="fa fa-angle-right"></i> Home</a></li>
                            <li><a href="/about" className="text-white no-underline"><i className="fa fa-angle-right"></i> About</a></li>
                            <li><a href="/service-list" className="text-white no-underline"><i className="fa fa-angle-right"></i> Services</a></li>
                            <li><a href="/content/downloads" className="text-white no-underline"><i className="fa fa-angle-right"></i> Media</a></li>
                            <li><a href="/content/news" className="text-white no-underline"><i className="fa fa-angle-right"></i> News</a></li>
                            <li><a href="/contact" className="text-white no-underline"><i className="fa fa-angle-right"></i> Registration</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-2">
                        <h5 className="text-uppercase">Useful Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://play.google.com/store/apps/details?id=com.bcc.quickpass" className="text-white no-underline" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-right"></i> QuickPass App (Android)</a></li>
                            <li><a href="https://apps.apple.com/us/app/quickpass-bcc-ca/id1659265653?itsct=apps_box_badge&itscg=30200" className="text-white no-underline" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-right"></i> QuickPass App (iOS)</a></li>
                            <li><a href="https://quicksign.bcc-ca.gov.bd/" className="text-white no-underline" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-right"></i> QuickSign eSignature Portal</a></li>
                            <li><a href="http://www.cca.gov.bd/" className="text-white no-underline" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-right"></i> Controller of Certifying Authority</a></li>
                            <li><a href="https://digisigchecker.cca.gov.bd/" className="text-white no-underline" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-right"></i> Verify Digital Signature</a></li>
                            <li><a href="https://ndc.bcc.gov.bd/" className="text-white no-underline" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-right"></i> National Data Center Bangladesh</a></li>
                            <li><a href="http://www.cirt.gov.bd/" className="text-white no-underline" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-right"></i> BGD e-GOV CIRT</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-2">
                        <h5 className="text-uppercase">Contact Us</h5>
                        <form>
                            <div className="mb-2">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="query" className="form-label">Your Query</label>
                                <textarea className="form-control" id="query" rows="3" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default BlackFooterBootstrap;
