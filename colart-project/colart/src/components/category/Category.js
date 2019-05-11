import React, { Component } from 'react';

import ArtistCard from '../artistcard/ArtistCard';
import ArtistCardSingle from '../artistcard/ArtistCardSingle';
import ArtistProfile from '../artistprofile/ArtistProfile';
import { Link } from 'react-router-dom';

class Category extends Component {

    constructor(){
        super();
        this.state = {

            librerias: [
                {
                    name: "Daniel Quintero - Guitarrista",
                    url: "https://images.pexels.com/photos/1425297/pexels-photo-1425297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    description: "El toque de mi guitarra me lleva a las nubes"
                }, 
                {
                    name: "Carolina Sierra - Cantante",
                    url: "https://images.pexels.com/photos/1735240/pexels-photo-1735240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    description: "Apasionada por la música. Rock!!"
                }, 
                {
                    name: "Pablo Jaramillo - Cantante",
                    url: "https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    description: "Me encanta cantar baladas"
                }, 
                {
                    name: "Claudia Castillo - Cantante",
                    url: "https://images.pexels.com/photos/638700/pexels-photo-638700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    description: "Me encanta cantar la música del pacífico"
                },
                {
                    name: "Pedro Escandón - Saxofonista",
                    url: "https://images.pexels.com/photos/1813157/pexels-photo-1813157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    description: "El Jazz es lo mío"
                },
                {
                    name: "Cristina Fernandez - Baterista",
                    url: "https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    description: "El rock corre por mis venas"
                },
                {
                    name: "Andrés Velasquez - Bajista",
                    url: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    description: "Me transformo cuando toco las mejores canciones de rock"
                },
                {
                    name: "Johana Madriñan - Cantante",
                    url: "https://images.pexels.com/photos/164809/pexels-photo-164809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    description: "Compongo y canto con la pasión del mundo"
                },
                {
                    name: "Diego Ortiz - Guitarrista",
                    url: "https://images.pexels.com/photos/33667/music-guitar-electric-guitar-sound.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    description: "Con mi guitarra eléctrica toco las mejores canciones"
                },
                {
                    name: "Nathalia Valencia - Pianista",
                    url: "https://images.pexels.com/photos/1885213/pexels-photo-1885213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    description: "El piano transformó mi vida y mi música lo hará contigo"
                },
                {
                    name: "Juan Agudelo - Guitarrista",
                    url: "https://images.pexels.com/photos/379962/pexels-photo-379962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    description: "Me gusta hacer los mejores solos de guitarra. Jazz!!"
                },
                {
                    name: "Mariana Muñoz - Cantante",
                    url: "https://images.pexels.com/photos/1460037/pexels-photo-1460037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    description: "Canto la mejor música pop que podrías escuchar"
                },
            ]
        };
    }
    render() {

        return (
            <div className="Category">


                <div className="container">


                    <div className="row">

                        <div className="col-sm">
                            <h1>Música</h1>
                            <h5>La música es el arte de organizar sensible y lógicamente una combinación coherente de sonidos y silencios respetando los principios fundamentales de la melodía, la armonía y el ritmo, mediante la intervención de complejos procesos psicoanímicos.
                     El concepto de música ha ido evolucionando desde su origen en la Antigua Grecia, en que se reunía sin distinción a la poesía, la música y la danza como arte unitario.</h5>

                            <Link className="nav-link" to="/CategoryDetail">
                                <button className="btn btn-primary float-right">Aprender más</button>
                            </Link>

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
