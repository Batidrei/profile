// src/App.jsx
import React, { useEffect } from 'react';
import './scss/main.scss';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

import { Home } from './components/pages/home';
import { Portfolio } from './components/pages/portfolio';
import { Navigation } from './components/organims/navigation';
import { Error404 } from './components/pages/error404';

const TRACKING_ID = "G-011EDV0ZP1";
ReactGA.initialize(TRACKING_ID);

// Componente para rastrear cambios de ruta
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname + location.hash;

    ReactGA.send({
      hitType: "pageview",
      page: pagePath,
      title: document.title
    });
  }, [location]);

  return null;
};

const App = () => (
  <Router>
    <PageTracker />
    <div className="back--in-down">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  </Router>
);

export default App;