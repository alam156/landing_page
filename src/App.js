import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Portfolio from "./components/portfolio";
import PageLoader from "./components/PageLoader";

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path = "/" element={<PageLoader/>}></Route>
          </Routes>
      </Router>
  );
}

export default App;
