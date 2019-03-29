import React, { Component } from 'react';
import Barra from './Componentes/Barra';
import fundo from './Img/react.png';
import firebase from "./firebase";

const styles = {
    inicial:{
        width:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
};

class App extends Component {
  state = {
    authenticated: false,
  };
  componentDidMount() {
    firebase.auth.onAuthStateChanged((authenticated) => {
      authenticated
          ? this.setState(() => ({
            authenticated: true,
          }))
          : this.setState(() => ({
            authenticated: false,
          }));
    });
  }
  render() {
    return (
      <div className="App" style={{backgroundImage:fundo}} >
          <Barra autenticado={this.state.authenticated}/>
          <div style={styles.inicial}>
              <iframe id="impostometro"
                      src="https://impostometro.com.br/widget/contador/" width="728" height="228"
                      scrolling="no" frameBorder="0"></iframe>

          </div>

      </div>
    );
  }
}

export default App;

