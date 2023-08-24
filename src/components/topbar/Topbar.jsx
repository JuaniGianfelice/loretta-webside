import "./topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="/"><img src="assets/loretta-logo.png" alt="Loretta" className="nav-logo"/></a>
        </div>
        <div className="right">
          <ul className="options">
            <li><a href="/news">Noticias</a></li>
            <li><a href="/lyrics">Letras</a></li>
            <li><a href="/shows">Shows</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Topbar