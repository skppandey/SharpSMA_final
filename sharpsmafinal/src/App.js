import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Nav from './cmp/Nav';
import Info from './cmp/Info';
import Footer from './cmp/Footer';
import img1 from './images/kv_ces2020_index_05.jpg';
import img2 from './images/background-wind-green-blue-sky.jpg';
import car from './images/image-madaz.png';
import * as $ from 'jquery';
import triangle1 from './images/triangle_mask_bottom.png';
import triangle2 from './images/triangle_mask_top.png';

function getWindowDimensions() {
  const {innerWidth: width, innerHeight: height} = window;
  return {
    width,
    height,
  };
}

document.addEventListener('DOMContentLoaded', function () {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM

  // When the user scrolls the page, execute myFunction
  window.addEventListener('scroll', myFunctionForSticky);
  window.addEventListener('resize', handleResize);
  // Get the navbar
  function handleResize() {
    return getWindowDimensions();
  }
  var navbar = document.getElementById('navbar');
  function myFunctionForSticky() {
    // console.log(window.pageYOffset);
    if (window.pageYOffset >= 190) {
      navbar.classList.add('sticky');
      document.getElementById('product').classList.add('stickyColor');
      document.getElementById('l2').classList.add('stickyColor');
      document.getElementById('l3').classList.add('stickyColor');
      document.getElementById('l4').classList.add('stickyColor');
      document.getElementById('l5').classList.add('stickyColor');
      document.getElementById('l6').classList.add('stickyColor');
      document.getElementById('l7').classList.add('stickyColor');
      document.getElementById('l8').classList.add('stickyColor');
      document.getElementById('l9').classList.add('stickyColor');
    } else {
      navbar.classList.remove('sticky');
      navbar.classList.add('nav');
      document.getElementById('product').classList.remove('stickyColor');
      document.getElementById('l2').classList.remove('stickyColor');
      document.getElementById('l3').classList.remove('stickyColor');
      document.getElementById('l4').classList.remove('stickyColor');
      document.getElementById('l5').classList.remove('stickyColor');
      document.getElementById('l6').classList.remove('stickyColor');
      document.getElementById('l7').classList.remove('stickyColor');
      document.getElementById('l8').classList.remove('stickyColor');
      document.getElementById('l9').classList.remove('stickyColor');
    }

    const dimension = handleResize();
    // console.log(dimension);
    if (dimension.width > 768) {
      if (window.pageYOffset >= 625) {
        document.getElementById('idFixed').classList.add('idFixed');
        document.getElementById('idMove').classList.add('idMove');
      }
      if (window.pageYOffset < 500) {
        document.getElementById('idMove').classList.remove('IdMove');
        document.getElementById('idFixed').classList.remove('idFixed');
      }
    }
  }
});

let posY = 0;
document.addEventListener('mousemove', (e) => {
  posY = e.y;
  if (e.y <= 47 && e.pageY >= 180) {
    // console.log(posY);
    navbarStyleAdd();
  }
});

function navbarStyleAdd() {
  var navbar = document.getElementById('navbar');
  navbar.classList.add('sticky');
  document.getElementById('product').classList.add('stickyColor');
  document.getElementById('l2').classList.add('stickyColor');
  document.getElementById('l3').classList.add('stickyColor');
  document.getElementById('l4').classList.add('stickyColor');
  document.getElementById('l5').classList.add('stickyColor');
  document.getElementById('l6').classList.add('stickyColor');
  document.getElementById('l7').classList.add('stickyColor');
  document.getElementById('l8').classList.add('stickyColor');
  document.getElementById('l9').classList.add('stickyColor');
  // document.getElementById('s2').classList.add('stickyColor');
  // document.getElementById('s3').classList.add('stickyColor');
  // document.getElementById('s4').classList.add('stickyColor');
  // document.getElementById('s5').classList.add('stickyColor');
}

function navbarStyleRemove() {
  var navbar = document.getElementById('navbar');
  if (posY > 47) {
    navbar.classList.remove('sticky');
    document.getElementById('product').classList.remove('stickyColor');
    document.getElementById('l2').classList.remove('stickyColor');
    document.getElementById('l3').classList.remove('stickyColor');
    document.getElementById('l4').classList.remove('stickyColor');
    document.getElementById('l5').classList.remove('stickyColor');
    document.getElementById('l6').classList.remove('stickyColor');
    document.getElementById('l7').classList.remove('stickyColor');
    document.getElementById('l8').classList.remove('stickyColor');
    document.getElementById('l9').classList.remove('stickyColor');
    // document.getElementById('s2').classList.remove('stickyColor');
    // document.getElementById('s3').classList.remove('stickyColor');
    // document.getElementById('s4').classList.remove('stickyColor');
    // document.getElementById('s5').classList.remove('stickyColor');
  }
}

function App() {
  const [mobile, setMobile] = useState(false);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  // console.log(windowDimensions);
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowDimensions.width < 786) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });

  useEffect(() => {
    document.title = 'Sharp-SMA';
    document.body.classList.add('body');
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // setSeconds(seconds => seconds + 1);
      navbarStyleRemove();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const onChangeBgL = () => {
    // var url ="./images/background-wind-green-blue-sky.jpg";
    var div = document.getElementById('idDivBg1');
    if(div){
    div.style.backgroundImage = `url(${img2})`;
    console.log(img2)
    }
  };
  const onChangeBgR = () => {
    // var url ="./images/background-wind-green-blue-sky.jpg";
    var div = document.getElementById('idDivBg1');
    if(div){
    div.style.backgroundImage = `url(${img1})`;
    console.log(img2)
    }
  };
useEffect(() =>{
  setInterval(onChangeBgL, 3000);
  setInterval(onChangeBgR, 6000);
})

  return (
    <div>
      {/* <img src={img1}  alt="sharpsma" /> */}
      <div id="idDivBg1" className="bg-img">
        <Router>
          <Nav />
          <Switch>
            <Route path="/Product"></Route>

            <Route path="/WhereToBuy"></Route>

            <Route path="/SharpTechnology"></Route>

            <Route path="/Resources"></Route>

            <Route path="/ContactUs"></Route>
          </Switch>
        </Router>
        <a1 className="prev" onClick={onChangeBgL}>
          &#10094;
        </a1>
        <a1 className="next" onClick={onChangeBgR}>
          &#10095;
        </a1>
      </div>
      <div className="triangle1">
        <img src={triangle1} alt="triangle1" />
      </div>
      <div id="idDiv2" className="idDiv2">
        <div id="idFixed" className="panels">
          <div class="autoshowroom-title  autoshowroom-title-center">
            <h2 class="AutoshowroomTitle" style={{color: '#222222'}}>
              WHY CHOOSE US{' '}
            </h2>
            <p>
              We are working hard to brings new advanced design interfaces to
              Joomla and WordPress that both beginners and experts will fall in
              love with{' '}
            </p>
          </div>
          <div style={{marginTop: '-20px'}}>
            <div id="idTable">
              <table className="mobTable" cellspacing="20">
                <tbody>
                  <tr>
                    <td style={{width: '300px'}}>
                      <h3 class="autoshowroom-name-process">
                        <span
                          style={{
                            color: '#ec1d24',
                            fontSize: '30px',
                            fontWeight: '800',
                          }}
                          class="autoshowroom-number-process"
                        >
                          01.
                        </span>
                      </h3>
                      <h3 class="autoshowroom-name-process">
                        HIGHLY-TRAINED STAFF
                      </h3>
                      <p class="autoshowroom-description-process">
                        Default is 6 months Update &amp; Support. Furthermore,
                        you can extend support to 12 months
                      </p>
                    </td>
                    <td style={{width: '300px'}}>
                      <span
                        style={{
                          color: '#ec1d24',
                          fontSize: '30px',
                          fontWeight: '800',
                        }}
                        class="autoshowroom-number-process"
                      >
                        02.
                      </span>
                      <h3 class="autoshowroom-name-process">
                        FAST &amp; EFFECTIVE SERVICE
                      </h3>
                      <p class="autoshowroom-description-process">
                        Default is 6 months Update &amp; Support. Furthermore,
                        you can extend support to 12 months
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{width: '300px'}}>
                      <span
                        style={{
                          color: '#ec1d24',
                          fontSize: '30px',
                          fontWeight: '800',
                        }}
                        class="autoshowroom-number-process"
                      >
                        03.
                      </span>
                      <h3 class="autoshowroom-name-process">SPECIALS</h3>
                      <p class="autoshowroom-description-process">
                        We support to customize minor request as javascript
                        conflict, css issue, etc
                      </p>
                    </td>
                    <td style={{width: '300px'}}>
                      <span
                        style={{
                          color: '#ec1d24',
                          fontSize: '30px',
                          fontWeight: '800',
                        }}
                        class="autoshowroom-number-process"
                      >
                        04.
                      </span>
                      <h3 class="autoshowroom-name-process">24/7 SUPPORT</h3>
                      <p class="autoshowroom-description-process">
                        We support to customize minor request as javascript
                        conflict, css issue, etc
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="idCar" style={{float: 'right', paddingLeft: '15px'}}>
              <img className="mobCar" src={car} alt="triangle" />
            </div>
          </div>
        </div>
        <Info />
      </div>
      {/* <div className="bg-img2">
        <div className="triangle2">
          <img src={triangle2} alt="triangle2" />
        </div>
        <div style={{textAlign: 'center'}}>
          <h1
            style={{
              color: 'white',
              fontFamily: 'Open Sans',
              lineHeight: '1.05em',
              fontSize: '3.5em',
              fontWeight: '100',
              // marginTop:"10%"
            }}
          >
            <span>
              "Looking for Reliable
              <br />
              LCD Partner?
            </span>
          </h1>
          <div style={{height: '50px'}}></div>
          <button class="snip1099 red">
            <span>Contact</span>
            <i class="ion-android-arrow-forward"></i>
          </button>
          <div style={{height: '100px'}}></div>
        </div>
      </div> */}

      {!mobile ? (
        <div>
          <Router>
            <Footer />
            <Switch>
              <Route path="/Product"></Route>

              <Route path="/WhereToBuy"></Route>

              <Route path="/SharpTechnology"></Route>

              <Route path="/Resources"></Route>

              <Route path="/ContactUs"></Route>
            </Switch>
          </Router>
        </div>
      ) : null}
    </div>
  );
}

export default App;
