import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faAward, faMobileAlt, faSquare, faBaseball, faCloudSun, faSearch, faBasketball, faBarcode} from '@fortawesome/free-solid-svg-icons';

const FeaturesJumbotron = () => (
    <Row>
        <Col md={1}>

        </Col>
        <Col md={10}>
            <div className="jumbotron">
                {/*<h1>Features</h1>
                <p>Our product has the following features:</p>*/}
                <Row>
                    <Col md={4}>
                        <div>
                            <FontAwesomeIcon icon={faCube} size="3x" className="text-primary mb-3" />
                            <h3>Customizable</h3>
                            <p>Our product is highly customizable to meet your specific needs.</p>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div>
                            <FontAwesomeIcon icon={faAward} size="3x" className="text-primary mb-3" />
                            <h3>Cloud-based</h3>
                            <p>Our product is cloud-based, which means you can access it from anywhere.</p>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div>
                            <FontAwesomeIcon icon={faMobileAlt} size="3x" className="text-primary mb-3" />
                            <h3>Mobile-friendly</h3>
                            <p>Our product is mobile-friendly, which means you can use it on any device.</p>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div>
                            <FontAwesomeIcon icon={faSquare} size="3x" className="text-primary mb-3" />
                            <h3>Secured</h3>
                            <p>Our product is highly Secured to meet security.</p>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div>
                            <FontAwesomeIcon icon={faBaseball} size="3x" className="text-primary mb-3" />
                            <h3>Non-Repudiation</h3>
                            <p>Our product is non-repudiative.</p>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div>
                            <FontAwesomeIcon icon={faCloudSun} size="3x" className="text-primary mb-3" />
                            <h3>Optimized</h3>
                            <p>Our product is more optimized.</p>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div>
                            <FontAwesomeIcon icon={faSearch} size="3x" className="text-primary mb-3" />
                            <h3>2FA</h3>
                            <p>Our product follows two factor authentication.</p>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div>
                            <FontAwesomeIcon icon={faBarcode} size="3x" className="text-primary mb-3" />
                            <h3>e-KYC</h3>
                            <p>We follow eKYC based face recognition while registering.</p>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div>
                            <FontAwesomeIcon icon={faBasketball} size="3x" className="text-primary mb-3" />
                            <h3>Economical</h3>
                            <p>The cost of signing is more economical.</p>
                        </div>

                    </Col>
                </Row>
            </div>
        </Col>
        <Col md={1}>

        </Col>
    </Row>

);

export default FeaturesJumbotron;