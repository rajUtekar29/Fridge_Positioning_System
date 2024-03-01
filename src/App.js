import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FridgeList from './components/FridgeList';
import Sections from './components/Sections';
import Racks from './components/Racks';
import BoxGrid from './components/BoxGrid';
import Box from './components/Box';
import HomePage from './components/Homepage';
import './custom.css'

const App = () => {
  return (
    <>
    <Router>
      <div className="container">
        <h1>Freezer Management</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assign/:sampleId/fridgeList" element={<FridgeList />} />
          <Route path="/assign/:sampleId/fridge/:fridge" element={<Sections />} />
          <Route path="/assign/:sampleId/fridge/:fridge/section/:section" element={<Racks />} />
          <Route path="/assign/:sampleId/fridge/:fridge/section/:section/rack/:rack" element={<BoxGrid />} />
          <Route path="/assign/:sampleId/fridge/:fridge/section/:section/rack/:rack/box/:box" element={<Box />} />
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;
