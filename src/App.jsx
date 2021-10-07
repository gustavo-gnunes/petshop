import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Pagina404 from "./paginas/Pagina404";
import Cabecalho from "./components/Cabecalho";
import Post from './paginas/Post';
import Categoria from "./paginas/Categoria";

import "./assets/css/base/base.css";

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/categoria/:id' component={Categoria} />
        <Route path='/posts/:id' component={Post} />
        <Route component={Pagina404} />
      </Switch>
    </Router>
  );
}

export default App;
