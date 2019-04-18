import React, { Component } from 'react';
class NavBar extends Component {


    
  render() {
    return (
      <div className="NavBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">ColArt</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Ver Artistas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Info</a>
      </li>

     
    </ul>
   
  </div>
  <form className="form-inline">
    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Iniciar Sesión</button>
  </form>
</nav>
      </div>
    );
  }
}

export default NavBar;
