import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import logoImage from './docu.png';
import "../css/Footer.css";

const Footer = () => {
    return (
        <footer className=" bg-light">
            <br/>
            <Container>
                <Row>
                    <Col md={4}>
                        <img src={logoImage} alt="Res"/>
                    </Col>
                    <Col md={4}>
                        <h5>Quick Links</h5>
                        <ul className="list">
                            <li className="list-item"><a href="https://bcc.gov.bd/">Terms of Service</a></li>
                            <li className="list-item"><a href="https://bcc.gov.bd/">Privacy Policy</a></li>
                        </ul>
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
            </Container>
            <div className="text-center mt-4">
                <p className="footer-copyright">© 2024 Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;