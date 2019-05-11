import React, { Component } from 'react';


class Payment extends Component {
  render() {
    var styles={ width:'300px',
        height:'300px',
        border:'150px',
        marginLeft:'5px',
        marginTop: '5px'
    };
    return (
      <div className="Payment">
     <div className="text-center">
      <h1>Se parte de ColArt con planes diseñados para ti</h1>
     
    
      <button type="button" class="btn btn-secondary  btn-lg" style={styles}>
      <h3>Free</h3>
      
      <h6><i class="fa fa-check"></i>Perfil en la plataforma</h6>
    </button>

    <button type="button" class="btn btn-primary btn-lg" style={styles}>
      <h3>Básico</h3>
      <h4>$40.000</h4>
      <h6><i class="fa fa-check"></i>Perfil en la plataforma</h6>
      <h6><i class="fa fa-check"></i>Apoyo audiovisual</h6>
    </button>

    <button type="button" class="btn btn-danger btn-lg" style={styles}>
      <h3>Estándar</h3>
      <h4>$60.000</h4>
      <h6><i class="fa fa-check"></i>Perfil en la plataforma</h6>
      <h6><i class="fa fa-check"></i>Apoyo audiovisual</h6>
      <h6><i class="fa fa-check"></i>Recomendación de artistas</h6>
      <h6><i class="fa fa-check"></i>Convenios con lugares</h6>
    </button>

    <button type="button" class="btn btn-success btn-lg" style={styles}>
      <h3>Premium</h3>
      <h4>$80.000</h4>
      <h6><i class="fa fa-check"></i>Perfil en la plataforma</h6>
      <h6><i class="fa fa-check"></i>Apoyo audiovisual</h6>
      <h6><i class="fa fa-check"></i>Recomendación de artistas</h6>
      <h6><i class="fa fa-check"></i>Convenios con lugares</h6>
      <h6><i class="fa fa-check"></i>Crowdfunding</h6>
    </button>
    </div>
      </div>
    );
  }
}

export default Payment;
