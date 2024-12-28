// App.js
import React from 'react';
import './App.css';
import Home from './pages/Home';
import ContactUs from './pages/Contactus';
import CallApi from './pages/CallApi';

function App() {
  return (
    <div className="App">
      <Home />
      <ContactUs />
      <CallApi/>
    </div>
  );
}

export default App;
