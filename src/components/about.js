import React from "react";
import '../css/about.css';

export const About = (props) => {
  return (
      <div id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                  src="./img/about.jpg"
                  className="img-fluid"
                  alt=""
              />
            </div>
            <div className="col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p align ="justify" >{props.data ? props.data.paragraph : "Loading..."}</p>
                <h3>Why Choose Us?</h3>
                <div className="row">
                  <div className="col-sm-6">
                    <ul>
                      {props.data
                          ? props.data.Why.map((d, i) => (
                              <li key={`${d}-${i}`}>{d}</li>
                          ))
                          : "Loading"}
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul>
                      {props.data
                          ? props.data.Why2.map((d, i) => (
                              <li key={`${d}-${i}`}>{d}</li>
                          ))
                          : "Loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};


/*
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-text">
            <h2>About Us</h2>
            <p>{props.data ? props.data.paragraph : "loading..."}</p>
            <h3>Why Choose Us?</h3>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                        ))
                        : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              {/!*<h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>*!/}
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
*/
