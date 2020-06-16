import React from 'react';
import styled from 'styled-components';
import logo from '../images/layout_set_logo-4.png';
import * as $ from 'jquery';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  /* padding-top:3.5rem; */
  /* a {
    padding: 18px 10px;
    color: #fff;
  } 
  a.hover {
    color: #ff0000 !important;
  } */
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    top: 10px;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 2.5rem;
    transition: transform 0.3s ease-in-out;
    opacity: 0.8;
    /* a {
      color: #fff;
    } */
    ul {
      flex-flow: column nowrap;
    }
    .sub-menu {
      position: relative;
    }
  }
`;

const RightNav = ({open}) => {
  // document.getElementById('idSubMenu').classList.add('sub-menu');

  return (
    <Ul open={open}>
      <img src={logo} alt="sharpsma" />
      <li className="has-sub-menu" style={{paddingTop: '18px'}}>
        <a id="product" href="#">
          Product
        </a>
        <table class="blueTable">
          <tbody>
            <tr>
              <td style={{width: '200px'}}>
                <a
                  id="s1"
                  style={{
                    color: '#ec1d24',
                    fontSize: '15px',
                    fontWeight: 'bold',
                  }}
                  href="#"
                >
                  LCD
                </a>
              </td>
              <td style={{width: '200px'}}>
                <a
                  id="s1"
                  style={{
                    color: '#ec1d24',
                    fontSize: '15px',
                    fontWeight: 'bold',
                  }}
                  href="#"
                >
                  IMAGING
                </a>
              </td>
            </tr>
            <tr style={{color: 'white', fontSize: '15px', fontWeight: 'bold'}}>
              <td style={{width: '200px'}}>
                <a id="s2" href="#">
                  Industrial LCD
                </a>
              </td>
              <td style={{width: '200px'}}>Custom Camera Modules</td>
            </tr>
            <tr style={{color: 'white', fontSize: '15px', fontWeight: 'bold'}}>
              <td style={{width: '200px'}}>
                <a id="s3" href="#">
                  Memory LCD
                </a>
              </td>
              <td style={{width: '200px'}}>CCD Image Censors</td>
            </tr>
            <tr style={{color: 'white', fontSize: '15px', fontWeight: 'bold'}}>
              <td style={{width: '200px'}}>
                <a id="s3" href="#">
                  
                </a>
              </td>
              <td style={{width: '200px'}}>CMOS Image Censors</td>
            </tr>
          </tbody>
        </table>
        {/* <ul id="idSubMenu" className="sub-menu">
          <li >
            <a id="s1" style={{color:'#ec1d24',fontSize:'15px',fontWeight:'bold'}} href="#">LCD</a>
          </li>
          <li>
            <a id="s2" href="#">Industrial LCD</a>
          </li>
          <li>
            <a id="s3" href="#">Memory LCD</a>
          </li>
        </ul> */}
      </li>
      <a id="l2" href="#">
        Where To Buy
      </a>
      <li className="has-sub-menu" style={{paddingTop: '18px'}}>
        <a id="l3" href="#">
          Sharp Technology
        </a>
        <ul id="idSubMenu" className="sub-menu">
          <li>
            <a
              style={{color: '#ec1d24', fontSize: '15px', fontWeight: 'bold'}}
              href="#"
            >
              Display Technology
            </a>
          </li>
          <li>
            <a id="s4" href="#">
              Technology 2
            </a>
          </li>
          <li>
            <a id="s5" href="#">
              Technology 3
            </a>
          </li>
        </ul>
      </li>

      <a id="l4" href="#">
        Resources
      </a>
      <a id="l5" href="#">
        Contact Us
      </a>
      <span
        style={{marginTop: '20px', marginRight: '50px', marginLeft: '30px'}}
      >
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
    </Ul>
  );
};

export default RightNav;
