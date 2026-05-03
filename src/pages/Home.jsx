import { useState } from 'react';
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
  const [isLoaded, setIsLoaded] = useState(false);

    return(
      <div class="relative bg-green-800 bg-[radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-size-[20px_20px] cursor-[url('./assets/mouse1.png')],_pointer">
        <Stickers />
        <Headr />
        <div class="grid justify-center">
          <div class="grid bg-amber-500 inset-shadow-sm inset-shadow-amber-800 p-3 rounded-t-2xl gap-1 max-w-400 min-h-screen">
            <div class="grid lg:grid-cols-2 gap-3 content-baseline">
              <div class="grid gap-1 content-baseline left_div">
                <div class="bg-white dark:bg-[#181a1b] inset-shadow-sm inset-shadow-white/40 rounded-t-2xl p-2">
                  <h1 class="dark:text-white text-black text-2xl text-center">This is my old internet website!</h1>
                  <p class="dark:text-gray-200 text-black text-md p-2 pt-0">Hi, this is my old internet blog, a little corner where I always try to make some posts or just stay. I'm not from the blogging era, but one day I stopped and thought, "Why can't I have my own blog?" Is it too old-fashioned for me? You bet it is, but I don't mind. I love that old internet aesthetic, so I've adopted it here :)</p>
                </div>
                <div class="lg:flex p-2 gap-3 cake_div">
                  <div class="p-2 xs:grid xs:justify-center">
                    <iframe class="bg-white border-4 rounded-xl border-amber-200" width="314" height="321" scrolling="no" src="https://gifypet.neocities.org/pet/pet.html?name=Cake&dob=1777655291&gender=f&element=Earth&pet=https%3A%2F%2Fimg.pokemondb.net%2Fsprites%2Fblack-white%2Fanim%2Fnormal%2Fpikachu-f.gif&map=https%3A%2F%2Fimages.stockcake.com%2Fpublic%2F9%2F7%2F9%2F97908976-dccf-4bdf-8f66-81f787b0c28e_medium%2Fenchanted-forest-path-stockcake.jpg&background=&tablecolor=%23529d32&textcolor=black" frameborder="0"></iframe>
                  </div>
                  <div class="grid content-baseline gap-2">
                    <div class="bg-white dark:bg-[#181a1b] inset-shadow-sm inset-shadow-white/40 rounded-t-2xl p-2 self-baseline">
                      <h2 class="dark:text-white text-black text-xl">This is the cake!</h2>
                      <p class="dark:text-gray-200 text-black text-md p-2 pt-">Cake is the mascot of my website! Remember to treat her very well; she always tells me everything that happens here when I'm not around. Be nice to her, pet her, and don't forget to feed her when you come here :)</p>
                    </div>
                    <div class="bg-white dark:bg-[#181a1b] inset-shadow-sm inset-shadow-white/40 rounded-t-2xl p-2 self-baseline">
                      <h2 class="dark:text-white text-black text-xl">Latest Events</h2>
                      <ul class="list-disc marker:text-black dark:marker:text-white pl-6 pt-3">
                        <li class="dark:text-white text-black text-sm">I went out with my girlfriend.</li>
                        <li class="dark:text-white text-black text-sm">I fixed my Camera.</li>
                        <li class="dark:text-white text-black text-sm">I started playing TF2 again.</li>
                        <li class="dark:text-white text-black text-sm">Blog update.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="grid p-2 gap-3 momento_div">
                  <div class="bg-white dark:bg-[#181a1b] inset-shadow-sm inset-shadow-white/40 rounded-t-2xl p-2 self-baseline hidden">
                    <h2 class="dark:text-white text-black text-xl">Media that I am consuming</h2>

                  </div>
                </div>
              </div>
              <div class="grid lg:grid-cols-2 gap-1 content-baseline right_div">
                <div class="bg-white dark:bg-[#181a1b] inset-shadow-sm inset-shadow-white/40 rounded-t-2xl p-2 self-start tags_div">
                <div class="lg:pb-15 xs:pb-0">
                  <h2 class="text-white text-xl text-center">Some tags</h2>
                  <p class="text-white text-md pt-2">Here are some tags that might represent me, since much of what I post on this blog is related to something from here!</p>
                </div>
                <div class="grid grid-cols-3 gap-1">
                  <img src={oldTec}  />
                  <img src={game}   />
                  <img src={connected}  />
                  <img src={argLiker}  />
                  <img src={music}  />
                  <img src={website}  />
              </div>
              </div>
              <div class="grid bg-white dark:bg-[#181a1b] inset-shadow-sm inset-shadow-white/40 rounded-t-2xl p-2 gap-2 song_div">
                <h3 class="text-center text-white text-xl">Songs I've been listening to this week</h3>
                <div class="relative lg:h-50 xs:h-25 w-full">
                  <img src="https://i.scdn.co/image/ab67616d0000b273c7c031ce9d06b131f8563676" class="absolute left-1/2 top-0 -translate-x-1/2 z-20 lg:max-w-[220px] xs:max-w-[100px]" />
                  <img src={cd} class="absolute lg:left-36 xs:left-43 top-4 z-10 lg:max-w-50 xs:max-w-20 animate-spin" />
                </div>
                <div class="pt-3">
                  <h4 class="text-white text-xl text-center">Dracula (JENNIE Remix)</h4>
                  <p class="text-white text-sm text-center">Tame Impala, Feat JENNIE</p>
                </div>
              </div>
              <div class="chat_div and game_div">
                <div class="chat_div pb-2">
                  <iframe src="https://www3.cbox.ws/box/?boxid=3554800&boxtag=VN9wkA" class="xs:h-50 lg:h-37.5" width="100%" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>	
                </div>
                <div class="bg-white dark:bg-[#181a1b] inset-shadow-sm inset-shadow-white/40 rounded-t-2xl p-3 game_div">
                  <div>
                    <h2 class="dark:text-white text-black text-lg text-center">Tried? Let's play</h2>
                    <p class="dark:text-white text-black text-sm text-center">PC only</p>
                  </div>
                  {!isLoaded ? (
                  <div class="flex flex-col items-center justify-center p-4">
                    <button onClick={() => setIsLoaded(true)} class="px-6 py-2 bg-amber-500 rounded-2xl shadow-xl/15 font-snpro inset-shadow-sm inset-shadow-white/80 transition hover:scale-115 hover:shadow-xl/50">Click to Play!</button>
                  </div>
                      ):(
                    <div class="flex justify-center">
                      <iframe src="https://html.itch.zone/html/15584148/index.html" width="250" height="350" scrolling="no" frameborder="0" />
                    </div>)
                  }
                </div>
              </div>
              <div class="bg-white dark:bg-[#181a1b] inset-shadow-sm inset-shadow-white/40 rounded-t-2xl p-3 self-baseline cutepic_div">
                <p class="text-center text-md text-white text-shadow-2xs/60 text-shadow-black">Cute pic of Pokémon's!</p>
                <img src="https://i.pinimg.com/736x/79/fa/03/79fa03c77f75308b56ec3b6b050b4e2c.jpg" class="border-4 border-amber-200/40 rounded-3xl" />
              </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
    )
}

export default Home