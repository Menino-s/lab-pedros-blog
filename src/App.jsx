import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Blog, WhoIam, Books, Arts, Games, NotFound } from './pages';
import FirtsPost from './posts/links-posts/Firtspost';
import PlayedMarcelo from './posts/links-posts/PlayedMarcelo';
import { Background, Stickers, MusicBackground } from './components';
import './App.css'


function App() {
  return (
    <Router>
      <Background>
      <Stickers/>
      <MusicBackground/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/blog' element={<Blog />}/>
        <Route path='/whoiam' element={<WhoIam />} />
        <Route path='/books' element={<Books />} />
        <Route path='/arts' element={<Arts />} />
        <Route path='/games' element={<Games />} />
        <Route path='/firtspost' element={<FirtsPost />} />
        <Route path='/playmarcelo' element={<PlayedMarcelo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Background>
    </Router>
  )
}

export default App
