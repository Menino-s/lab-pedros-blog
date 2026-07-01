import { LayoutWrapper, Divmain, Animated, Container } from '../components';
import imgArt from "../json/arts.json"

function Arts() {

    return(
      <div>
          <Divmain>
            <div>
              <h1 class="text-center text-2xl text-white text-shadow-2xs/40 text-shadow-black">My Arts</h1>
              <p class="text-center text-md text-white text-shadow-2xs/40 text-shadow-black">These are some of my alien kitten artworks that I use a lot as WhatsApp stickers.</p>
            </div>
            <Container>
              <div class="grid lg:grid-cols-3 gap-6 p-8 lg:min-w-400">
                {imgArt.map((art)=> (
                  <div class="grid justify-center">
                    <div class="group bg-red-500/40 backdrop-blur-2xl inset-shadow-sm inset-shadow-white/40 p-3 rounded-2xl hover:scale-120 transition scale-90">
                      <img src={art.img} class="rounded-xl" />
                    </div>
                  </div>
                  ))
                } 
              </div>
            </Container>
          </Divmain>
    </div>
    )
}

export default Arts