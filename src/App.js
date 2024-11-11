import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PageLoader from "./components/PageLoader";
import FeatureComparison from "./components/FeatureComparison";
import Message from "./components/Message";
import AboutCA from "./components/AboutCA";
import Registration from "./components/Registration.js";
import Authorization from "./components/Authorization.js";

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path = "/" element={<PageLoader/>}></Route>
              <Route path = "/feature-comparison" element={<FeatureComparison/>} />
              <Route path = "/ed's-message" element={<Message/>} />
              <Route path = "/about-ca" element={<AboutCA/>} />
              <Route path = "/registration-phase" element={<Registration/>} />
              <Route path = "/authorization-phase" element={<Authorization/>}/>
          </Routes>
      </Router>
  );
}

export default App;
