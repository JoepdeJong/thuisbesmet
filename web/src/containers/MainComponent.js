import React, {useEffect} from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
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

const MainComponent = () => {

  useEffect(() => {
    initializeGoogleAnalytics();
    ReactGA.pageview(window.location.pathname + window.location.search); 
  })

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
        <CookieConsent location="bottom" cookieName="thuisbesmetConsentCookie" onAccept={initializeGoogleAnalyticsCookies} enableDeclineButton
      onDecline={() => {
        window['ga-disable-UA-186551147-1'] = true;
      }} expires={999}>
          This website uses cookies to enhance the user experience. Read our statement <a href="/media/privacy-cookies-thuisbesmet.pdf">here</a>
        </CookieConsent>
    </div>
  )
}

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const initializeGoogleAnalyticsCookies = () => { 
  initializeGoogleAnalytics();
  window['ga-disable-UA-186551147-1'] = false;
}

const initializeGoogleAnalytics = () => { 
  ReactGA.initialize('UA-186551147-1');
  ReactGA.set({ anonymizeIp: true });
}

export default withRouter(MainComponent);
