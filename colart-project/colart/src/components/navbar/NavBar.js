import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {



  render() {
    return (
      <div className="NavBar">
        <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark">
          <a className="navbar-brand text-light" to="/home">ColArt</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Categorias">Ver Artistas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Info">Info</Link>
              </li>


            </ul>

          </div>
          <form className="form-inline">
            <button className="btn btn-outline-info my-2 my-sm-0" type="button">Iniciar Sesión</button>
          </form>
        </nav>
      </div>
    );
  }
}

export default NavBar;
