import React, { useState, useEffect } from "react";
import {
  Route,
  useParams,
  useRouteMatch,
  Link,
  Switch,
} from "react-router-dom";
import ListaCategorias from "../components/ListaCaterogias";
import ListaPost from "../components/ListaPost";
import SubCategoria from "../paginas/SubCategoria";

import { busca } from "../api/api";

import "../assets/css/blog.css";

const Categoria = () => {
  const { id } = useParams();
  const { url, path } = useRouteMatch(); // path: mostra o caminho que está('/categoria/:id'), url: pega a url(/categoria/bem-estar)

  const [subcategorias, setSubCategorias] = useState([]);

  useEffect(() => {
    // precisa colocar essa arrow function para pegar todas subcategoria. Ex: pegar todas subcategorias de bem-estar ou de comportamento
    busca(`/categorias/${id}`, (categoria) => {
      // console.log(categoria);
      // subcategorias: é como chama o campo lá no BD
      setSubCategorias(categoria.subcategorias);
      // console.log(categoria.subcategorias)
    });
  }, [id]);

  return (
    <>
      <div className='container'>
        <h2 className='titulo-pagina'>Pet Notícias</h2>
      </div>

      <ListaCategorias />

      <ul className='lista-categorias container flex'>
        {subcategorias.map((subcategoria) => {
          return (
            <li
              className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
              key={subcategoria}
            >
              {/* mostar todas subcategorias de uma determinada categoria. Ex: categoria bem-estar-> subcategorias: higiene e saude */}
              {/* url: caminho até a categoria */}
              <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
            </li>
          );
        })}
      </ul>

      <Switch>
        {/* ${path}/: mostra se está em bem-estar ou comportamento. É a mesma coisa que fazer path={`/categoria/:id`} */}
        <Route exact path={`${path}/`}>
          {/* vai até o BD e lista todos que tem o mesmo nome do id. Ex: bem-estar ou comportamento */}
          <ListaPost url={`/posts?categoria=${id}`} />
        </Route>

        {/* lista os posts da subCategorias */}
        <Route path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>
      </Switch>
    </>
  );
};

export default Categoria;
