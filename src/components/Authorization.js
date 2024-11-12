import React, { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'
import Footer from "./Footer";
import NavBar from "./Navbar";
import BlackFooterBootstrap from "./BlackFooterBootstrap";
import JsonData from "../jsons/data.json";
import {SigningStepsAuthorization} from "./SigningStepsAuthorization.js";


export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const Authorization = () => {
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
            <br/>
            {/*<div>
                <CarLogos />
            </div>*/}
            <SigningStepsAuthorization data={landingPageData['SigningStepss']}/>
            <BlackFooterBootstrap/>
            {/*<BlackFooter/>*/}
            <Footer/>
            {/*<Team data={landingPageData['Team']} />*/}
            {/*<Contact data={landingPageData['Contact']} />*/}
        </div>
    );
};

export default Authorization;
