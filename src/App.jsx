// src/App.jsx
import React from 'react';
import './scss/main.scss';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './components/pages/home';
import { Navigation } from './components/organims/navigation';
// Asegúrate de exportarlo en PascalCase desde el archivo
// export const Error404 = () => ( ... )
import { error404 } from './components/pages/error404';

const App = () => (
  <Router>
    <div className="back--in-down">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<error404 />} />
      </Routes>
    </div>
  </Router>
);

export default App;