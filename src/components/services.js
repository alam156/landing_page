import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/services.css';
import { faCannabis, faCrown, faCubes, faCamera, faUserClock, faCalendar } from '@fortawesome/free-solid-svg-icons';
import Faster from '../album/Faster.png';
import HassleFree2 from '../album/HassleFree2.png';
import LegallyBinding from '../album/legallyBinding.png';

export const Services = (props) => {
  const iconLookup = {
    icon1: faCalendar,
    icon2: faCrown,
    icon3: faCubes,
    icon4: faCamera,
    icon5: faUserClock,
    icon6: faCannabis
  };

  const imageStyle = {
    width: '90%',
    height: '60vh',
    borderRadius: '10px',
    transition: 'transform 0.3s ease, filter 0.3s ease',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)',
    filter: 'brightness(1.1) saturate(1.2)',
    cursor: 'pointer'
  };

  return (
      <div id="services" className="text-center" style={{ paddingLeft: '3%', paddingRight: '3%' }}>
        <div className="container-fluid">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>
          <div className="container-fluid">
            <div className="row text-center">
              <div className="col-12 col-md-4 mb-4">
                <img
                    src={Faster}
                    style={imageStyle}
                    className="vibrant-hover"
                    alt="Image 1"
                />
              </div>
              <div className="col-12 col-md-4 mb-4">
                <img
                    src={HassleFree2}
                    style={imageStyle}
                    className="vibrant-hover"
                    alt="Image 2"
                />
              </div>
              <div className="col-12 col-md-4 mb-4">
                <img
                    src={LegallyBinding}
                    style={imageStyle}
                    className="vibrant-hover"
                    alt="Image 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};






/*import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faCannabis, faCrown, faCubes, faCamera, faUserClock, faCalendar } from '@fortawesome/free-solid-svg-icons';
import Faster from '../album/Faster.jpg';
import HassleFree from '../album/hasslefree.jpg';
import LegallyBinding from '../album/legallyBinding.jpg';

//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Services = (props) => {
  const iconLookup = {
    icon1: faCalendar,
    icon2: faCrown,
    icon3: faCubes,
    icon4: faCamera,
    icon5: faUserClock,
    icon6: faCannabis
  };
  return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              We provide Services for customer satisfaction.
            </p>
          </div>
          <div className="container">
            <div className="row text-center">
              <div className="col-12 col-md-4 mb-4">
                <img src={Faster} className="img-fluid rounded" alt="Image 1"/>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <img src={HassleFree} className="img-fluid rounded" alt="Image 2"/>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <img src={LegallyBinding} className="img-fluid rounded" alt="Image 3"/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};*/
{/*import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faCannabis, faCrown, faCubes, faCamera, faUserClock, faCalendar } from '@fortawesome/free-solid-svg-icons';
import Faster from '../album/Faster.jpg';
import HassleFree from '../album/hasslefree.jpg';
import LegallyBinding from '../album/legallyBinding.jpg';

//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Services = (props) => {
  const iconLookup = {
    icon1: faCalendar,
    icon2: faCrown,
    icon3: faCubes,
    icon4: faCamera,
    icon5: faUserClock,
    icon6: faCannabis
  };
  return (
      <div id="services" className="text-center">


        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              We provide Services for customer satisfaction.
            </p>
          </div>
          <div className="container">
            <div className="row text-center">
              <div className="col-12 col-md-4 mb-4">
                <img src={Faster} className="img-fluid rounded" alt="Image 1"/>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <img src={HassleFree} className="img-fluid rounded" alt="Image 2"/>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <img src={LegallyBinding} className="img-fluid rounded" alt="Image 3"/>
              </div>
            </div>
          </div>

        </div>
        {/*          <div className="row">
            {props.data
                ? props.data.map((d, i) => (
                    <div key={`${d.name}-${i}`} className="col-md-4">
                      {" "}
                      <FontAwesomeIcon icon={iconLookup[d.icon]} size="5x" className="text-light mb-3x"/>
                      <div className="service-desc">
                        <h3>{d.name}</h3>
                        <p>{d.text}</p>
                      </div>
                    </div>
                ))
                : "loading"}
          </div>
      </div>


  );
};*/}
//Runing code api
/*
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faCannabis, faCrown, faCubes, faCamera, faUserClock, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'; // Import Axios

export const Services = () => {
  const [data, setData] = useState([]); // State to hold service data
  const iconLookup = {
    icon1: faCalendar,
    icon2: faCrown,
    icon3: faCubes,
    icon4: faCamera,
    icon5: faUserClock,
    icon6: faCannabis
  };

  // Fetch data from the backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/services/find/all'); // Update with your backend API endpoint
        setData(response.data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              We provide services for customer satisfaction.
            </p>
          </div>
          <div className="row">
            {data.length > 0
                ? data.map((d, i) => (
                    <div key={`${d.name}-${i}`} className="col-md-4">
                      <FontAwesomeIcon icon={iconLookup[d.icon]} size="5x" className="text-light mb-3" />
                      <div className="service-desc">
                        <h3>{d.name}</h3>
                        <p>{d.text}</p>
                      </div>
                    </div>
                ))
                : "Loading..."}
          </div>
        </div>
      </div>
  );
};
*/


/*
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faCannabis, faCrown, faCubes, faCamera, faUserClock, faCalendar } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Services = (props) => {
  const iconLookup = {
    icon1:faCalendar,
    icon2: faCrown,
    icon3: faCubes,
    icon4: faCamera,
    icon5: faUserClock,
    icon6: faCannabis
  };
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We provide Services for customer satisfaction.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <FontAwesomeIcon icon={iconLookup[d.icon]} size="5x" className="text-light mb-3x" />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
*/
