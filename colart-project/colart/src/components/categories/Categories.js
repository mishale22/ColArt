import React, { Component } from 'react';

class Categories extends Component {
  render() {
    
    return (
      <div className="Categories">
     <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Música</button>
  <button type="button" class="btn btn-secondary">Pintura</button>
  <button type="button" class="btn btn-secondary">Teatro</button>
  <button type="button" class="btn btn-secondary">Danza</button>
</div>
    
      </div>
    );
  }
}

export default Categories;
