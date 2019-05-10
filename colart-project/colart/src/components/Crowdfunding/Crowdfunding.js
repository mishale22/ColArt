import React, { Component } from 'react';

class Crowdfunding extends Component {
  render() {
    var styles={ width:'300px',
    height:'300px',
    borderRadius:'150px',
marginLeft:'10px',
};
    return (
      <div className="Crowdfunding container">
      <h1>Daniel Quintero</h1>

<img src="https://images.unsplash.com/photo-1522536421511-14c9073df899?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" style={styles}></img>

<div className="mt-5"id="descripcion">
<h2>Descripción</h2>
<p>Me apasiona la música desde el vientre de mi madre. He soñado que con la letra de mis canciones <br></br>
 las personas se conecten conmigo y disfruten la vida de otra manera con la melodía de mi guitarra.
</p>
</div>

<h2>Próximos Eventos</h2>
<h6>Fecha: Mayo 12, 2019</h6>
<h6>Celebración Día de la Madre</h6>
<h6>Presentación en vivo en Hotel Dann Cartlon</h6>

<h1>¡Apoyame!</h1>
<ul>
<li>
<h3>Proyecto InnPulsa</h3>
<h5>Este proyecto es para participar en un proyecto de una empresa de música americana</h5>
<h5>Valor: $25.000</h5>
<h5>Bono: Agenda un toque musical privado por mí y para ti.</h5>
<button type="button" className="btn btn-primary">Aceptar</button>
</li>
<br></br>
<li>
<h3>Nuevo instrumento</h3>
<h5>Deseo ampliar mi reportorio de instrumentos</h5>
<h5>Valor: $5.000</h5>
<h5>Bono: ¿Foto? ¿Autografo? ¿ambos?</h5>
<button type="button" className="btn btn-primary">Aceptar</button>
</li>
</ul>

<a className="nav-link" href="/ArtistProfile">
      <button type="submit" className="btn btn-info text-center">Regresar al perfil</button></a>

      </div>
    );
  }
}

export default Crowdfunding;
