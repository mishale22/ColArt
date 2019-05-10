import React, { Component } from 'react';
import ArtistCard from './components/artistcard/ArtistCard';
import ArtistCarousel from './components/artistcarousel/ArtistCarousel';
import UserForm from './components/userform/UserForm';
import NavBar from './components/navbar/NavBar';
import ServiceCard from './components/services/ServiceCard';
import {BrowserRouter as Router, Route } from  'react-router-dom';
import ReactGA from 'react-ga';

import Categories from './components/categories/Categories';
import Home from './components/Home'
import Info from './components/Info'
import Payment from './components/Payment/Payment'
import ArtistProfile from './components/artistprofile/ArtistProfile'
import Crowdfunding from './components/Crowdfunding/Crowdfunding'
class App extends Component {
  render() {
    ReactGA.initialize('194896059');
    ReactGA.pageview("/");
    return (
      <div className="App">
     <Router>
      <NavBar></NavBar>

      <Route exact path="/categorias" component={Categories}/>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={Home} />
      <Route exact path="/Info" component={Info} />
      <Route exact path="/Payment" component={Payment} />
      <Route exact path="/ArtistProfile" component={ArtistProfile} />
      <Route exact path="/Crowdfunding" component={Crowdfunding} />
      </Router>
      </div>
    );
  }
}

export default App;
