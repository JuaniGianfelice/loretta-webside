import "./social.scss";
import "../../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSpotify, faYoutube, faBandcamp } from "@fortawesome/free-brands-svg-icons";

const Social = () => {

    return (
        <div className="social-footer">
            <div className="social">
                <h1 className="title_foot">Nuestras Redes</h1>
                <div className="links">
                    <a href="https://www.instagram.com/lorettazrt/">
                     <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faSpotify}/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCml2OOrUeUW99-eFE93mGRw">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="https://lorettazrt.bandcamp.com/">
                        <FontAwesomeIcon icon={faBandcamp} />
                    </a>
                </div>
                <h3>Loretta Copyright ©</h3>
            </div>
        </div>
    );
}
  
export default Social