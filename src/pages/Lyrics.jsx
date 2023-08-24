import "../index.scss";
import Topbar from '../components/topbar/Topbar';
import Accordion from "../components/accordion/Accordion";
import Social from "../components/social/Social";

const Lyrics = () => {
  return (
    <>
    <Topbar />
    <div className="lyrics">
      <div className="title">
        <h1 className="titles">Letras</h1>
        <Accordion />
      </div>
    </div>
    <Social/>
    </>
  );
}

export default Lyrics