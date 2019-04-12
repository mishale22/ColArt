import React, { Component } from 'react';
import ArtistCard from './components/artistcard/ArtistCard';
import ArtistCarousel from './components/artistcarousel/ArtistCarousel';
import UserForm from './components/userform/UserForm';
import NavBar from './components/navbar/NavBar';
class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar></NavBar>
      <div>
      <UserForm></UserForm>
      <ArtistCarousel></ArtistCarousel>
      </div>
      <ArtistCard></ArtistCard>
     
      </div>
    );
  }
}

export default App;
