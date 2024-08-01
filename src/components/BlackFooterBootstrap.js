import React from 'react';
import "../css/BlackFooterBootstrap.css";

const BlackFooterBootstrap = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <h2 className="footer-header">Footer Header</h2> {/* Add header */}
                <div className="row mt-4">
                    <div className="col-md-2">
                        <h5>Column 1</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Link 1</a></li>
                            <li><a href="#" className="text-white">Link 2</a></li>
                            <li><a href="#" className="text-white">Link 3</a></li>
                            <li><a href="#" className="text-white">Link 4</a></li>
                            <li><a href="#" className="text-white">Link 5</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Column 2</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Link 1</a></li>
                            <li><a href="#" className="text-white">Link 2</a></li>
                            <li><a href="#" className="text-white">Link 3</a></li>
                            <li><a href="#" className="text-white">Link 4</a></li>
                            <li><a href="#" className="text-white">Link 5</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Column 3</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Link 1</a></li>
                            <li><a href="#" className="text-white">Link 2</a></li>
                            <li><a href="#" className="text-white">Link 3</a></li>
                            <li><a href="#" className="text-white">Link 4</a></li>
                            <li><a href="#" className="text-white">Link 5</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Column 4</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Link 1</a></li>
                            <li><a href="#" className="text-white">Link 2</a></li>
                            <li><a href="#" className="text-white">Link 3</a></li>
                            <li><a href="#" className="text-white">Link 4</a></li>
                            <li><a href="#" className="text-white">Link 5</a></li>
                        </ul>
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
