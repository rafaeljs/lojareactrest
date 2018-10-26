import React, { Component } from 'react';
import Barra from './Componentes/Barra';
import Produtos from './Componentes/Produtos';

class App extends Component {

  render() {
    return (
      <div className="App"  >
          <Barra/>
          <Produtos/>
      </div>
    );
  }
}

export default App;

