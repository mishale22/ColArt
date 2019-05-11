import React, { Component } from 'react';

import ArtistCard from '../artistcard/ArtistCard';
import ArtistCardSingle from '../artistcard/ArtistCardSingle';
import ArtistProfile from '../artistprofile/ArtistProfile';
import {Link} from  'react-router-dom';
class Category extends Component {
    render() {

        return (
            <div className="Category">


                <div className="container">


                    <div className="row">

                        <div className="col-sm">
                            <h1>Música</h1>
                            <h5>La música es el arte de organizar sensible y lógicamente una combinación coherente de sonidos y silencios respetando los principios fundamentales de la melodía, la armonía y el ritmo, mediante la intervención de complejos procesos psicoanímicos.
                     El concepto de música ha ido evolucionando desde su origen en la Antigua Grecia, en que se reunía sin distinción a la poesía, la música y la danza como arte unitario.</h5>

                            <a className="nav-link" href="/CategoryDetail">
                                <button className="btn btn-primary float-right">Aprender más</button>
                            </a>

                        </div>



                    </div>

                    <h2>Artistas destacados</h2>
                    <div className="row">

                        <div className="col-sm">
                            <ArtistCardSingle></ArtistCardSingle>
                        </div>
                        <div className="col-sm">
                            <ArtistCardSingle></ArtistCardSingle>
                        </div>
                        <div className="col-sm">
                            <ArtistCardSingle></ArtistCardSingle>
                        </div>
                        <div className="col-sm">
                            <ArtistCardSingle></ArtistCardSingle>
                        </div>

                    </div>

                    <h2>Descubre nuevos artistas</h2>
                    <div className="row">

                        <div className="col-sm">
                            <ArtistCardSingle></ArtistCardSingle>
                        </div>
                        <div className="col-sm">
                            <ArtistCardSingle></ArtistCardSingle>
                        </div>
                        <div className="col-sm">
                            <ArtistCardSingle></ArtistCardSingle>
                        </div>
                        <div className="col-sm">
                            <ArtistCardSingle></ArtistCardSingle>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <ArtistCardSingle></ArtistCardSingle>
                        </div>
                        <div className="col-sm">
                            <ArtistCardSingle></ArtistCardSingle>
                        </div>
                        <div className="col-sm">
                            <ArtistCardSingle></ArtistCardSingle>
                        </div>
                        <div className="col-sm">
                            <ArtistCardSingle></ArtistCardSingle>
                        </div>

                    </div>

                </div>



















            </div>
        );
    }
}

export default Category;
