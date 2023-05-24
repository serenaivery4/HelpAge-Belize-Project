import React from 'react';
import './../App.css';

//navbar css (global)
import navstyles from './../css/NavBar.module.css';
import HALogo from './../assets/images/HALogo.png';
import hamburger from './../assets/images/hamburger.png';

//hompages css
import bodystyles from './../css/homepage.module.css';
import belizeCity from './../assets/images/belizeCity.jpeg';
import belizeBig from './../assets/images/belizebig5.jpg';
//tabs
import {Link} from "react-router-dom";


function clickMe() {
  alert("You clicked me!");
}

function scrollToTop() {
  window.scrollTo({top:0, behavior:'smooth'});
};


function App() { 
  return (
    <div className="App">
      
      <div className={ navstyles.navbar }>
        
        <div className={ navstyles.tabBar }>
          <Link to="/">
            <img src={HALogo} alt="HelpAge logo" className={ navstyles.logo } onClick={scrollToTop}></img>
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
      <div className={ bodystyles.mainDiv }>
        <img src={ belizeBig } alt="Belize" className={ bodystyles.belizeCity }></img>
      </div>

      <div className= { bodystyles.donateDiv }>
        <p className={ bodystyles.donateMessage }>
          With your support, we will be able to continue
          providing essential services such as healthcare, nutrition, and socialization to the
          elderly population in Belize. With the ongoing pandemic, the needs of older persons 
          have become even more pressing, and your donation will make a significant difference in their lives.
          </p>

          <button type= "button" className={ bodystyles.donateButton } onClick={clickMe}>Support HelpAge Belize</button>

      </div>
      <div className= { bodystyles.gridDiv }>
        <div className= { bodystyles.gridContainer }>
          <div className= { bodystyles.gridItem }>News 1</div>
          <div className= { bodystyles.gridItem }>News 2</div>
          <div className= { bodystyles.gridItem }>News 3</div>

        </div>
      </div>
      <div className= { bodystyles.footerDiv }>



      </div>
    </div>
  );
}

export default App;
