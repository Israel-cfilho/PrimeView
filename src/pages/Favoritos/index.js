import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css'
import { toast } from 'react-toastify';




function Favoritos(){


    const [filmes, setFilmes] = useState([]);
    
    useEffect(() => {
    
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);
    
    
    }, [])

    function excluirFilme(id) {
       let filtroFilmes = filmes.filter( (item) => {
        return(item.id !== id)
       }) 

       setFilmes(filtroFilmes);
       localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes) );
       toast.success("Filme excluído com sucesso!")
    }


    return(
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo!</span>}

            <ul>
                {filmes.map((item) => {
                    return(
                        <li className='favoritos-list' key={item.id}>
                            <span className='title-details'>{item.title}</span>
                            <img className='img-details' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
                              <div className='details'>
                                <Link className='link-details' to={`/filme/${item.id}`}>Detalhes</Link>
                                <button className='btn-excluir' onClick={() => excluirFilme(item.id)}>Excluir</button>
                              </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;