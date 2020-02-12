import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css'

function App() {
  return (
    <div className="mainApp">
        <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
