import React, { Component } from 'react';

import ArtistCard from '../artistcard/ArtistCard';

class Category extends Component {
    render() {

        return (
            <div className="Category">

                <h1>Música</h1>

                <h3>La música es el arte de organizar sensible y lógicamente una combinación coherente de sonidos y silencios respetando los principios fundamentales de la melodía, la armonía y el ritmo, mediante la intervención de complejos procesos psicoanímicos.
                     El concepto de música ha ido evolucionando desde su origen en la Antigua Grecia, en que se reunía sin distinción a la poesía, la música y la danza como arte unitario.</h3>

<Button>Aprender más</Button>


<h2>Artistas destacados</h2>


<ArtistCard></ArtistCard>


<h2>Descubre nuevos artistas</h2>

<ArtistCard></ArtistCard>
<ArtistCard></ArtistCard>



            </div>
        );
    }
}

export default Category;
