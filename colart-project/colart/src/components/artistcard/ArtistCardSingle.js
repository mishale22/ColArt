import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ArtistCardSingle extends Component {

    constructor(props) {
        super(props);
        this.state = {

            artists: [{
                name: "Carolina Sierra - Cantante",
                url: "https://images.pexels.com/photos/1735240/pexels-photo-1735240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                description: "Apasionada por la música. Rock!!"
            },
            {
                name: "Carolina Sierra - Cantante",
                url: "https://images.pexels.com/photos/1735240/pexels-photo-1735240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                description: "Apasionada por la música. Rock!!"
            },
            {
                name: "Carolina Sierra - Cantante",
                url: "https://images.pexels.com/photos/1735240/pexels-photo-1735240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                description: "Apasionada por la música. Rock!!"
            },
            {
                name: "Carolina Sierra - Cantante",
                url: "https://images.pexels.com/photos/1735240/pexels-photo-1735240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                description: "Apasionada por la música. Rock!!"
            },
            {
                name: "Carolina Sierra - Cantante",
                url: "https://images.pexels.com/photos/1735240/pexels-photo-1735240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                description: "Apasionada por la música. Rock!!"
            },
            {
                name: "Carolina Sierra - Cantante",
                url: "https://images.pexels.com/photos/1735240/pexels-photo-1735240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                description: "Apasionada por la música. Rock!!"
            },
            {
                name: "Carolina Sierra - Cantante",
                url: "https://images.pexels.com/photos/1735240/pexels-photo-1735240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                description: "Apasionada por la música. Rock!!"
            },







            ]

        };
    }
    render() {
        return (
            <div className="ArtistCardSingle text-center">
                <Link className="nav-link" to="/ArtistProfile">


                    <div className="card-group mx-auto w-20">
                        <div className="card">
                            <img src={this.state.url} className="card-img-top" alt="..." />
                            <div className="card-body">

                                <h5 className="card-title text-dark">{this.state.name}</h5>
                                <p className="card-text text-dark">{this.state.description}</p>
                            </div>
                        </div>

                    </div>
                </Link>

            </div>
        );
    }
}

export default ArtistCardSingle;
