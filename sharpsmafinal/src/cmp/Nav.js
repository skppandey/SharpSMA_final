import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../images/layout_set_logo-4.png';

// const Nav = styled.nav`
//   background-color: black;
//   width: 100%;
//   justify-content: space-around;
//   align-items: center;
//   height: 44px;
//   display: flex;
//   color: white;
//   justify-content: space-between;
//   .logo {
//     margin-top:-25px;
//     padding-left:30px;
//     height:40px;
//   }
// `;

const Nav = (sticky,navbar) => {
  return (
    <div id="navbar" className="nav">
      {/* <div className="logo">
      <img src={logo}  alt="sharpsma" />
      </div> */}
      <Burger />
    </div>
  );
};

export default Nav;
