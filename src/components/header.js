
import React, {useEffect, useState} from "react";
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

/*
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
  const [data, setData] = useState(null);  // Set initial state to null
  const [loading, setLoading] = useState(true);  // Add loading state

  useEffect(() => {
    fetch('http://localhost:8080/api/header/find/all')
        .then(response => response.json())
        .then(data => {
          setData(data[0]);  // Assuming you want the first header
          setLoading(false);  // Set loading to false when data is fetched
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);  // Set loading to false in case of error
        });
  }, []);

  return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 intro-text">
                  <h1>
                    {loading ? "Loading..." : data?.title}  {/!* Conditional rendering *!/}
                    <span></span>
                  </h1>
                  <p>{loading ? "Loading..." : data?.paragraph}</p>  {/!* Conditional rendering *!/}
                  <a
                      href="#features"
                      className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};*/
