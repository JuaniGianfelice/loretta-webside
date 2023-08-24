import "./index.scss"; /* la chabona lo crea sola en un solo archivo*/
import Home from "./pages/Home";
import Lyrics from "./pages/Lyrics"
import News from "./pages/News"
import Shows from "./pages/Shows"
import { BrowserRouter, Routes, Route} from 'react-router-dom'

const App =() => {
  

  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home/>} />
      <Route path={"/News"} element={<News/>}/>
      <Route path={"/lyrics"} element={<Lyrics/>}/>
      <Route path={"/shows"} element={<Shows/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
