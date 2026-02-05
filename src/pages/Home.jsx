import imagePost1 from '../assets/imagesPosts/blog-img.jpg'
import imagePost2 from '../assets/imagesPosts/blog-img-2.png'
import Headr from '../componetes/header'

function Home() {

    return(
      <div class="bg-green-600">
        <Headr />
        <div class="grid justify-center">
          <section class="posts">
            <div class="grid gap-3">
              <div class="post w-auto max-w-xl p-3 bg-white rounded-2xl shadow-xl/30 gap-6 dark:bg-[#181a1b] dark:text-white">
                <img src={imagePost2} class="justify-center rounded-2xl"/>
                <h1 class="text-2xl">We are in Vercel!</h1>
                <span class="text-[9px] align-text-top">9:42 am 02/05/2026</span>
                <p>Officially my idea it is online on the internet :) I am very happy, and can't wait to post more things here :3</p>
              </div>
              <div class="post w-auto max-w-xl p-3 bg-white rounded-2xl shadow-xl/30 gap-6 dark:bg-[#181a1b] dark:text-white">
                <img src={imagePost1} class="justify-center rounded-2xl"/>
                <h1 class="text-2xl">First post here</h1>
                <span class="text-[9px] align-text-top">8:16 am 02/05/2026</span>
                <p>This website is made by me, Pedro Menino. I create this website, to remember the good old blogs, i never lived then phase but i really like the idea</p>
              </div>
            </div>
        </section>
        </div>
    </div>
    )
}

export default Home