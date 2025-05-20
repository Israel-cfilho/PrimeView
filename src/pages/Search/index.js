import { useState } from "react";
import api from "../../services/api";
import { FaSearch } from "react-icons/fa";
import './search.css';

function Busca({ setFilmes, setLoading, setTermoBusca }) {
    const [query, setQuery] = useState("");

    async function buscarFilmes(e) {
        e.preventDefault();
        if (!query.trim()) return;

        try {
            setLoading(true);

            const response = await api.get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    api_key: "b21e09efe9e5c65e3e3da7708cab3ba3",
                    language: "pt-BR",
                    query: query
                }
            });
            setTermoBusca(query);
            setFilmes(response.data.results);
            setQuery("");
        } catch (error) {
            console.error("Erro na busca:", error);
            setFilmes([]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="busca-container">
            <form className="form-busca" onSubmit={buscarFilmes}>
                <input
                    type="text"
                    placeholder="Digite o nome do filme"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit"> <FaSearch /> </button>
            </form>
        </div>
    );
}

export default Busca;
