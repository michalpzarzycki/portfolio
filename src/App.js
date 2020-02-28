import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import AddArticle from './components/AddArticle'
import ArticlesList from './components/ArticlesList'
import FirebaseContext from './firebase/context'
import './App.css'
import useAuth from './hooks/useAuth';
import firebase from './firebase/firebase'
import Article from './components/Article';
import ProjectList from './components/ProjectList';
import AddProject from './components/AddProject'
import ProjectDetail from './components/ProjectDetail'
import AddDev from './components/AddDev'

import 'semantic-ui-css/semantic.min.css'

function App() {
  const user = useAuth()
  return (
    <div className="mainApp">
      <div className="background">
        <BrowserRouter>
        <FirebaseContext.Provider value={{ user, firebase }}>
        <Navbar />
        <div className="contentApp">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/articles" component={ArticlesList}/>
          <Route path="/addarticle" component={AddArticle} />
          <Route path="/projects" component={ProjectList}/>
          <Route path="/addproject" component={AddProject} />
          <Route path="/adddev" component={AddDev} />
          <Route path="/article/:articleId" component={Article}/>
          <Route path="/project/:projectId" component={ProjectDetail}></Route>
        </Switch>
        </div>
        </FirebaseContext.Provider>
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
