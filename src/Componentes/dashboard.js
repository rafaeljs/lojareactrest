import React, { Component } from 'react'
import firebase from '../firebase';
import Barra from './Barra';

export default class dashboard extends Component {
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
      <div>
          <Barra autenticado={this.state.authenticated}/>
          <iframe id="impostometro"
                  src="https://impostometro.com.br/widget/contador/" width="728" height="228"
                  scrolling="no" frameBorder="0"></iframe>
      </div>
    )
  }
}