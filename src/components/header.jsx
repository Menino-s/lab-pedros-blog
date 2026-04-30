import Logo from '../assets/Logo.gif'
import nyancat from "../assets/nyancat.gif"
import paras from "../assets/paras.gif"
import luxray from "../assets/luxray.gif"
import { Link } from 'react-router-dom'


export default function Headr() {

    return(
    <>
    <div class="">
          <div class="flex items-center justify-center p-2.5 relative">
            <div class="absolute overflow-hidden w-full h-full pointer-events-none z-0">
              <img src={nyancat} class="w-30 nyancat-animate" />
            </div>
            <header class="bg-green-500 rounded-2xl p-5 shadow-xl/50 inset-shadow-sm inset-shadow-white/50 z-10">
              <Link to="/"> <img src={Logo} class="items-center-safe transition hover:scale-115"></img></Link>
              <p class="text-center text-lg text-shadow-2xs text-shadow-black text-white font-snpro">Welcome to my old internet website</p>
            </header>
          </div>
          <div class="grid p-3.5">
            <aside class="bg-amber-500 p-2 rounded-2xl shadow-xl/30 inset-shadow-sm inset-shadow-amber-800">
              <div class="flex gap-3 justify-between items-center">
                <img src={paras} class="max-h-10 rotate-y-180" />
                <div class="flex flex-wrap items-center gap-1 dark:text-white justify-center">
                  <Link to="/" class="p-1.5 bg-green-400 rounded-2xl shadow-xl/15 font-snpro inset-shadow-sm inset-shadow-white/80 transition hover:scale-115 hover:shadow-xl/50">Home</Link>
                  <Link to="/blog" class="p-1.5 bg-green-400 rounded-2xl shadow-xl/15 font-snpro inset-shadow-sm inset-shadow-white/80 transition hover:scale-115 hover:shadow-xl/50">Blog</Link>
                  <Link to="/whoiam" class="p-1.5 bg-green-400 rounded-2xl shadow-xl/15 font-snpro inset-shadow-sm inset-shadow-white/80 transition hover:scale-115 hover:shadow-xl/50">Who I am?</Link>
                  <Link to="/games" class="p-1.5 bg-green-400 rounded-2xl shadow-xl/15 font-snpro inset-shadow-sm inset-shadow-white/80 transition hover:scale-115 hover:shadow-xl/50">Games I play</Link>
                </div>
                <img src={luxray} class="" />
              </div>

            </aside>
          </div>
    </div>
    </>
)
}

