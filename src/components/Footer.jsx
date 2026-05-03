import madeReact from '../assets/madein.gif'


export default function Footer() {
  const currentYear = new Date().getFullYear();

    return(
    <>
        <div class="">    
          <div class="grid">
            <footer class="bg-amber-600 p-4 lg:rounded-t-2xl shadow-xl/30">
              <div class="grid justify-center">
                <h4 class="text-white text-shadow-2xs/50 text-shadow-black">&copy; {currentYear} Pedro's Blog</h4>
                <img src={madeReact} />
              </div>
            </footer>
          </div>
        </div>
    </>
)
}

