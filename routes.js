import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom';
import Header from './Components/header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

import Useless from './Components/Useless';
import Skills from './Components/Skills';




const Routes = () => (
  

    <Switch> 
      <Route exact path="/" component ={Home}/>

      <Route path="/Header" component ={Header}/>
      <Route path="/About" component ={About}/>
      <Route path="/Contact" component ={Contact}/>
      <Route path="/Useless" component ={Useless}/>
      <Route path="/Skills" component ={Skills}/>
      
    </Switch>
   
      )

  export default Routes;