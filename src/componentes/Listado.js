import React from 'react';
import Noticia from "./Noticia"
const Listado = ({noticias}) => {
    return (  
        <div className="row">
            {noticias.map(noticia => (
               <Noticia 
                key={noticia.url}
                noticia={noticia}
               />
            ))}
        </div>
    );
}
 
export default Listado;