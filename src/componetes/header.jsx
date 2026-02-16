import oldTec from '../assets/oldtec.gif'
import Logo from '../assets/Logo.gif'
import game from '../assets/gamer.gif'
import connected from '../assets/connection.gif'
import argLiker from "../assets/arg.gif"
import { Link } from 'react-router-dom'


export default function Headr() {

    return(
    <>
          <div class="flex items-center justify-center p-2.5">
            <header class="bg-green-500 rounded-2xl p-5 shadow-xl/50">
              <Link to="/"> <img src={Logo} class="items-center-safe transition hover:scale-115"></img></Link>
              <p class="text-center text-lg text-shadow-2xs text-shadow-black text-white font-snpro">Welcome to my old internet website</p>
            </header>
          </div>
          <div class="grid p-3.5">
            <aside class="bg-amber-500 p-2 rounded-2xl shadow-xl/30">
              <div class="flex flex-wrap justify-center gap-0.5 p-1.5">
                <img src={oldTec} />
                <img src={game}  />
                <img src={connected} />
                <img src={argLiker} />
              </div>
              <div class="flex flex-wrap align-middle gap-1 dark:text-white justify-center">
                <Link to="/" class="p-1.5 bg-green-400 rounded-2xl shadow-xl/15 font-snpro">Home</Link>
                <Link to="/whoiam" class="p-1.5 bg-green-400 rounded-2xl shadow-xl/15 font-snpro">Who I am?</Link>
                <Link to="/games" class="p-1.5 bg-green-400 rounded-2xl shadow-xl/15 font-snpro">Games I play</Link>
              </div>
            </aside>
          </div>
    </>
)
}

