import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import News from "./pages/News";
import Gigs from "./pages/Gigs";
import Bio from "./pages/Bio";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import "./fonts/Homade.otf";

function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/News" element={<News />}/>
        <Route path="/Gigs" element={<Gigs />}/>
        <Route path="/Bio" element={<Bio/>}/>
        <Route path="/Media" element={<Media/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </Router>
  );
}

export default App;
