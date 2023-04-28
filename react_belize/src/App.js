/* eslint-disable no-const-assign */
import React, { useState, useEffect } from 'react';
import HelpageLogo from './patientSources/images/HelpageLogo.png';
import PatientSources from './patientSources/PatientSources';
import HomePage from './homePage/HomePage';
import './App.css';

function App() {
  const [tab, setTab] = useState("homePage")

  return (
    <div className="App">
      <div className = "navBar">
        <img src={HelpageLogo} alt="HelpageLogo" className="logo" onClick={() => setTab("homePage")}/> 
        <button className="button" onClick={() => setTab("patientSources")}>
          Patient Sources
        </button>
      </div>
      <div>
        {tab==="homePage" && <HomePage/>}
        {tab === "patientSources" && <PatientSources/>}
      </div>
      
      
    </div>
  );
}

export default App;
