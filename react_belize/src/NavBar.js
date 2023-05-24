import React from 'react';
import styles from './css/NavBar.module.css';
import HALogo from './assets/images/HALogo.png'
import hamburger from './assets/images/hamburger.png'
//import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  render() {
    return (
      <div className={ styles.navbar }>
        <img src={HALogo} alt="HelpAge logo" className={ styles.logo }></img>
        <img src={hamburger} alt="hamburger logo" className={ styles.hamburger }></img>
      </div>
    );
  }
}
export default NavBar;