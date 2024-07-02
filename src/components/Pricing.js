import React from 'react'
import '../css/Pricing.css'

const Pricing = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="columns">
                    <ul className="price">
                        <li className="col-header">Class 0</li>
                        <li className="grey">Free</li>
                        <li>IDENTIFICATION</li>
                        <li>EMAIL</li>
                        <li>ENCRYPTION</li>
                        <li>CODE SIGNING</li>
                        <li>SSL SERVER AUTHENTICATION</li>
                        <li>SSL CLIENT AUTHENTICATION</li>
                        <li className="grey"><button className="button">Sign Up</button></li>
                    </ul>
                </div>

                <div className="columns">
                    <ul className="price">
                        <li className="col-header" style={{backgroundColor:'#37387a'}}>Class 2</li>
                        <li className="grey">BDT 500.00 - BDT 3,000.00/year</li>
                        <li>IDENTIFICATION</li>
                        <li>EMAIL</li>
                        <li>SSL CLIENT AUTHENTICATION</li>
                        <li className="grey"><button className="button">Sign Up</button></li>
                    </ul>
                </div>

                <div className="columns">
                    <ul className="price">
                        <li className="col-header">Class 3</li>
                        <li className="grey">BDT 3,000.00 - BDT 25,000.00/year</li>
                        <li>IDENTIFICATION</li>
                        <li>EMAIL</li>
                        <li>ENCRYPTION</li>
                        <li>CODE SIGNING</li>
                        <li>SSL SERVER AUTHENTICATION</li>
                        <li>SSL CLIENT AUTHENTICATION</li>
                        <li className="grey"><button className="button">Sign Up</button></li>
                    </ul>
                </div>

            </section>
        </React.Fragment>
    )
}

export default Pricing;