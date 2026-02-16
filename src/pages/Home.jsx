import Headr from '../componetes/header'
import Posts from '../posts/post.json'

function Home() {

    return(
      <div class="bg-green-600">
        <Headr />
        <div class="grid justify-center">
          <section class="posts">
            <div class="grid lg:grid-cols-3 sm:grid-cols-none gap-3 p-3">
              {
                Posts.map((posts, i) => (
                <div class="post w-auto max-w-xl p-3 bg-white rounded-2xl shadow-xl/30 gap-6 dark:bg-[#181a1b] dark:text-white">
                  <img src={posts.img} class="justify-center rounded-2xl"/>
                  <h1 class="text-2xl font-snpro">{posts.title}</h1>
                  <span class="text-[9px] align-text-top font-snpro">{posts.hour}</span>
                <p>{posts.content}</p>
              </div>
                ))
              }
            </div>
        </section>
        </div>
    </div>
    )
}

export default Home