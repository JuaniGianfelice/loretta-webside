import "./index.scss";
import Home from "./pages/Home";
import Lyrics from "./pages/Lyrics"
import News from "./pages/News"
import Shows from "./pages/Shows"
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';

function App () {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
