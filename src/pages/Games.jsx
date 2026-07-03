import { Divmain, Container } from '../components'
import gamesiplayed from '../json/games/gamesiplayed.json'
import gamesiplay from '../json/games/gamesiplay.json'
import gamesiwanttoplay from '../json/games/gamesiwanttoplay.json'
import wishlist from '../json/games/wishlist.json'

function Games() {

    return(
      <>
          <Divmain>
            <div class="grid lg:grid-cols-2 gap-3">
              <Container>
                <h2 class="text-xl">Games that I have already played</h2>
                <div class="grid lg:grid-cols-3 xs:grid-cols-2 gap-3 h-125 overflow-y-auto overflow-x-hidden scroll-smooth p-5">
                  { gamesiplayed.map((game) =>
                    <div >
                      <div class="group relative">
                        <img src={game.img} class="w-50 rounded-xl transition group-hover:scale-105 group-hover:rounded-2xl group-hover:blur-xs" />
                        <p class="transition hidden group-hover:block absolute top-3.5 text-lg text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.title}</p>
                        <span class="transition hidden group-hover:block absolute top-13 text-yellow-300 text-md text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.year}</span>
                        <span class="transition hidden group-hover:block absolute top-13 left-12 text-yellow-300 text-md text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.platform}</span>
                      </div>
                    </div>
                  )}  
                </div>
              </Container>
              <Container>
                <h2 class="text-xl">Games I'm playing</h2>
                <div class="grid lg:grid-cols-3 xs:grid-cols-2 gap-3 h-125 overflow-y-auto overflow-x-hidden scroll-smooth p-5">
                  { gamesiplay.map((game) =>
                    <div >
                      <div class="group relative">
                        <img src={game.img} class="w-50 rounded-xl transition group-hover:scale-105 group-hover:rounded-2xl group-hover:blur-xs" />
                        <p class="transition hidden group-hover:block absolute top-3.5 text-lg text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.title}</p>
                        <span class="transition hidden group-hover:block absolute top-13 text-yellow-300 text-md text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.year}</span>
                        <span class="transition hidden group-hover:block absolute top-13 left-12 text-yellow-300 text-md text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.platform}</span>
                      </div>
                    </div>
                  )}  
                </div>
              </Container>
              <Container>
                <h2 class="text-xl">Games i wanted to play</h2>
                <div class="grid lg:grid-cols-3 xs:grid-cols-2 gap-3 h-125 overflow-y-auto overflow-x-hidden scroll-smooth p-5">
                  { gamesiwanttoplay.map((game) =>
                    <div >
                      <div class="group relative">
                        <img src={game.img} class="w-50 rounded-xl transition group-hover:scale-105 group-hover:rounded-2xl group-hover:blur-xs" />
                        <p class="transition hidden group-hover:block absolute top-3.5 text-lg text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.title}</p>
                        <span class="transition hidden group-hover:block absolute top-13 text-yellow-300 text-md text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.year}</span>
                        <span class="transition hidden group-hover:block absolute top-13 left-12 text-yellow-300 text-md text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.platform}</span>
                      </div>
                    </div>
                  )}  
                </div>
              </Container>
              <Container>
                <h2 class="text-xl">Wishlist</h2>
                <p class="text-sm">Steam Available</p>
                <div class="grid lg:grid-cols-3 xs:grid-cols-2 gap-3 h-125 overflow-y-auto overflow-x-hidden scroll-smooth p-5">
                  { wishlist.map((game) =>
                    <div >
                      <div class="group relative">
                        <img src={game.img} class="w-50 rounded-xl transition group-hover:scale-105 group-hover:rounded-2xl group-hover:blur-xs" />
                        <p class="transition hidden group-hover:block absolute top-3.5 text-lg text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.title}</p>
                        <span class="transition hidden group-hover:block absolute top-13 text-yellow-300 text-md text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.year}</span>
                        <span class="transition hidden group-hover:block absolute top-13 left-12 text-yellow-300 text-md text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.platform}</span>
                      </div>
                    </div>
                  )}  
                </div>
              </Container>
            </div>
          </Divmain>
    </>
    )
}

export default Games