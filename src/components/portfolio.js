import React, { useState, useEffect } from "react";
import { Header } from "./header";
import { Services } from "./services";
import JsonData from "../jsons/data.json";
import SmoothScroll from "smooth-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'
//import BlackFooter from "BlackFooter";
import Footer from "./Footer";
import NavBar from "./Navbar";
//import AccordionFAQ from "../AccordionFAQ";
//import CarLogos from "./CarLogos";
import FeaturesJumbotron from "./FeaturesJumbotron";
import AccordionFAQ from "./AccordionFAQ";
import {Features} from "./features";
import BlackFooterBootstrap from "./BlackFooterBootstrap";
import SigningStepsCard from "./SigningStepsCard.js";
import PricingTable from "./PricingTable.js";
//import Accordion from "react-bootstrap/Accordion";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const Portfolio = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div>
            <div className="container">
                <NavBar/>
            </div>
            <br/>
            <br/>
            <Header data={landingPageData['Header']}/>
            {/*<div className="container grid-container">*/}
            {/*    <h2 className="mt-4 mb-4">Why Customer choose us?</h2>*/}
            {/*</div>*/}
            {/*<div className='row mb-5'>*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-md-1">*/}

            {/*            </div>*/}
            {/*            <div className="col-md-10">*/}
            {/*                <GridItems data={landingPageData['GridItems']}/>*/}
            {/*            </div>*/}
            {/*            <div className="col-md-1">*/}

            {/*            </div>*/}

            {/*        </div>*/}

            {/*    </div>*/}

            {/*</div>*/}
            <div className="container">
                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8">
                        <div className="section-title text-center">
                            <h2>QuickSign Signing Steps</h2>
                        </div>
                        <SigningStepsCard></SigningStepsCard>
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>

            </div>
            <Features data={landingPageData['Features']}/>
            {/*<div>*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-md-1">*/}

            {/*            </div>*/}
            {/*            <div className="col-md-10">*/}
            {/*                <About data={landingPageData['About']}/>*/}
            {/*            </div>*/}
            {/*            <div className="col-md-1">*/}

            {/*            </div>*/}

            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}
            <div>
                <Services data={landingPageData['Services']}/>
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
                                    title="Make Your Signature Digital with Photoshop | Photoshop Tutorial"
                                    frameBorder="0"
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
                <AccordionFAQ data={landingPageData['Faq']}/>
            </div>
            <div>
                <div className="container mt-5">
                    <PricingTable></PricingTable>
                    {/*<Pricing></Pricing>*/}
                </div>
            </div>

            {/*<div>
                <Flowchart/>
            </div>*/}
            {/*<div>*/}

            {/*</div>*/}
            {/*<div>*/}
            {/*    <Testimonials data={landingPageData['Testimonials']}/>*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*    <div className="section-title text-center">*/}
            {/*        <h2>Our Sponsors</h2>*/}
            {/*    </div>*/}
            {/*    <GridCarousel></GridCarousel>*/}
            {/*</div>*/}
            {/*<div className="section-title text-center">*/}
            {/*     <h2>Payment Methods</h2>*/}
            {/* </div>*/}

            {/*<div>
                <CarLogos />
            </div>*/}
            <BlackFooterBootstrap/>
            {/*<BlackFooter/>*/}
            <Footer/>
            {/*<Team data={landingPageData['Team']} />*/}
            {/*<Contact data={landingPageData['Contact']} />*/}
        </div>
    );
};
export default Portfolio;
