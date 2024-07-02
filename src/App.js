import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Portfolio from "./components/portfolio";

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path = "/portfolio" element={<Portfolio/>}></Route>
          </Routes>
      </Router>
  );
}

export default App;
