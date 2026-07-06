import Logo from '../assets/Logo.gif'
import nyancat from "../assets/nyancat.gif"
import paras from "../assets/paras.gif"
import luxray from "../assets/luxray.gif"
import { Link } from 'react-router-dom'


export default function Headr() {

    return(
    <>
    <div class="">
      <div class="grid pb-2 justify-items-center">
        <div class="bg-white/1 rounded-b-2xl backdrop-blur-md backdrop-brightness-105 shadow-xl/50 drop-shadow-2xl drop-green-700 ring-2 ring-inset ring-white/50 inset-shadow-sm inset-shadow-white/90 grid justify-center content-center">
          <div class="flex items-center justify-center p-2.5 relative">
            <div class="absolute overflow-hidden w-full h-full pointer-events-none z-0">
              <img src={nyancat} class="w-30 nyancat-animate" />
            </div>
            <header class="bg-green-800/60 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[6px_6px] rounded-2xl p-5 shadow-xl/50 ring-2 ring-inset ring-white/50 inset-shadow-sm inset-shadow-white/90 z-10">
              <Link to="/"><img src={Logo} class="items-center-safe justify-center transition hover:scale-115"></img></Link>
              <p class="text-center text-lg text-shadow-2xs text-shadow-black text-white font-comicsans">Welcome to my old internet website</p>
            </header>
          </div>
          <div class="grid p-3.5">
            <aside class="bg-green-800/40 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[6px_6px] backdrop-blur-md p-2 rounded-2xl shadow-xl/30 ring-2 ring-inset ring-white/50 inset-shadow-sm inset-shadow-white/90">
              <div class="flex lg:gap-142 justify-between items-center">
                <img src={paras} class="max-h-10 rotate-y-180" />
                <div class="flex flex-wrap items-center gap-0.5 justify-center">
                  <Link to="/" class="p-1.5 bg-green-950/70 rounded-xl shadow-xl/15 font-comicsans inset-shadow-sm inset-shadow-white/80 transition hover:scale-115 hover:shadow-xl/50 hover:shadow-white/50 hover:bg-green-800 text-white">Home</Link>
                  <Link to="/blog" class="relative p-1.5 bg-green-950/70 rounded-xl shadow-xl/15 font-comicsans inset-shadow-sm inset-shadow-white/80 transition hover:scale-115 hover:shadow-xl/50 hover:shadow-white/50 hover:bg-green-800 text-white">Blog</Link>
                  <Link to="/whoiam" class="p-1.5 bg-green-950/70 rounded-xl shadow-xl/15 font-comicsans inset-shadow-sm inset-shadow-white/80 transition hover:scale-115 hover:shadow-xl/50 hover:shadow-white/50 hover:bg-green-800 text-white">Who I am?</Link>
                  <Link to="/404" class="p-1.5 bg-green-950/70 rounded-xl shadow-xl/15 font-comicsans inset-shadow-sm inset-shadow-white/80 transition hover:scale-115 hover:shadow-xl/50 hover:shadow-white/50 hover:bg-green-800 text-white active:scale-95">Books</Link>
                  <Link to="/arts" class="relative p-1.5 bg-green-950/70 rounded-xl shadow-xl/15 font-comicsans inset-shadow-sm inset-shadow-white/80 transition hover:scale-115 hover:shadow-xl/50 hover:shadow-white/50 hover:bg-green-800 text-white">Arts</Link>
                  <Link to="/games" class="p-1.5 bg-green-950/70 rounded-xl shadow-xl/15 font-comicsans inset-shadow-sm inset-shadow-white/80 transition hover:scale-115 hover:shadow-xl/50 hover:shadow-white/50 hover:bg-green-800 text-white active:scale-95">Games I play</Link>
                </div>
                <img src={luxray} class="" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
    </>
)
}

