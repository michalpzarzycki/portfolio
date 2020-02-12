import React from 'react';
import { BrowseRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <div>
        <BrowseRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
        </BrowseRouter>
    </div>
  );
}

export default App;
