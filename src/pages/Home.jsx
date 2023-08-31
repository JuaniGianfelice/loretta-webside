import "../index.scss";

import Social from "../components/social/Social";


const Home = () => {
  return (
    <>
    
    <div id="home">
      <h1 className="titles">Sobre Nosotros</h1>
      <div className="home">
        <div className="left">
          <img src= "/assets/presentation.jpg" alt="Loretta" />
        </div>
        <div className="right">
          <p>
            Somos una banda de Rock-Funk que comenzo a mediados de Agosto del 2020. <br /> <br/>
            Tuvimos algunos cambios de integrantes, hasta llegar a la formación actual la cual conforman: <br /> <br/>
            - Alejo Faya en bajo y coros. <br />
            - Alejo Llanos en voz principal. <br />
            - Juani Gianfelice en guitarra y coros. <br />
            - Nico Stanicio en batería. <br />
            - Valen Vespa en teclas y coros.
          </p>
        </div>
      </div>
    </div>
    <Social/>
    </>
  );
}

export default Home