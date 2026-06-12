import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './components/webmeji/config.js';
import './components/webmeji/webmeji.js';
import './components/webmeji/webmeji.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
