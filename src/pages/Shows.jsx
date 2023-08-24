import "../index.scss";
import Topbar from '../components/topbar/Topbar';
import Social from "../components/social/Social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faCircleCheck, faPencil } from "@fortawesome/free-solid-svg-icons";

const Shows = () => {
    return (
      <>
        <Topbar />
        <div className="shows" id="shows">
            <h1 className="titles">Shows</h1>      
            <div className="tour">
              <div className="tourdate">
                    <div>
                        <h3>19/02</h3>
                        <h3>2022</h3>
                    </div>
                    <div>
                        <h4>Complejo Poppo's</h4>
                        <h5>Alberti 1398, Campana</h5>
                    </div>
                    <div>
                        <h5>Junto a</h5>
                        <h4>IRV - Fragmentados</h4>
                    </div>
                    <div className="ticket">
                    <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
              </div>
              <div className="tourdate">
                  <div>
                      <h3>04/06</h3>
                      <h3>2022</h3>
                  </div>
                  <div>
                      <h4>Mauri's Bar</h4>
                      <h5>Dorrego 745, Zarate</h5>
                  </div>
                  <div>
                      <h5>Junto a</h5>
                      <h4>Rubby Dusserre</h4>
                  </div>
                  <div class="ticket">
                      <FontAwesomeIcon icon={faCircleCheck} />
                  </div>
              </div>
              <div className="tourdate">
                  <div>
                      <h3>30/09</h3>
                      <h3>2022</h3>
                  </div>
                  <div>
                        <h4>Mauri's Bar</h4>
                        <h5>Dorrego 745, Zarate</h5>
                  </div>
                  <div>
                      <h5>Junto a</h5>
                      <h4>Fermento Lactico</h4>
                  </div>
                  <div class="ticket">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  </div>
              </div>
              <div className="tourdate">
                  <div>
                      <h3>05/11</h3>
                      <h3>2022</h3>
                  </div>
                  <div>
                      <h4>Imagen Resto Bar</h4>
                      <h5>Brown 251, Zarate</h5>
                  </div>
                  <div>
                      <h5>Junto a</h5>
                      <h4>Irreverentes</h4>
                  </div>
                  <div class="ticket">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  </div>
              </div>
              <div className="tourdate">
                  <div>
                      <h3>12/11</h3>
                      <h3>2022</h3>
                  </div>
                  <div>
                      <h4>Hellheim Bar</h4>
                      <h5>19 de Marzo 450, Zarate</h5>
                  </div>
                  <div>
                      <h5>Junto a</h5>
                      <h4>Tabebuia - Psiberia</h4>
                  </div>
                  <div class="ticket">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  </div>
              </div>
              <div className="tourdate">
                  <div>
                      <h3>03/12</h3>
                      <h3>2022</h3>
                  </div>
                  <div>
                      <h4>El Zaguan Cultural</h4>
                      <h5>Ameghino 978, Zarate</h5>
                  </div>
                  <div>
                      <h5>Junto a</h5>
                      <h4>IRV - Nada es real - GRC - Rasta Nation</h4>
                  </div>
                  <div class="ticket">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  </div>
              </div>
              <div className="tourdate">
                  <div>
                      <h3>2023</h3>
                      
                  </div>
                  <div>
                      <h4>Proximamente</h4>
                      
                  </div>
                  <div>
                      <h4>Show en Proceso</h4>
                      
                  </div>
                  <div class="ticket">
                    <FontAwesomeIcon icon={faPencil} />
                  </div>
              </div>
            </div>
        </div>
        <Social/>
      </>
    );
  }
  
  export default Shows