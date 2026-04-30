import ReactPlayer from 'react-player'
import Headr from '../components/header'
import Footer from '../components/Footer'
import Stickers from '../components/Stickers'
import Posts from '../posts/post.json'
import oldTec from '../assets/oldtec.gif'
import connected from '../assets/connection.gif'
import game from '../assets/gamer.gif'
import argLiker from "../assets/arg.gif"
import music from "../assets/music.gif"
import website from "../assets/website.gif"
import cd from "../assets/cd.png"
import { Link } from 'react-router-dom'

function Home() {

    return(
      <div class="relative bg-green-800 bg-[radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-size-[20px_20px] cursor-[url('./assets/mouse1.png')],_pointer">
        <Stickers />
        <Headr />
        <div class="grid justify-center">
          <div class="grid bg-amber-500 p-3 rounded-t-2xl gap-1 max-w-400 h-screen">
            <div class="grid gap-3">
              <div class="bg-white dark:bg-[#181a1b] inset-shadow-sm inset-shadow-white/40 rounded-t-2xl p-2">
                <h1 class="text-white text-2xl text-center">This is my old internet website!</h1>
                <p class="text-gray-200 text-md p-2 pt-0">Hi, this is my old internet blog, a little corner where I always try to make some posts or just stay. I'm not from the blogging era, but one day I stopped and thought, "Why can't I have my own blog?" Is it too old-fashioned for me? You bet it is, but I don't mind. I love that old internet aesthetic, so I've adopted it here :)</p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2 h-65">
              <div class="bg-white dark:bg-[#181a1b] inset-shadow-sm inset-shadow-white/40 rounded-t-2xl p-2 h-65">
                <div class="pb-25">
                  <h2 class="text-white text-xl text-center">Some tags</h2>
                  <p class="text-white text-md pt-2">Here are some tags that might represent me, since much of what I post on this blog is related to something from here!</p>
                </div>
                <div class="grid grid-cols-3 gap-1">
                  <img src={oldTec} class="h-6" />
                  <img src={game}  class="h-6" />
                  <img src={connected} class="h-6" />
                  <img src={argLiker} class="h-6" />
                  <img src={music} class="h-6" />
                  <img src={website} class="h-6" />
              </div>
              </div>
              <div class="grid bg-white dark:bg-[#181a1b] inset-shadow-sm inset-shadow-white/40 rounded-t-2xl p-2 gap-2">
                <h3 class="text-center text-white text-xl">Songs I've been listening to this week</h3>
                <div class="relative h-50 w-full">
                  <img src="https://mfswordsworth.com/wp-content/uploads/2024/10/IMG_2811-1.jpg" class="absolute left-1/2 top-0 -translate-x-1/2 z-20 max-w-[220px]" />
                  <img src={cd} class="absolute left-55 top-4 z-10 max-w-50 animate-spin" />
                </div>
                <h4 class="text-white text-lg text-center">Chromakopia</h4>
                <p class="text-white text-md text-center">Tyler, the Creator</p>
              </div>
              <div>
                <iframe src="https://www3.cbox.ws/box/?boxid=3554800&boxtag=VN9wkA" width="100%" height="350" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>	
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
    )
}

export default Home