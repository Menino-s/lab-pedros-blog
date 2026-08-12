import madeReact from '../assets/madein.gif'


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div class="z-20 font-comicsans lg:pt-3">
        <div class="grid">
          <footer class="bg-white/1 backdrop-blur-lg ring-2 ring-inset ring-white/50 inset-shadow-sm inset-shadow-white/90 p-4 lg:rounded-t-2xl shadow-xl/30">
            <div class="grid justify-center">
              <h4 class="text-white text-shadow-2xs/50 text-shadow-black text-center">&copy;{currentYear} Pedro's Blog</h4>
              <p class="text-white text-sm text-shadow-2xs/50 text-shadow-black"> Made by Me <img src={madeReact} class="inline-block" /> </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

