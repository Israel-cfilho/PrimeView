import './home.css';
import { useEffect, useState } from "react";
import api from '../../services/api';
import { Spinner, Container } from 'react-bootstrap'; 
import { ListaFilmes, FilmeCard, FilmeImagem, BotaoAcessar } from '../Home/movieStyled';
import Busca from '../Search';

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [termoBusca, setTermoBusca] = useState("");

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
        setFilmes(response.data.results.slice(0, 20));
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
      }
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div>
        <div className="text-center">
          <Spinner>
            <span className="visually-hidden">Carregando...</span>
          </Spinner>
        </div>
      </div>
    );
  }

  return (
    <Container className="py-4">
      <h1 className='titulo-lista'>
        {termoBusca ? `Resultados de: "${termoBusca}"` : "Filmes populares"}
      </h1>
      <Busca setFilmes={setFilmes} setLoading={setLoading} setTermoBusca={setTermoBusca} />
      <ListaFilmes>
        {filmes.map((filme) => (
          <FilmeCard key={filme.id}>
            <FilmeImagem src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} />
            <BotaoAcessar to={`/filme/${filme.id}`}>Acessar</BotaoAcessar>
          </FilmeCard>
        ))}
      </ListaFilmes>
    </Container>
  );
}

export default Home;
