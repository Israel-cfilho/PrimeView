import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './filme-info.css';
import api from "../../services/api";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";

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
                setElenco(elencoResponse.data.cast.slice(0, 15)); // primeiros 15 atores
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
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img className="filme-img" src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: ⭐{filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="_blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>

            <div className="elenco-container">
                <h3>Elenco</h3>
                <div className="elenco-slider">
                    <div className="elenco-track">
                        {[...elenco, ...elenco].map((ator, index) => (
                            ator.profile_path && (
                                <div key={index} className="ator">
                                    <img src={`https://image.tmdb.org/t/p/w200${ator.profile_path}`} alt={ator.name} />
                                    <p>{ator.name}</p>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>

            <div className="avaliacao">
                <h3>Avaliar filme</h3>
                <div className="estrelas">
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
                </div>
                <button className="btn-avaliacao" onClick={avaliarFilme}>Enviar Avaliação ({rating})</button>
            </div>
        </div>
    );
}

export default Filme;
