import React from 'react';
import '../css/Message.css';
import NavBar from "./Navbar";
import BlackFooter from "./BlackFooterBootstrap.js";
import Footer from "./Footer";
import image1 from "../album/ed_bcc.jpg"
import backgroundImage from "../album/event_background.jpeg";


const Message = () => {
    return (
        <div>
            <div className="navbar-fixed"> <NavBar />
            </div>
            <div>
                <br/>
                <br/>
                <br/>
            </div>
            <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100px',display: 'flex',
                justifyContent: 'center',
                alignItems: 'center' }}>
                <h2>ED's Message</h2>
            </div>
            <div className="message-container">
                <div className="message-content">
                    <div className="message-image">
                        <img src={image1} alt="Chairman" />
                    </div>
                    <div className="message-text">
                        <h1 className="message-title">ED's Message</h1>
                            <p className="message-body">
                                Message need to input                            </p>
                            <p className="message-body">
                                Message need to input                            </p>
                            <p>
                                Message need to input                            </p>
                            <p>
                                Message need to input
                            </p>
                    </div>
                </div>
                <div className="message-divider"></div>
            </div>
            <BlackFooter />
            <Footer/>
        </div>

    );
};

export default Message;