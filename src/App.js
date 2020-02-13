import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import AddArticle from './components/AddArticle'
import ArticlesList from './components/ArticlesList'
import FirebaseContext from './firebase/context'
import './App.css'
import useAuth from './hooks/useAuth';
import firebase from './firebase/firebase'

function App() {
  const user = useAuth()
  return (
    <div className="mainApp">
        <BrowserRouter>
        <FirebaseContext.Provider value={{ user, firebase }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/articles" component={ArticlesList}/>
          <Route path="/addarticle" component={AddArticle} />
        </Switch>
        </FirebaseContext.Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
