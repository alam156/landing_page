/*import React from "react";
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
                <p align ="justify" >/!*{props.data ? props.data.paragraph : "Loading..."}*!/</p>
                <h3>Why Choose Us?</h3>
                <div className="row">
                  <div className="col-sm-6">
                    <ul>
                      {props.data
                          ? props.data.Why.map((d, i) => (
                              <li key={`${d}-${i}`}>{d}</li>
                          ))
                          : "Loading..."}
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul>
                      {props.data
                          ? props.data.Why2.map((d, i) => (
                              <li key={`${d}-${i}`}>{d}</li>
                          ))
                          : "Loading..."}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../css/about.css';

export const About = () => {
  const [aboutData, setAboutData] = useState([]);
  const [aboutDescriptionData, setAboutDescriptionData] = useState([]);

  // Fetch About data
  const fetchAboutData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/about');
      setAboutData(response.data);
    } catch (error) {
      console.error("Error fetching About data:", error);
    }
  };

  // Fetch AboutDescription data for about_id 1 and 2
  const fetchAboutDescriptions = async (aboutId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/about_descriptions/about/${aboutId}`);
      setAboutDescriptionData((prevData) => [...prevData, { aboutId, descriptions: response.data }]);
    } catch (error) {
      console.error(`Error fetching AboutDescriptions for about_id ${aboutId}:`, error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchAboutData();
    fetchAboutDescriptions(1); // Fetch for about_id 1
    fetchAboutDescriptions(2); // Fetch for about_id 2
  }, []);

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
                <p >why you should use remote digital signature?</p>
                <h3>Why Choose Us?</h3>
                <div className="row">
                  {/* First div column for about_id 1 */}
                  <div className="col-sm-6">
                    <ul>
                      {aboutDescriptionData
                          .find((data) => data.aboutId === 1)
                          ?.descriptions.map((desc) => (
                              <li key={desc.id}>{desc.description}</li>
                          )) || "Loading..."}
                    </ul>
                  </div>

                  {/* Second div column for about_id 2 */}
                  <div className="col-sm-6">
                    <ul>
                      {aboutDescriptionData
                          .find((data) => data.aboutId === 2)
                          ?.descriptions.map((desc) => (
                              <li key={desc.id}>{desc.description}</li>
                          )) || "Loading..."}
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

/*import React from "react";
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
                          : "Loading..."}
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul>
                      {props.data
                          ? props.data.Why2.map((d, i) => (
                              <li key={`${d}-${i}`}>{d}</li>
                          ))
                          : "Loading..."}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};*/


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
