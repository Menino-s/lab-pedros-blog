import madeReact from '../assets/madein.gif'


export default function Footer() {

    return(
    <>
        <div class="">    
          <div class="grid">
            <footer class="bg-amber-600 p-2 rounded-t-2xl shadow-xl/30">
              <div class="flex flex-wrap justify-center gap-0.5 p-1.5">
                <img src={madeReact} />
              </div>
            </footer>
          </div>
        </div>
    </>
)
}

