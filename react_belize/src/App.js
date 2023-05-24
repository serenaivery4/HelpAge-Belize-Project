import React from 'react';
import './App.css';

//react state handling
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
//tabs
import PatientSources from './pages/PatientSources';
import Homepage from './pages/homepage';



function App() { 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< Homepage />} />
          <Route path="patientSources" element={< PatientSources/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
