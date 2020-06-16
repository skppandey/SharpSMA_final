import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import logo from '../images/layout_set_logo-4.png';
import Burger from './Burger';
const Footer = (sticky, navbar) => {
  return (
    <div id="footBar" style={{backgroundColor: 'black'}} className="foot">
      <span style={{color: 'white', float: 'left', marginLeft:'20px',marginTop:'7px'}}>
        &#169;Sharp Electronics Corporation. All rights reserved.
      </span>
      <span style={{float:'right',marginRight:'20px',marginTop:'7px'}}>
        <a1 href="#" className="iconSpan">
          <i id="l6" className="icon icon ion-social-twitter"></i>
        </a1>
        <a1 href="#" className="iconSpan">
          <i id="l7" className="icon icon ion-social-facebook"></i>
        </a1>
        <a1 href="#" className="iconSpan">
          <i id="l8" className="icon icon ion-social-googleplus"></i>
        </a1>
        <a1 href="#" className="iconSpan">
          <i id="l9" className="icon icon ionicons ion-search"></i>
        </a1>
      </span>
    </div>
  );
};

export default Footer;
