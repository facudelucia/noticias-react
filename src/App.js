import React, { Fragment, useState, useEffect } from "react";
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import Listado from "./componentes/Listado";

function App() {
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=54e3ed198110442eabc78c139313d99e`
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles)
    }
    consultarAPI()
  }, [categoria])
  return (
    <Fragment>
      <Header titulo="Noticias" />
      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
        <Listado 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
