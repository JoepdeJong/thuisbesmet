import React, { Component } from 'react'
import { ReactSVG } from 'react-svg';

import banner from '../assets/img/owtb-banner.svg';
import Footer from '../Components/Footer';
import Home from './Home'

export default class MainComponent extends Component {
  render() {
    return (
      <div className="MainComponent">
          <div className="Banner">
          <ReactSVG src={banner} />
          </div>
          <Home/>
          <Footer/>
      </div>
    )
  }
}
