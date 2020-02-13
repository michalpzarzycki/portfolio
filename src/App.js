import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import ArticlesList from './components/ArticlesList'
import './App.css'

function App() {
  return (
    <div className="mainApp">
        <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/articles" component={ArticlesList}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
