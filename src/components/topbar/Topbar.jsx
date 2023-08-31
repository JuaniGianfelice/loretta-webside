import "./topbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  
  return (
    <div className={'topbar ' + (menuOpen && 'active') }>
      <div className="left">
        <a href="/"><img src="assets/loretta-logo.png" alt="Loretta" className="nav-logo"/></a>
      </div>
      <div className="right">
        <ul className="options">
          <li><a href="/news">Noticias</a></li>
          <li><a href="/lyrics">Letras</a></li>
          <li><a href="/shows">Shows</a></li>
        </ul>
        <div className="menubutton" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} className="bars"/>
        </div>
      </div>
    </div>
  );
}

export default Topbar