import Headr from '../componetes/header'
import games from '../games/games.json'

function Games() {

    return(
      <div class="bg-green-600">
        <Headr />
        <div class="grid justify-center">
          <section class="posts">
            <div class="grid lg:grid-cols-3 sm:grid-cols-none gap-3 p-3 lg:pb-68 sm:pb-0">
              {
                games.map((gamees) => (
                <div class="post w-auto max-w-xl p-3 bg-white rounded-2xl shadow-xl/30 gap-6 dark:bg-[#181a1b] dark:text-white">
                    <img src={gamees.img} class="justify-center rounded-2xl sm:w-auto h-auto lg:w-2xs"/>
                  <div>
                    <h1 class="text-3xl font-snpro pt-3">{gamees.title}</h1>
                    <span class="text-md align-text-top font-snpro">{gamees.year}</span>
                  </div>
                </div>
                ))
              }
            </div>
        </section>
        </div>
    </div>
    )
}

export default Games