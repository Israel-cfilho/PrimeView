import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './filme-info.css';
import api from "../../services/api";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";
import { Container } from "react-bootstrap";
import {
    FilmeInfo,
    BackgroundFilme,
    FilmeConteudo,
    FilmeCapa,
    CapaEBotoes,
    AreaButtons,
    FilmeTexto,
    Generos,
    Sinopse,
    ElencoContainer,
    ElencoSlider,
    ElencoTrack,
    Ator,
    Avaliacao,
    Estrelas,
    BtnAvaliacao
} from './filmeStyled'

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjFlMDllZmU5ZTVjNjVlM2UzZGE3NzA4Y2FiM2JhMyIsIm5iZiI6MTc0MTYzMDE4NS44ODMwMDAxLCJzdWIiOiI2N2NmMmFlOTg1NmUxM2NiM2QxMTNlZDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.v0VWAPP_CgPAi53SwF1ugno_u9GRm8POneOeUaLhpBM";

function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const [filme, setFilme] = useState({});
    const [elenco, setElenco] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            try {
                const filmeResponse = await api.get(`/movie/${id}`, {
                    params: {
                        api_key: "b21e09efe9e5c65e3e3da7708cab3ba3",
                        language: "pt-BR",
                    }
                });

                const elencoResponse = await api.get(`/movie/${id}/credits`, {
                    params: {
                        api_key: "b21e09efe9e5c65e3e3da7708cab3ba3",
                        language: "pt-BR",
                    }
                });

                setFilme(filmeResponse.data);
                setElenco(elencoResponse.data.cast.slice(0, 15));
                setLoading(false);
            } catch (error) {
                console.log("Filme não encontrado");
                navigate("/", { replace: true });
            }
        }

        loadFilme();

        return () => {
            console.log("Componente foi desmontado");
        };
    }, [navigate, id]);

    async function avaliarFilme() {
        try {
            const response = await api.post(`https://api.themoviedb.org/3/movie/${id}/rating`, {
                value: rating
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json;charset=utf-8",
                    accept: "application/json"
                }
            });
            toast.success("Avaliação enviada com sucesso!");
            console.log(response.data);
            setRating(0);
        } catch (error) {
            console.error("Erro ao enviar avaliação:", error);
            toast.error("Erro ao enviar avaliação.");
        }
    }

    function salvarFilme() {
        const minhaLista = localStorage.getItem("@primeflix");
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((item) => item.id === filme.id);
        if (hasFilme) {
            toast.error("Esse filme já está na sua lista!");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!");
    }

    if (loading) {
        return (
            <div className="filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        );
    }



    return (
        <FilmeInfo>
            <BackgroundFilme
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${filme.backdrop_path})`,
                }}
            >
                <div className="overlay">
                    <Container>
                        <FilmeConteudo>
                            <CapaEBotoes>
                                <FilmeCapa>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                                        alt={filme.title}
                                    />
                                </FilmeCapa>
                                <AreaButtons>
                                    <button onClick={salvarFilme}>Salvar</button>
                                    <button>
                                        <a
                                            target="_blank"
                                            rel="external"
                                            href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
                                        >
                                            Trailer
                                        </a>
                                    </button>
                                </AreaButtons>
                            </CapaEBotoes>

                            <FilmeTexto>
                                <h1>{filme.title}</h1>

                                <Generos>
                                    {filme.genres?.map((g, i) => (
                                        <span key={i} className="genero-tag">
                                            {" "}
                                            {g.name}
                                        </span>
                                    ))}
                                </Generos>

                                <h3>Sinopse</h3>
                                <Sinopse>
                                    <p>{filme.overview}</p>
                                    <strong>Avaliação: ⭐{filme.vote_average.toFixed(1)} / 10</strong>
                                </Sinopse>

                                <ElencoContainer>
                                    <h3>Elenco</h3>
                                    <ElencoSlider>
                                        <ElencoTrack>
                                            {[...elenco, ...elenco].map(
                                                (ator, index) =>
                                                    ator.profile_path && (
                                                        <Ator key={index}>
                                                            <img
                                                                src={`https://image.tmdb.org/t/p/w200${ator.profile_path}`}
                                                                alt={ator.name}
                                                            />
                                                            <p>{ator.name}</p>
                                                        </Ator>
                                                    )
                                            )}
                                        </ElencoTrack>
                                    </ElencoSlider>
                                </ElencoContainer>
                            </FilmeTexto>
                        </FilmeConteudo>
                    </Container>
                </div>
            </BackgroundFilme>

            <Avaliacao>
                <h3>Avaliar filme</h3>
                <Estrelas>
                    {[...Array(5)].map((_, index) => {
                        const value = index + 1;
                        return (
                            <label key={value}>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={value}
                                    onClick={() => setRating(value)}
                                />
                                <FaStar
                                    className="star"
                                    color={value <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                    size={30}
                                    onMouseEnter={() => setHover(value)}
                                    onMouseLeave={() => setHover(null)}
                                />
                            </label>
                        );
                    })}
                </Estrelas>
                <BtnAvaliacao onClick={avaliarFilme}>
                    Enviar Avaliação ({rating})
                </BtnAvaliacao>
            </Avaliacao>
        </FilmeInfo>
    );
}


export default Filme;
