import React, { Component } from 'react';
import ArtistCard from './components/artistcard/ArtistCard';
import ArtistCarousel from './components/artistcarousel/ArtistCarousel';
import UserForm from './components/userform/UserForm';
class App extends Component {
  render() {
    return (
      <div className="App">
      <ArtistCarousel></ArtistCarousel>
      <ArtistCard></ArtistCard>
      <UserForm></UserForm>
      </div>
    );
  }
}

export default App;
