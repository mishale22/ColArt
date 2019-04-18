import React, { Component } from 'react';
class ArtistCard extends Component {
  render() {
    return (
      <div className="ArtistCard text-center">
<h1>¡Artistas destacados!</h1>

<div class="card-group mx-auto w-50">
  <div class="card">
    <img src="https://images.pexels.com/photos/1735240/pexels-photo-1735240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..."/>
    <div class="card-body">

      <h5 class="card-title">Carolina Sierra - Cantante</h5>
      <p class="card-text">Apasionada por la música. Rock!!</p>
    </div>
  </div>
  <div class="card">
    <img src="https://images.pexels.com/photos/379962/pexels-photo-379962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Juan Agudelo - Guitarrista</h5>
      <p class="card-text">Me gusta hacer los mejores solos de guitarra. Jazz!!</p>
    </div>
  </div>
  <div class="card">
    <img src="https://images.pexels.com/photos/1886694/pexels-photo-1886694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Juanita Rendón - Bailarina</h5>
      <p class="card-text">Me encanta la danza de mi tierra.</p>
    </div>
  </div>
</div>


      </div>
    );
  }
}

export default ArtistCard;
