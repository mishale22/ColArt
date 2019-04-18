import React, { Component } from 'react';
import ArtistCard from './components/artistcard/ArtistCard';
import ArtistCarousel from './components/artistcarousel/ArtistCarousel';
import UserForm from './components/userform/UserForm';
import NavBar from './components/navbar/NavBar';
import ServiceCard from './components/services/ServiceCard';
class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar></NavBar>
      <div className="text-center">
      <h1>Somos tu manager para impulsar tu carrera artística en la ciudad</h1>
      </div>
      <ArtistCarousel></ArtistCarousel>
      <br></br>
      <div className="text-center">
      <button type="submit" className="btn btn-info text-center">¡Quiero ser parte de Colart!</button>
      </div>
      <br></br>
      <ArtistCard></ArtistCard>
     <ServiceCard></ServiceCard>
     
     <div className="text-center mt-5 mb-5">
      <button type="submit" className="btn btn-info text-center">¡Quiero ser parte de Colart!</button>
      </div>
      </div>
    );
  }
}

export default App;
