import React, { Component } from 'react';

class ServiceCard extends Component {

    
  render() {
    var styles={ width:'300px',
        height:'300px',
        borderRadius:'150px',
    marginLeft:'10px',
    };
    return (
    <div className="ServiceCard text-center mt-5">
<h1 className="mt-5">Servicios</h1>
<button type="button" class="btn btn-info" style={styles} >

<h3>Convenios con lugares</h3>
<h6>¡Conectate con establecimientos que apoyan el arte!</h6>
</button>

<button type="button" class="btn btn-info" style={styles}>
<h3>Apoyo audiovisual</h3>
<h6>¡Realiza los videos más profesionales para demostrar lo bueno que eres!</h6>

</button>
<button type="button" class="btn btn-info" style={styles}>
<h3>Crowdfunding</h3>
<h6>¡No hay nada mejor que tener apoyo de tus fans #1!</h6>

</button>
<button type="button" class="btn btn-info" style={styles}>
<h3>Recomendaciones</h3>
<h6>¡Recomienda a tus colegas preferidos!</h6>
</button>

    
     

     
      </div>
    );
  }
}

export default ServiceCard;
