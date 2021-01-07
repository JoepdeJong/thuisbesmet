import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Blog from './Blog';

import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Home from './Home'
import DataDelft from './DataDelft';
import DataLeiden from './DataLeiden';
import DataUtrecht from './DataUtrecht';
import Organogram from './Organogram';
import CookieConsent from 'react-cookie-consent';
import ReactGA from 'react-ga';

export default function MainComponent() {
  return (
    <div className="MainComponent">
        <Header/>
        <Switch>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/blog/:slug" component={Blog}/>
          <Route exact path="/data-delft" component={DataDelft}/>
          <Route exact path="/organogram" component={Organogram}/>
          <Route exact path="/data-leiden" component={DataLeiden}/>
          <Route exact path="/data-utrecht" component={DataUtrecht}/>
          <Route component={Home}/>
        </Switch>
        <Footer/>
        <CookieConsent location="bottom" cookieName="thuisbesmetConsentCookie" onAccept={() => { ReactGA.initialize('UA-186551147')
      ReactGA.pageview(window.location.pathname + window.location.search); }} enableDeclineButton
      onDecline={() => {
        console.log("Cookies have been disabled")
      }} expires={999}>
          This website uses cookies to enhance the user experience. Read our statement <a href="/media/privacy-cookies-thuisbesmet.pdf">here</a>
        </CookieConsent>
    </div>
  )
}
