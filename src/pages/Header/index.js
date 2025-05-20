import { Link } from "react-router-dom";
import './header.css'


function Header() {
    return(
        <header>
            <Link className="logo" to="/">Prime<span>View</span></Link>
            <div className="header">
            <Link className="favoritos" to="/favoritos">Meus filmes</Link>
            {/* <Link><ion-icon name="person-circle-outline"></ion-icon></Link> */}
            </div>
        </header>
    )
}

export default Header;