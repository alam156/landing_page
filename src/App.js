import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PageLoader from "./components/PageLoader";
import FeatureComparison from "./components/FeatureComparison";
import FaqPage from "./components/admin/FaqPage";
import WhyChoosePage from "./components/admin/WhyChoosePage";
import CharacteristicsPage from "./components/admin/CharacteristicsPage";
import CAServicesPage from "./components/admin/CAServicesPage";
import FeaturesPage from "./components/admin/FeaturesPage";
import PricingPage from "./components/admin/PricingPage";


const App = () => {
  return (
      <Router>
          <Routes>
              <Route path = "/" element={<PageLoader/>}></Route>
              <Route path = "/feature-comparison" element={<FeatureComparison/>} />
              <Route path = "/admin/faq_page" element={<FaqPage/>}></Route>
              <Route path="/admin/whychoose_page" element={<WhyChoosePage/>}></Route>
              <Route path="/admin/characteristics" element={<CharacteristicsPage/>}></Route>
              <Route path="/admin/services_page" element={<CAServicesPage/>}></Route>
              <Route path="/admin/features_page" element={<FeaturesPage/>}></Route>
              <Route path="/admin/pricing" element={<PricingPage />} />
          </Routes>
      </Router>
  );
}

export default App;
