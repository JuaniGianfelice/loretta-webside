import "../index.scss";
import Topbar from '../components/topbar/Topbar';
import Social from "../components/social/Social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const News = () => {
  return (
    <>
      <Topbar />
      <div className="news" id="news">
        <h1 className="titles">Noticias</h1>      
        <div class="postnews">
          <div class="notice">
            <div class="titlenews">
              <p>~ 11/06/22 Mercado de Pases</p>
            </div>
            <div class="infonews">
              <img src="/assets/new5.png" alt="Loretta"/>
              <p>
                Se abre el mercado de pases y luego de semanas de negociaciones no logramos fichar a Leo Messi. <br /> <br />
                La buena noticia fue que en la reserva de un equipo de inferiores se encontraba un muchacho buscando nuevo equipo. 
                Estamos contentos de anunciar a Alejo Llanos como vocalista y fletar a Juani directo a la guitarra. <br /> <br />
                El problema a todo esto es que ahora tenemos dos Alejos pero bueno, salia caro cambiarle el nombre.
              </p>
            </div>
          </div>
          <div class="notice">
            <div class="titlenews">
              <p>~ 03/12/22 Cierre de Año</p>
            </div>
            <div class="infonews">
              <img src="/assets/new4.png" alt="Loretta"/>
              <p>
                Cerramos el año metiendo con una sexta y ultima fecha en <a href="https://www.facebook.com/elzaguancultural/?locale=es_LA">"El Zaguan Cultural"</a>, junto a
                IRV, Nada es real y CRC, con la musicalizacion de Rasta Nation para el evento. <br /> <br />
                Tambien queremos informarles que vamos a tomarnos un bueeeen descanso del escenario para seguir trabajando
                en nuestras canciones y poder traerles a futuro buen material para poder disfrutar. <br /> <br />
                Nos vemos pronto a la vuelta y esten atentos a nuestro <a href="https://www.instagram.com/lorettazrt/"><FontAwesomeIcon icon={faInstagram}/> Instagram.</a>
              </p>
            </div>
          </div>
          <div class="notice">
            <div class="titlenews">
              <p>~ 06/07/22 Radio Make</p>
            </div>
            <div class="infonews">
              <img src="/assets/new3.png" alt="Radio Make"/>
              <p>
                Para aquellos que pudieron escucharnos, el viernes 06/07 los chicos de 
                <a href="https://www.instagram.com/desbordados.ok/"> @Desbordados.ok</a> nos invitaron a
                compartir un programa con ellos, donde no solo presentamos nuestro ultima cancion
                <a href="/conmaquillaje">"Con Maquillaje"</a> en version acustica, sino que tambien nos
                sometimos al desbordado cuestionario que nos hicieron. <br/> <br />
                Escucha el acustico en nuestro <a href="/"> <FontAwesomeIcon icon={faYoutube} /> YouTube</a>
              </p>
            </div>
          </div>
          <div class="notice">
            <div class="titlenews">
              <p>~ 04/06/22 Loretta en Mauri's Bar</p>
            </div>
            <div class="infonews">
            <img src="/assets/new1.jpg" alt="Radio Make"/>
              <p>
                Despues de varios meses sin tocar, volvimos al noble Mauri's Bar que siempre tiene las puertas
                abiertas al publico Loretto, esta vez con la compañia de nuestro gran amigo y cofundador de la
                banda <a href="https://www.instagram.com/rubbydusse/">Rubby Dusserre</a>. <br/> <br />
                En esta oportunidad estrenamos en vivo nuestra nueva cancion "Con Maquillaje" y como el publico
                venia pidiendo, trajimos covers internacionales como
                <a href="https://open.spotify.com/track/2oaK4JLVnmRGIO9ytBE1bt?si=d1eb9678bac84d77">"Dark Necessities"</a> de RHCP y un temazo de fines de los '70 titulado
                <a href="https://open.spotify.com/track/6xE6ZWzK1YDDSYzqOCoQlz?si=6e55d9a51dd9457d">"Last Train to London"</a> de Electric Light Orchestra para darle un buen cierre al show.
              </p>
            </div>
          </div>
          <div class="notice">
            <div class="titlenews">
              <p>~ 01/04/2022 Preparacion de Nuestro Proximo Single</p>
            </div>
            <div class="infonews">
            <img src="/assets/new1.jpg" alt="Radio Make"/>
              <p>
                Si, ya sabemos que no tienen formas de escucharnos ademas de ir a nuestro shows, pero asi es como llevamos gente y funciona. <br/>
                Hablando en serio, estamos preparando nuestro primer single de la mano del productor <a href="https://www.instagram.com/buenocharly/">Charly Bueno</a> y *SPOILER ALERT*... El tan esperado single va a ser <a href="/felicidad">FELICIDAD</a>, el cual como muchos saben es la primer cancion que creamos. <br/>
                Esten atentos a nuestras redes por que pronto se viene con todo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Social/>
    </>
  );
}
  
export default News