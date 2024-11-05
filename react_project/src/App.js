// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hub from './pages/Hub'; // Main hub page with menu
import AboutUs from './pages/AboutUs';
import BOPrey from './pages/BOPrey';
import GameSchedule from './components/GameSchedule';
import News from './components/News';
import Powerhouses from './pages/Powerhouses';
import TheHistory from './pages/TheHistory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/birds-of-prey" element={<BOPrey />} />
        <Route path="/game-schedule" element={<GameSchedule />} />
        <Route path="/news" element={<News />} />
        <Route path="/powerhouses" element={<Powerhouses />} />
        <Route path="/the-history" element={<TheHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
