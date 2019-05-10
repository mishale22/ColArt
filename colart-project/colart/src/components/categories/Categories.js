import React, { Component } from 'react';

class Categories extends Component {
  render() {
    var styles={ width:'300px',
        height:'150px',
        border:'150px',
        marginLeft:'5px',
        marginTop: '5px'
    };

    var hide={
      display:'none'
    }
    return (
      <div className="Categories">
      <h1>Conoce los diferentes tipos de entretenimiento artístico y cultural</h1>
  
      <a className="nav-link" href="/ArtistProfile">
     <button type="button" class="btn btn-primary btn-lg" style={styles}>     
      <h3>Música</h3>
      <h6>¡Descubre a los mejores talentos músicales!</h6> 
    </button></a>

    <button type="button" class="btn btn-primary btn-lg" style={styles}>
      <h3>Pintura</h3>
      <h6>¡Conoce las obras artísticas más auténticas!</h6>
    </button>

    <button type="button" class="btn btn-primary btn-lg" style={styles}>
      <h3>Teatro</h3>
      <h6>¡Experimenta los expertos en artes escénicas!</h6>
    </button>

    <button type="button" class="btn btn-primary btn-lg" style={styles}>
      <h3>Danza</h3>
      <h6>¡Baila, Baila y no pares de bailar con los mejores bailarines!</h6>
    </button>

      </div>
    );
  }
}

export default Categories;
