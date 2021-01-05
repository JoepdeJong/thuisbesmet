import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Blog from './Blog';

import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Home from './Home'
import Data from './Data';
import Organogram from './Organogram';
import CookieConsent from 'react-cookie-consent';

export default function MainComponent() {
  return (
    <div className="MainComponent">
        <Header/>
        <Switch>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/blog/:slug" component={Blog}/>
          <Route exact path="/data" component={Data}/>
          <Route exact path="/organogram" component={Organogram}/>
          <Route component={Home}/>
        </Switch>
        <Footer/>
        <CookieConsent location="bottom" cookieName="thuisbesmetConsentCookie" expires={999}>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
    </div>
  )
}
