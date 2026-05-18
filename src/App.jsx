import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import WhoIam from './pages/Whoiami';
import Games from './pages/Games';
import NotFound from "./pages/Notfound";
import FirtsPost from './posts/links-posts/Firtspost';
import MusicBackground from './components/Music';
import Background from './components/Background'
import './App.css'

function App() {
  return (
    <Router>
      <Background>
      <MusicBackground/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/blog' element={<Blog />}/>
        <Route path='/whoiam' element={<WhoIam />} />
        <Route path='/games' element={<Games />} />
        <Route path='/firtspost' element={<FirtsPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Background>
    </Router>
  )
}

export default App
