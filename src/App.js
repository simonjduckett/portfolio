import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Topbar } from './components/topbar';
import { Home } from './components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import Rellax from 'rellax';
import { Menu } from './components/menu';
import { Projects } from './components/projects';
import { PageNotFound } from './components/PageNotFound';

class App extends Component {

    componentDidMount(){
      //var rellax = new Rellax('.rellax');
      AOS.init();
    }

  toggleMenu() {
    let menu = document.getElementById('menu');
    let ham = document.getElementById('ham');

    menu.classList.toggle("show");
    ham.classList.toggle("change");
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Topbar color={'topbar topbar__dark'} toggleMenu={this.toggleMenu} />
          <Menu toggleMenu={this.toggleMenu} />
          <Switch>
            <Route exact path='/' render={() => { return <Home /> }} />
            <Route path='/projects' render={() => { return <Projects /> }} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;