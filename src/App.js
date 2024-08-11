import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PageLoader from "./components/PageLoader";
import FeatureComparison from "./components/FeatureComparison";

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path = "/" element={<PageLoader/>}></Route>
              <Route path = "/feature-comparison" element={<FeatureComparison/>} />
          </Routes>
      </Router>
  );
}

export default App;
