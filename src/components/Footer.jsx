import madeReact from '../assets/madein.gif'


export default function Footer() {

    return(
    <>
        <div class="flex items-center justify-center p-2.5">    
          <div class="grid p-3.5">
            <footer class="bg-amber-500 p-2 rounded-2xl shadow-xl/30">
              <div class="flex flex-wrap justify-center gap-0.5 p-1.5">
                <img src={madeReact} />
              </div>
            </footer>
          </div>
        </div>
    </>
)
}

