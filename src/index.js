import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Logar from './Componentes/login';
import Cadastrar from './Componentes/Cadastro';
import Dashboard from './Componentes/dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path={"/"} exact={true} component={App}/>
            <Route path={"/login"} exact={true} component={Logar}/>
            <Route path={"/cadastrar"} exact={true} component={Cadastrar}/>
            <Route path={"/dashboard"} exact={true} component={Dashboard}/>
        </Switch>
    </BrowserRouter>

    , document.getElementById('root'));
