import React from 'react';
import "./index.css";
import {Switch,Route} from "react-router-dom";
import Home from './Home.jsx';
import Services from './Services.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

const App=()=>{
return(
  <>
  <div classname='container'>
   <Switch>
   <Route exact path="/" component={Home}></Route>
    <Route exact path="/home" component={Home}></Route>
    <Route exact path="/service" component={Services}></Route>
    <Route exact path="/about" component={About}></Route>
    <Route exact path="/contact" component={Contact}></Route>
    </Switch>
  </div>
  </>
)
}

export default App;


