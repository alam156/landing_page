/*
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import logoImage from './docu.png';
import "../css/Footer.css";

const Footer = () => {
    return (
        <footer className=" bg-light">

         {/!*   <Container>
                <Row>
                    <Col md={4}>
                        <img src={logoImage} alt="Res"/>
                    </Col>
                    <Col md={6}>
                        <h5>Quick Links</h5>
                         <ul className="list">
                            <li className="list-item"><a href="https://bcc.gov.bd/">Terms of Service</a></li>
                            <li className="list-item"><a href="https://bcc.gov.bd/">Privacy Policy</a></li>
                        </ul>
                         <div className="col-md-6 col-sm-6 padding-top-10">
                            <span>2024</span>
                            © Bangladesh Computer Council.
                            <br/>
                            <a href="javascript:;">Privacy Policy</a>
                            |
                            <a href="javascript:;">Terms of Service</a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h5>Follow Us</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="https://bcc.gov.bd/"><FaFacebook /></a></li>
                            <li className="list-inline-item"><a href="https://bcc.gov.bd/"><FaYoutube /></a></li>
                            <li className="list-inline-item"><a href="https://bcc.gov.bd/"><FaInstagram /></a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>*!/}
            {/!*<div className="text-center mt-4">
                <p className="footer-copyright">© 2024 Bangladesh Computer Council.</p>
            </div>*!/}
            {/!*<div className="text-center mt-4">
                <span>2024</span>
                © Bangladesh Computer Council.
                <br/>
                <a href="javascript:;">Privacy Policy</a>
                |
                <a href="javascript:;">Terms of Service</a>
            </div>*!/}
            <div className="text-center mt-4" >
                <span>2024</span>
                © Bangladesh Computer Council.
                <br/>
                <a href="javascript:;" className="no-underline">Privacy Policy</a> |
                <a href="javascript:;" className="no-underline">Terms of Service</a>
            </div>
        </footer>
    );
};

export default Footer;*/
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../css/Footer.css";

const Footer = () => {
    return (
        <footer className="footer-bg text-light">
            <Container>
                <Row className="text-center">
                    <Col>
                        <span className="footer-copyright">2024 © Bangladesh Computer Council.</span>
                        <br />
                        <a href="javascript:;" className="footer-link">Privacy Policy</a> |
                        <a href="javascript:;" className="footer-link">Terms of Service</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;




