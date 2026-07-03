import LayoutWrapper from '../components/Background.jsx';
import { Link } from 'react-router-dom'

function NotFound() {

    return(
      <div>
        <div class="grid justify-center content-center font-comicsans h-screen">
            <div class="grid justify-center rounded-xl justify-items-center bg-green-500/30 shadow-2xl shadow-green-500 backdrop-blur-xl ring-2 ring-inset ring-white/50 inset-shadow-sm inset-shadow-white/90 p-3">
                <h1 class="text-xl text-white">OMG, this part of website isn't corrputed</h1>
                <p class="text-sm text-white">very soon, VERY SOON i can take my website again! I tried everthing, this section he cant see, so i open the door for you guys</p>
                <Link to="/"><button class="dark:text-white text-black px-6 py-2 bg-green-500 rounded-2xl shadow-xl/15 font-comicsans inset-shadow-sm inset-shadow-white/80 transition hover:scale-115 hover:shadow-xl/50 lg:block xs:hidden">Go Home</button></Link>
                <p class="text-sm text-white p-1">Go to home, pls! and tky to be on my side</p>
            </div>
        </div>
    </div>
    )
}

export default NotFound