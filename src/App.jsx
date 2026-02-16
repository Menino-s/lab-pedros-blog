import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WhoIam from './pages/Whoiami';
import Games from './pages/Games'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/whoiam' element={<WhoIam />} />
        <Route path='/games' element={<Games />} />
      </Routes>
    </Router>
  )
}

export default App
