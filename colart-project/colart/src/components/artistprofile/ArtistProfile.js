import React, { Component } from 'react';

class ArtistProfile extends Component {
  render() {
    var styles={ width:'300px',
    height:'300px',
    borderRadius:'150px',
marginLeft:'10px',
};

var video={ width:'320px',
    height:'240px'
};
  return (
      <div className="ArtistProfile container">
 

 <h1>Daniel Quintero</h1>

 <img src="https://images.unsplash.com/photo-1522536421511-14c9073df899?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" style={styles}></img>

<div className="mt-5"id="descripcion">
<h2>Descripción</h2>
<p>Me apasiona la música desde el vientre de mi madre. He soñado que con la letra de mis canciones <br></br>
  las personas se conecten conmigo y disfruten la vida de otra manera con la melodía de mi guitarra.
</p>
</div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/hXQxSi34GWY?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<h2>Próximos Eventos</h2>
<h6>Fecha: Mayo 12, 2019</h6>
<h6>Celebración Día de la Madre</h6>
<h6>Presentación en vivo en Hotel Dann Cartlon</h6>


<a className="nav-link" href="/Crowdfunding"><h4>¡Apoyame!</h4>
</a>


      </div>
    );
  }
}

export default ArtistProfile;
