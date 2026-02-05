import oldTec from '../assets/oldtec.gif'
import Logo from '../assets/Logo.gif'
import game from '../assets/gamer.gif'
import connected from '../assets/connection.gif'
import { Link } from 'react-router-dom'


export default function Headr() {

    return(
    <>
          <div class="flex items-center justify-center p-2.5">
            <header class="bg-green-400 rounded-2xl p-1.5">
              <Link to="/"> <img src={Logo} class="items-center-safe"></img></Link>
              <p class="text-center text-shadow-2xs text-shadow-black text-white">Welcome to my old internet website</p>
            </header>
          </div>
          <div class="grid p-3.5">
            <aside class="bg-amber-500 p-2 rounded-2xl shadow-xl/30">
              <div class="flex flex-wrap justify-center gap-0.5">
                <img src={oldTec} />
                <img src={game}  />
                <img src={connected} />
              </div>
              <div class="flex flex-wrap align-middle gap-1 dark:text-white">
                <Link to="/whoiam" class="p-1.5 bg-green-400 rounded-2xl shadow-xl/15">Who I am?</Link>
                <a href="#" class="p-1.5 bg-green-400 rounded-2xl shadow-xl/15">Music I've listened recently</a>
                <a href="#" class="p-1.5 bg-green-400 rounded-2xl shadow-xl/15">Games I play</a>
              </div>
            </aside>
          </div>
    </>
)
}

