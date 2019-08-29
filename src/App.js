import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Home } from './components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Rellax from 'rellax';
import { Menu } from './components/menu';
import { Projects } from './components/projects';
import { PageNotFound } from './components/PageNotFound';

class App extends Component {

    componentDidMount(){
      var rellax = new Rellax('.rellax');
      AOS.init();
    }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => { return <Home /> }} />
            <Route path='/menu' render={() => { return <Menu /> }} />
            <Route path='/projects' render={() => { return <Projects /> }} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;