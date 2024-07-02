import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Portfolio from "./components/portfolio";

const App = () => {
    /*return (
        <div>
            <Portfolio />
        </div>
    );*/
  return (
      <Router>
          <Routes>
              <Route path = "/" element={<Portfolio/>}></Route>
          </Routes>
      </Router>
  );
}

export default App;
