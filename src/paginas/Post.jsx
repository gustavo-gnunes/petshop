import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { busca } from "../api/api";

import "../assets/css/post.css";

const Post = () => {
  let history = useHistory(); // dá acesso ao histórico de navegação
  const { id } = useParams();
  const [post, setPost] = useState({});

  // catch: pega a falha de uma resposta, caso o usuário digitar uma url inválida, deve aparecer a Pagina404.jsx
  // se a resposta for ok, ela vai para a url certa-> busca(`/posts/${id}`, setPost) e exibe a página
  useEffect(() => {
    busca(`/posts/${id}`, setPost).catch(() => {
      // caso a rota não existir ele vai para rota 404(/404). essa rota /404 é uma rota que não existe, ele vai procurar a rota no arquivo App.js, não vai achar e vai mostrar a Pagina404
      history.push("/404"); // transforma o histórioco de navegação. Através do push conseguimos navegar até a rota indicada, neste caso (/404)
    });
  }, [id, history]);

  return (
    <main className='container flex flex--centro'>
      <article className='cartao post'>
        <h2 className='cartao__titulo'>{post.title}</h2>
        <p className='carta__texto'>{post.body}</p>
      </article>
    </main>
  );
};

export default Post;
