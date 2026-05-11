import { useState } from 'react';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import { oldTec, game, music, cd, connected, website, argLiker, musical, brazil, kittys, paws, steam, wii, resolution, github, kitty } from '../assets';
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
                      <h1 class="text-2xl text-center">Welcome to my Blog!</h1>
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
                            <img src="https://cdn2.steamgriddb.com/thumb/41dfccda9b5b255be17050bf5fb959f3.png" class="w-40 h-60" />
                            <p class="text-md text-center">Team Fortress 2</p>
                          </div>
                          <div>
                            <img src="https://cdn2.steamgriddb.com/thumb/40a6038002e256e8ade0a4f29a98e616.jpg" class="w-40 h-60" />
                            <p class="text-md text-center">Pokémon White Version</p>
                          </div>
                        </div>
                      </Container>
                      <Container>
                        <h2 class="text-xl">Games I want to play!</h2>
                        <div class="flex p-4 gap-2">
                          <div>
                            <img src="https://cdn2.steamgriddb.com/thumb/f519bcff8be73f7baa7123d387778ba0.jpg" class="w-69.5 h-60" />
                            <p class="text-md text-center">Hey you, Pikachu!</p>
                          </div>
                          <div>
                            <img src="https://cdn2.steamgriddb.com/thumb/f711cc70dbdab88f32389ec84e56a242.jpg" class="w-40 h-60" />
                            <p class="text-md text-center">The Legend of Zelda: Ocarina of Time</p>
                          </div>
                        </div>
                      </Container>
                    </div>
              </section>
              <section class="grid lg:grid-cols-2 gap-1 content-baseline right_div">
                    <Container class="tags_div">
                      <div class="lg:pb-10 xs:pb-0">
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
                        <img src={musical}  />
                        <img src={brazil}  />
                        <img src={kittys}  />
                    </div>
                    <div class="flex justify-center gap-1 p-2 min-w-8 content-center">
                        <a href="https://steamcommunity.com/id/pdrinme/"><img src={steam} /></a>
                        <a href="https://github.com/pdrinme"><img src={github}  /></a>
                        <img src={resolution}  />
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
                    <div class="flex xs:hidden lg:flex">
                      <img src={kitty} class="h-75" />
                      <div class="relative xs:hidden lg:block">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Speech_bubble.svg/3840px-Speech_bubble.svg.png" class="" />
                        <p class="top-131 left-267 fixed text-md">Why don't you <br/> talk to Cake?</p>
                      </div>
                    </div>
                    </div>
                    <Container class="cutepic_div">
                      <p class="text-center text-md  text-shadow-2xs/60 text-shadow-black">Cute pic of Pokémon's!</p>
                      <img src="https://i.pinimg.com/736x/a8/c4/6f/a8c46fc35a818a340049369e26e5de7b.jpg" class="border-4 border-amber-200/40 rounded-3xl" />
                    </Container>
              </section>
            </div>
          </Divmain>
          </LayoutWrapper>
      </div>
    )
}

export default Home