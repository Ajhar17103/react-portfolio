import React from 'react';
 
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Blog from './components/pages/Blog'
import About from './components/pages/About';
import Navbar from './components/NavItem/Index';
import Hired from './components/Hired/Index';
 
 

function App() {
  return (
    <>
      <Router basename="http://Ajhar17103.github.io/react-portfolio">
         
       <Navbar/>
       
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/blog' component={Blog} />
          <Route path='/about' component={About} />
          <Route path='/hire' component={Hired} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
