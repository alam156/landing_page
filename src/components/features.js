import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faComments, faBullhorn, faAward, faBasketball,faPeopleGroup, faMagic} from '@fortawesome/free-solid-svg-icons';
import '../css/features.css';
const iconMapping = {
    "fa fa-comments-o": faComments,
    "fa fa-bullhorn": faBullhorn,
    "fa fa-basketball": faBasketball,
    "fa fa-award": faAward,
    "fa fa-group": faPeopleGroup,
    "fa fa-magic": faMagic
    // Add more mappings as needed
};
export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
          <div className="row">
              <div className="col-md-3">

              </div>
              <div className="col-md-6">
                  <h2>Features</h2>
              </div>
              <div className="col-md-3">

              </div>

          </div>
          <div className="row">
              {props.data ? (
                  props.data.map((d, i) => (
                      <div key={`${d.title}-${i}`} className="col-md-6 col-lg-4 mb-4">
                          <div className="card h-100 text-center border-0 shadow-sm p-4 custom-card">
                              <FontAwesomeIcon
                                  icon={iconMapping[d.icon]}
                                  size="3x"
                                  className="mb-3 custom-icon"
                              />
                              <h3 className="h5 font-weight-bold text-black">{d.title}</h3>
                              <p className="text-muted text-black-50" align ="justify">{d.text}</p>
                          </div>
                      </div>
                  ))
              ) : (
                  "Loading..."
              )}
          </div>
        {/*<div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-6 col-md-3">
                  {" "}
                  <FontAwesomeIcon icon={faComputer} style={{color: 'blue'}} size="3x"/>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>*/}
      </div>
    </div>
  );
};
