import React from 'react'
import ReactPlayer from 'react-player'
import imagePost1 from '../assets/imagesPosts/blog-img.jpg'
import imagePost2 from '../assets/imagesPosts/blog-img-2.png'
import imagePost3 from '../assets/imagesPosts/hellokitty.webp'
import Headr from '../componetes/header'

function Home() {

    return(
      <div class="bg-green-600">
        <Headr />
        <div class="grid justify-center">
          <section class="posts">
            <div class="grid gap-3">
              <div class="post w-auto max-w-xl p-3 bg-white rounded-2xl shadow-xl/30 gap-6 dark:bg-[#181a1b] dark:text-white">
                <ReactPlayer src="https://youtu.be/HVKY_n_A_5Y" style={{width: "100%", height: "15rem", "--controls": "none",}}/>
                <h1 class="text-2xl">The Beautiful play with my friends</h1>
                <span class="text-[9px] align-text-top">14:23 pm 02/06/2026</span>
                <p>Yesterday's play was magnificent, my friends and I were playing (Marcelo even recorded it, thank you Marcelo!). I was playing support with Wuyang and it was a fantastic play.</p>
              </div>
              <div class="post w-auto max-w-xl p-3 bg-white rounded-2xl shadow-xl/30 gap-6 dark:bg-[#181a1b] dark:text-white">
                <img src={imagePost3} class="justify-center rounded-2xl"/>
                <h1 class="text-2xl">I'm excited for the Hello Kitty skins on OW2</h1>
                <span class="text-[9px] align-text-top">16:29 pm 02/05/2026</span>
                <p>I really liked the skin of Juno and Windowaker, I don't now what I will take. But the Juno skin it's soo cutee :3 I think to take the Juno skin!</p>
              </div>
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