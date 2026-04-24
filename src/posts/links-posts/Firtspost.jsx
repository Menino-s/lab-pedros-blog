import ReactPlayer from 'react-player'
import Headr from '../../components/header'
import Footer from '../../components/Footer'
import Stickers from '../../components/Stickers'
import { Link } from 'react-router-dom'

function FirtsPost() {

    return(
      <div class="relative bg-green-600 min-h-screen cursor-[url('./assets/mouse1.png')],_pointer">
        <Stickers />
        <Headr />
        <div class="z-10">
          <section class="">
            <div class="grid justify-center gap-3 p-3">
                <div class="grid lg:min-w-440 xs:min-w-100 p-3 bg-white rounded-2xl shadow-xl/30 inset-shadow-sm inset-shadow-white/40 dark:bg-[#181a1b] dark:text-white">
                    <h1 class="text-4xl font-snpro">First long post</h1>
                    <span class="text-[13px] align-text-top font-snpro">16:01 pm 04/24/2026</span>
                    <div class="grid justify-center">
                        <img src="../img-posts/post-img-9.png" class="max-w-4xl rounded-2xl"/>
                    </div>
                    <p class="p-4">This is the first post to have a dedicated page; not all posts will have this, most will remain just a short post. But even so, I'm very happy about this new phase :)</p>           
                </div>
            </div>
        </section>
        </div>
        <Footer />
    </div>
    )
}

export default FirtsPost