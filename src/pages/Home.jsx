import { useState } from 'react';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import { oldTec, game, music, cd, connected, website, argLiker, paws, steam, kitty } from '../assets';
import { Divmain, LayoutWrapper, Container} from "../components"
import Posts from '../posts/post.json'


function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

    return(
      <div>
        <LayoutWrapper>
          <Divmain>
            <div class="grid lg:grid-cols-2 gap-3 content-baseline">
              <section class="grid gap-1 content-baseline left_div">
                    <Container>
                      <h1 class="text-2xl text-center">This is my old internet website!</h1>
                      <p class="dark:text-gray-200 text-black text-md p-2 pt-0">Hi, this is my old internet blog, a little corner where I always try to make some posts or just stay. I'm not from the blogging era, but one day I stopped and thought, "Why can't I have my own blog?" Is it too old-fashioned for me? You bet it is, but I don't mind. I love that old internet aesthetic, so I've adopted it here :)</p>
                    </Container>
                    <div class="lg:flex p-2 gap-3 cake_div">
                      <div class="p-2 xs:grid xs:justify-center">
                        <iframe class="bg-white border-4 rounded-xl border-green-200/30" width="314" height="321" scrolling="no" src="https://gifypet.neocities.org/pet/pet.html?name=Cake&dob=1777655291&gender=f&element=Earth&pet=https%3A%2F%2Fimg.pokemondb.net%2Fsprites%2Fblack-white%2Fanim%2Fnormal%2Fpikachu-f.gif&map=https%3A%2F%2Fimages.stockcake.com%2Fpublic%2F9%2F7%2F9%2F97908976-dccf-4bdf-8f66-81f787b0c28e_medium%2Fenchanted-forest-path-stockcake.jpg&background=&tablecolor=%23529d32&textcolor=black" frameborder="0"></iframe>
                      </div>
                      <div class="grid content-baseline gap-2">
                        <Container>
                          <h2 class="text-xl">This is the cake!</h2>
                          <p class="dark:text-gray-200 text-black text-md p-2 pt-">Cake is the mascot of my website! Remember to treat her very well; she always tells me everything that happens here when I'm not around. Be nice to her, pet her, and don't forget to feed her when you come here :)</p>
                        </Container>
                        <Container>
                          <h2 class="text-xl">Status Update</h2>
                          <p class="text-xs text-gray-300/60">Posted 05/11/2026</p>
                          <p>The website is up to date :D</p>
                        </Container>
                      </div>
                    </div>
                    <div class="grid lg:grid-cols-2 p-2 gap-3 momento_div">
                      <Container>
                        <h2 class="text-xl">Games I've been playing!</h2>
                        <div class="flex p-4 gap-2">
                          <div>
                            <img src="https://cdn2.steamgriddb.com/thumb/41dfccda9b5b255be17050bf5fb959f3.png" class="w-40" />
                            <p class="text-md text-center">Team Fortress 2</p>
                          </div>
                          <div>
                            <img src="https://cdn2.steamgriddb.com/thumb/0662aa1719017e0efa5fa8daf0880c6e.jpg" class="w-40" />
                            <p class="text-md text-center">Counter-Strike 2</p>
                          </div>
                        </div>
                      </Container>
                      <Container>
                        <h2 class="text-xl">Games I want to play!</h2>
                        <div class="flex p-4 gap-2">
                          <div>
                            <img src="https://cdn2.steamgriddb.com/thumb/f711cc70dbdab88f32389ec84e56a242.jpg" class="w-40" />
                            <p class="text-md text-center">The Legend of Zelda: Ocarina of Time</p>
                          </div>
                          <div>
                            <img src="https://cdn2.steamgriddb.com/thumb/9c18e95d26ff5ace5a25d31332be86f8.jpg" class="w-69.5" />
                            <p class="text-md text-center">Bombun</p>
                          </div>
                        </div>
                      </Container>
                    </div>
              </section>
              <section class="grid lg:grid-cols-2 gap-1 content-baseline right_div">
                    <Container class="tags_div">
                      <div class="lg:pb-15 xs:pb-0">
                        <h2 class=" text-xl text-center">Some tags</h2>
                        <p class=" text-md pt-2">Here are some tags that might represent me, since much of what I post on this blog is related to something from here!</p>
                      </div>
                      <div class="grid grid-cols-3 gap-1">
                        <img src={oldTec}  />
                        <img src={game}   />
                        <img src={connected}  />
                        <img src={argLiker}  />
                        <img src={music}  />
                        <img src={website}  />
                    </div>
                    <div class="flex justify-center gap-1 p-2">
                        <a href="https://steamcommunity.com/id/pdrinme/"><img src={steam}  /></a>
                        <img src={paws}  />
                    </div>
                    </Container>
                    <div class="grid bg-white dark:bg-[#181a1b] inset-shadow-sm inset-shadow-white/40 rounded-t-2xl p-2 gap-2 song_div">
                      <h3 class="text-center  text-xl">Songs I've been listening to this week</h3>
                      <div class="relative lg:h-50 xs:h-25 w-full">
                        <img src="https://i.scdn.co/image/ab67616d0000b273692200d20ace9f3500171527" class="absolute left-1/2 top-0 -translate-x-1/2 z-20 lg:max-w-55 xs:max-w-25" />
                        <img src={cd} class="absolute lg:left-36 xs:left-43 top-4 z-10 lg:max-w-50 xs:max-w-20 animate-spin" />
                      </div>
                      <div class="pt-3">
                        <h4 class=" text-xl text-center">Snaker Eater</h4>
                        <p class=" text-sm text-center">Cynthia Harrell</p>
                      </div>
                    </div>
                    <div class="chat_div and game_div">
                      <div class="chat_div pb-2">
                        <iframe src="https://www3.cbox.ws/box/?boxid=3554800&boxtag=VN9wkA" class="xs:h-50 lg:h-37.5" width="100%" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>	
                      </div>
                    <div class="flex xs:justify-center">
                      <img src={kitty} class="h-75" />
                      <div class="relative xs:hidden lg:block">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Speech_bubble.svg/3840px-Speech_bubble.svg.png" class="" />
                        <p class="top-134 left-266 fixed text-md">That's strange.</p>
                      </div>
                    </div>
                    </div>
                    <Container class="cutepic_div">
                      <p class="text-center text-md  text-shadow-2xs/60 text-shadow-black">Cute pic of Pokémon's!</p>
                      <img src="https://i.pinimg.com/736x/79/fa/03/79fa03c77f75308b56ec3b6b050b4e2c.jpg" class="border-4 border-amber-200/40 rounded-3xl" />
                    </Container>
              </section>
            </div>
          </Divmain>
          </LayoutWrapper>
      </div>
    )
}

export default Home