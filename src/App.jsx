import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WhoIam from './pages/Whoiami';
import Games from './pages/Games'
import FirtsPost from './posts/links-posts/Firtspost';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/whoiam' element={<WhoIam />} />
        <Route path='/games' element={<Games />} />
        <Route path='/firtspost' element={<FirtsPost />} />
      </Routes>
    </Router>
  )
}

export default App
