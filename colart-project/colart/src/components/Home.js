import React, { Component } from 'react';
import ArtistCard from './artistcard/ArtistCard';
import ArtistCarousel from './artistcarousel/ArtistCarousel';
import ServiceCard from './services/ServiceCard';

class Home extends Component {
  render() {
    
    return (
      <div className="Home">
     <div className="text-center">
      <h1>Somos tu manager para impulsar tu carrera artística en la ciudad</h1>
      </div>
      <ArtistCarousel></ArtistCarousel>
      <br></br>
      <div className="text-center">
      
      <a className="nav-link" href="/Payment">
      <button type="submit" className="btn btn-info text-center">¡Quiero ser parte de Colart!</button></a>
      </div>
      <br></br>
      <ArtistCard></ArtistCard>
     <ServiceCard></ServiceCard>
     
     <div className="text-center mt-5 mb-5">
      
      <a className="nav-link" href="/Payment">
      <button type="submit" className="btn btn-info text-center">¡Quiero ser parte de Colart!</button></a>
      </div>
    
      </div>
    );
  }
}

export default Home;