import { Link } from "react-router-dom";
import './erro.css'


function Error() {
    return(
        <div className="erro">
            <h1>404</h1>
            <p>Página não encontrada</p>
            <Link to="/">Veja todos os filmes!</Link>
        </div>
    )
}

export default Error;