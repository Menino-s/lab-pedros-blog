import { LayoutWrapper, Divmain, Container } from '../components'
import games from '../games/games.json'

function Games() {

    return(
      <div>
        <LayoutWrapper>
          <Divmain>
            <div class="grid grid-cols-2 gap-3">
              <Container>
                <h2>Games I play</h2>
              </Container>
              <Container>
                <h2>Games i wanted to play</h2>
              </Container>
            </div>
          </Divmain>
        </LayoutWrapper>
    </div>
    )
}

export default Games