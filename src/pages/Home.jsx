import ReactPlayer from 'react-player'
import Headr from '../components/header'
import Footer from '../components/Footer'
import Stickers from '../components/Stickers'
import Posts from '../posts/post.json'
import { Link } from 'react-router-dom'

function Home() {

    return(
      <div class="relative bg-green-600 cursor-[url('./assets/mouse1.png')],_pointer">
        {/* <Stickers /> */}
        <Headr />
        <div class="grid justify-center z-10">
          <section class="posts">
            <div class="grid lg:grid-cols-3 sm:grid-cols-none gap-3 p-3">
              {
                Posts.map((posts, i) => (
                <div class="post w-auto max-w-xl p-3 bg-white rounded-2xl shadow-xl/30 gap-6 inset-shadow-sm inset-shadow-white/40 dark:bg-[#181a1b] dark:text-white">
                  {posts.video && (
                    <div class="relative w-full h-70 rounded-2xl overflow-hidden">
                      <ReactPlayer src={posts.video} width="100%" height="100%" />
                    </div>
                  )}
                  {posts.img && <img src={posts.img} class="justify-center rounded-2xl"/>}
                  <h1 class="text-2xl font-snpro">{posts.title}</h1>
                  <span class="text-[9px] align-text-top font-snpro">{posts.hour}</span>
                  <p>{posts.content}</p>
                  {posts.link && <Link class="flex pt-24 justify-end" to={posts.link}>LinkZão BRABO</Link>}
              </div>
                ))
              }
            </div>
        </section>
        </div>
        <Footer />
    </div>
    )
}

export default Home