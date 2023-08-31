import "../index.scss";
import Accordion from "../components/accordion/Accordion";
import Social from "../components/social/Social";

const Lyrics = () => {
  return (
    <>
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