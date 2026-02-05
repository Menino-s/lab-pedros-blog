import { useState } from 'react'
import oldTec from './assets/oldtec.gif'
import Logo from './assets/Logo.gif'
import game from './assets/gamer.gif'
import connected from './assets/connection.gif'
import imagePost1 from './assets/imagesPosts/blog-img.jpg'
import imagePost2 from './assets/imagesPosts/blog-img-2.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body class="bg-green-600">
      <div class="flex items-center justify-center p-2.5">
        <header class="bg-green-400 rounded-2xl p-1.5">
          <img src={Logo} class="items-center-safe"></img>
          <p class="text-center text-shadow-2xs text-shadow-black text-white">Welcome to my old internet website</p>
        </header>
      </div>
      <div class="grid p-3.5">
        <aside class="bg-amber-500 p-2 rounded-2xl shadow-xl/30">
          <div class="flex flex-wrap justify-center gap-0.5">
            <img src={oldTec} />
            <img src={game}  />
            <img src={connected} />
          </div>
          <div class="flex flex-wrap align-middle gap-1 dark:text-white">
            <a href="#" class="p-1.5 bg-green-400 rounded-2xl shadow-xl/15">Who I am?</a>
            <a href="#" class="p-1.5 bg-green-400 rounded-2xl shadow-xl/15">Music I've listened recently</a>
            <a href="#" class="p-1.5 bg-green-400 rounded-2xl shadow-xl/15">Games I play</a>
          </div>
        </aside>
      </div>
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
    </body>
  )
}

export default App
