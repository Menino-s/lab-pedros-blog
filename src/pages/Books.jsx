import { Divmain, Animated, Container } from '../components';

function Books() {

    return(
      <>
          <Divmain>
            <div>
              <h1 class="text-center text-2xl text-white text-shadow-2xs/40 text-shadow-black">My Arts</h1>
              <p class="text-center text-md text-white text-shadow-2xs/40 text-shadow-black">These are some of my alien kitten artworks that I use a lot as WhatsApp stickers.</p>
            </div>
            <Container>
              <div class="grid lg:grid-cols-3 gap-6 p-8 lg:min-w-400">

              </div>
            </Container>
          </Divmain>
    </>
    )
}

export default Books