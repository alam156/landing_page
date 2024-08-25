import React, { useState, useEffect } from "react";
import { Header } from "./header";
import { About } from "./about";
import { Services } from "./services";
import { Testimonials } from "./testimonials";
import JsonData from "../jsons/data.json";
import SmoothScroll from "smooth-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'
//import BlackFooter from "BlackFooter";
import Footer from "./Footer";
import NavBar from "./Navbar";
//import AccordionFAQ from "../AccordionFAQ";
import SigningSteps from "./SigningSteps";
import CarLogos from "./CarLogos";
import FeaturesJumbotron from "./FeaturesJumbotron";
import GridItems from "./GridItems";
import GridCarousel from "./GridCarousel";
import Pricing from "./Pricing";
import AccordionFAQ from "./AccordionFAQ";
import {Features} from "./features";
import BlackFooterBootstrap from "./BlackFooterBootstrap";
import Flowchart from "./Flowchart";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const Portfolio = () => {
    const [landingPageData, setLandingPageData] = useState({});
    /*const plans = [
        {
            price: 'Free',
            title: 'Class 0',
            features: [
                'IDENTIFICATION',
                'EMAIL',
                'ENCRYPTION',
                'CODE SIGNING',
                'SSL SERVER AUTHENTICATION',
                'SSL CLIENT AUTHENTICATION'
            ],
        },
        {
            price: 'BDT 500.00 - BDT 2,000.00/year',
            title: 'Class 1',
            features: [
                'IDENTIFICATION',
                'EMAIL'
            ],
        },
        {
            price: 'BDT 500.00 - BDT 3,000.00/year',
            title: 'Class 2',
            features: [
                'IDENTIFICATION',
                'EMAIL',
                'SSL CLIENT AUTHENTICATION'
            ],
        },
        {
            price: 'BDT 3,000.00 - BDT 25,000.00/year',
            title: 'Class 3',
            features: [
                'IDENTIFICATION',
                'EMAIL',
                'ENCRYPTION',
                'CODE SIGNING',
                'SSL SERVER AUTHENTICATION',
                'SSL CLIENT AUTHENTICATION'
            ],
        }
    ];*/
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div>
            <div className="container">
                <NavBar />
            </div>
            <Header data={landingPageData['Header']} />
            <div className="container grid-container">
                <h2 className="mt-4 mb-4">Why Customer choose us?</h2>
            </div>
            <div className='row mb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">

                        </div>
                        <div className="col-md-10">
                            <GridItems />
                        </div>
                        <div className="col-md-1">

                        </div>

                    </div>

                </div>

            </div>
            <Features data={landingPageData['Features']} />
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">

                        </div>
                        <div className="col-md-10">
                            <About data={landingPageData['About']} />
                        </div>
                        <div className="col-md-1">

                        </div>

                    </div>

                </div>
            </div>
            <div>
                <Services data={landingPageData['Services']} />

            </div>

            {/*<Gallery data={landingPageData['Gallery']} />*/}

            <div>
                <div className="section-title text-center">
                    <h2>QuickSign Video Tutorial</h2>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-1">

                        </div>
                        <div className="ratio ratio-16x9">
                            <iframe width="640" height="360" src="https://www.youtube.com/embed/bhEvK-18PbQ"
                                    title="Make Your Signature Digital with Photoshop | Photoshop Tutorial" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            {/*<iframe src="https://www.youtube.com/embed/zpOULjyy-n8" title="Youtube Video"*/}
                            {/*        allowFullScreen></iframe>*/}
                        </div>
                        <div className="col-md-1">

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="section-title text-center">
                    <h2>Characteristics</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">

                        </div>
                        <div className="col-md-10">
                            <FeaturesJumbotron></FeaturesJumbotron>
                        </div>
                        <div className="col-md-1">

                        </div>

                    </div>

                </div>

            </div>
            <div>
                <div className="section-title text-center">
                    <h2>QuickSign Signing Steps</h2>
                </div>
                <SigningSteps></SigningSteps>
            </div>
            {/*<div>
                <Flowchart/>
            </div>*/}
            <div>
                <div className="section-title text-center">
                    <h2>QuickSign App Pricing</h2>
                </div>
                <div className="container mt-5">
                    {/*<Row>
                            {plans.map((plan, index) => (
                                <Col sm="3" key={index}>
                                    <PricingCard {...plan} />
                                </Col>
                            ))}
                        </Row>*/}
                    <Pricing></Pricing>
                </div>
            </div>
            <div>
                <Testimonials data={landingPageData['Testimonials']} />
            </div>
            <div>
                <AccordionFAQ data={landingPageData['Faq']}/>
            </div>
            <div>
                <div className="section-title text-center">
                    <h2>Our Sponsors</h2>
                </div>
                <GridCarousel></GridCarousel>
            </div>
            <div className="section-title text-center">
                <h2>Our Brands</h2>
            </div>
            <div>
                <CarLogos />
            </div>
            <BlackFooterBootstrap/>
            {/*<BlackFooter/>*/}
            <Footer/>
            {/*<Team data={landingPageData['Team']} />*/}
            {/*<Contact data={landingPageData['Contact']} />*/}
        </div>
    );
};

export default Portfolio;
