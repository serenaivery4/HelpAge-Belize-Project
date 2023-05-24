import React from 'react';


import navstyles from './../css/NavBar.module.css';
import HALogo from './../assets/images/HALogo.png';


import PatientStyles from './../css/patientSources.module.css';

import {Link} from "react-router-dom";


function PatientSources() {

  return (
    <div className="App">
      
      <div className={ navstyles.navbar }>
        
        <div className={ navstyles.tabBar }>
            <Link to="/">
                <img src={HALogo} alt="HelpAge logo" className={ navstyles.logo }></img>
            </Link>

            <Link to="/test">
              <button type= "button" className={navstyles.tabBtn}>About Us</button>
            </Link>
            <Link to="/test">
              <button type= "button" className={navstyles.tabBtn}>Our Services</button>
            </Link>
            <Link to="/patientSources">
              <button type= "button" className={navstyles.tabBtn}>Patient Sources</button>
            </Link>
            <Link to="/test">
              <button type= "button" className={navstyles.tabBtn}>Contact Us</button>
            </Link>
        </div>
    </div>

        <div className={PatientStyles.contentDiv}>
            <p className={PatientStyles.contentMessage}>
                Patient Stuff
            </p>
            
        </div>
    </div>
  );
}

export default PatientSources;

