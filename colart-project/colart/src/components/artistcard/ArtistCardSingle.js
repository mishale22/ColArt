import React, { Component } from 'react';
class ArtistCardSingle extends Component {
    render() {
        return (
            <div className="ArtistCardSingle text-center">
               

                <div class="card-group mx-auto w-50">
                    <div class="card">
                        <img src="https://images.pexels.com/photos/1735240/pexels-photo-1735240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..." />
                        <div class="card-body">

                            <h5 class="card-title">Carolina Sierra - Cantante</h5>
                            <p class="card-text">Apasionada por la música. Rock!!</p>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

export default ArtistCardSingle;
