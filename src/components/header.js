import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-3">

              </div>
              <div className="col-md-6 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
              <div className="col-md-3">

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
