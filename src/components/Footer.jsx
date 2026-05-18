import madeReact from '../assets/madein.gif'


export default function Footer() {
  const currentYear = new Date().getFullYear();

    return(
    <>
        <div class="z-20 font-comicsans">    
          <div class="grid">
            <footer class="xs:bg-amber-600 lg:bg-green-700/10 lg:backdrop-blur-lg lg:ring-2 lg:ring-inset lg:ring-white/50 lg:inset-shadow-sm lg:inset-shadow-white/90 p-4 lg:rounded-t-2xl shadow-xl/30">
               <div class="grid justify-center">
                <h4 class="text-white text-shadow-2xs/50 text-shadow-black">&copy;{currentYear} Pedro's Blog</h4>
                <img src={madeReact} />
              </div>
            </footer>
          </div>
        </div>
    </>
)
}

