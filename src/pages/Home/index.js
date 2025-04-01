import './home.css'
import { useEffect, useState } from "react";
import api from '../../services/api';  // Importando o axios da API
import { Link } from "react-router-dom";


function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      try {
        const response = await api.get("movie/now_playing", {
          params: {
            api_key: "b21e09efe9e5c65e3e3da7708cab3ba3",
            language: "pt-BR",
            page: 1,
          }
        });
        
        // Aqui você já tem a lista de filmes em response.data.results
        setFilmes(response.data.results.slice(0, 10)); // Pega os 
        // primeiros 10 filmes
        setLoading(false);

      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
      }
    }

    loadFilmes();  // Chama a função para carregar os filmes
  }, []);  // O array vazio significa que o efeito será executado uma vez


  if(loading) {
    return(
      <div>
        <h2 className='loading'>Carregando filmes...</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => (
          <article key={filme.id}>
            <strong>{filme.title}</strong>
            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}/>
            <Link to={`/filme/${filme.id}`}>Acessar</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home;
