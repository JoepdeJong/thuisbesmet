import React from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Home from './Home'

export default function MainComponent() {
  return (
    <div className="MainComponent">
        <Header/>
        <Home/>
        <Footer/>
    </div>
  )
}
