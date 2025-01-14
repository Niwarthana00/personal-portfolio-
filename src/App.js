// App.js
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { initGA, logPageView } from './analytics'; // Import from your analytics.js
import './App.css';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';


// Route tracker component
const RouteTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    logPageView(); 
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    initGA(); 
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <RouteTracker />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;