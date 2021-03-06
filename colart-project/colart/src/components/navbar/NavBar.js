import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {



  render() {
    return (
      <div className="NavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand " to="/home">ColArt</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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

        
          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-info my-2 my-sm-0" type="button">Iniciar Sesión</button>
          </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
