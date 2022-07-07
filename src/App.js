import React from 'react'
import { HashRouter } from "react-router-dom";
import './App.css'
import MarketingSlider from './components/activites/slider/slider'
// import Homes from './components/landing/Home'
import Service from './components/services/service'; 
import Ourleader from './components/ourleader/ourleaders';
import Leaders from './components/leaders/leaders';
import Abouts from './components/about/about'; 
import Projects from './components/ourproject/ourproject';
import Topbar from './components/topbar/topbar';
import Home from './components/home/home';
import Ceo from './components/ceomessage/ceo';
// import Ourproject from './components/projects/project';
// import Project from './components/ourproject/Projects';

const App = () => {
  return (
     <HashRouter base="/">
    
    <Topbar/>
    <Home/>
      <Projects />
      <MarketingSlider/>
    <Abouts/>
    <Service />
    <Ceo/>
    <Leaders/> 
  
    </HashRouter>
  )
}

export default App
