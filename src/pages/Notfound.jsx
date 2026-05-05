import LayoutWrapper from '../components/Background.jsx';
import { Link } from 'react-router-dom'

function NotFound() {

    return(
      <div>
        <LayoutWrapper>
        <div class="grid justify-center content-center font-comicsans h-screen">
            <div class="grid justify-center rounded-xl justify-items-center bg-green-500/30 backdrop-blur-xl ring-2 ring-inset ring-white/50 inset-shadow-sm inset-shadow-white/90 p-3">
                <h1 class="text-xl text-white">Maybe this doesn’t exist :/</h1>
                <p class="text-sm text-white">err: <span class="text-red-600">404</span></p>
                <Link to="/"><button class="dark:text-white text-black px-6 py-2 bg-green-500 rounded-2xl shadow-xl/15 font-comicsans inset-shadow-sm inset-shadow-white/80 transition hover:scale-115 hover:shadow-xl/50 lg:block xs:hidden">Go Home</button></Link>
            </div>
        </div>
        </LayoutWrapper>
    </div>
    )
}

export default NotFound