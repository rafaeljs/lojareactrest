import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Logar from './Componentes/login';
import Cadastrar from './Componentes/Cadastro';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path={"/"} exact={true} component={App}/>
            <Route path={"/login"} exact={true} component={Logar}/>
            <Route path={"/cadastrar"} exact={true} component={Cadastrar}/>
        </Switch>
    </BrowserRouter>

    , document.getElementById('root'));
