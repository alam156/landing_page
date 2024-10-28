import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PageLoader from "./components/PageLoader";
import FeatureComparison from "./components/FeatureComparison";
import Message from "./components/Message";
import AboutCA from "./components/AboutCA";

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path = "/" element={<PageLoader/>}></Route>
              <Route path = "/feature-comparison" element={<FeatureComparison/>} />
              <Route path = "/ed's-message" element={<Message/>} />
              <Route path = "/about-ca" element={<AboutCA/>} />
          </Routes>
      </Router>
  );
}

export default App;
