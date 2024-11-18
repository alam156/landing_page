import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/services.css';
import Faster from '../album/Faster.png';
import HassleFree2 from '../album/HassleFree2.png';
import LegallyBinding from '../album/legallyBinding.png';

export const Services = (props) => {

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
                    alt=""
                />
              </div>
              <div className="col-12 col-md-4 mb-4">
                <img
                    src={HassleFree2}
                    style={imageStyle}
                    className="vibrant-hover"
                    alt=""
                />
              </div>
              <div className="col-12 col-md-4 mb-4">
                <img
                    src={LegallyBinding}
                    style={imageStyle}
                    className="vibrant-hover"
                    alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
