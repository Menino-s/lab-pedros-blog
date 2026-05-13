import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import Posts from '../posts/post.json'
import { LayoutWrapper, Divmain, Animated } from '../components';
import { Link } from 'react-router-dom'

function Blog() {

    return(
      <div>
        <LayoutWrapper>
          <Divmain>
            <h1 class="text-center text-2xl text-white text-shadow-2xs/40 text-shadow-black p-3">Recently posts</h1>
            <div class="grid lg:grid-cols-3 sm:grid-cols-none gap-3 p-3">
              {
                Posts.map((posts, i) => (
                  <div class="post w-auto max-w-xl p-3 bg-white rounded-2xl shadow-xl/30 gap-6 inset-shadow-sm inset-shadow-white/40 dark:bg-[#181a1b] dark:text-white">
                    <Animated>
                      {posts.video && (
                        <div class="relative w-full h-70 rounded-2xl overflow-hidden">
                          <ReactPlayer src={posts.video} width="100%" height="100%" />
                        </div>
                      )}
                      {posts.img && <img src={posts.img} class="justify-center rounded-2xl"/>}
                        <h1 class="text-2xl font-snpro">{posts.title}</h1>
                        <span class="text-[9px] align-text-top font-snpro">{posts.hour}</span>
                        <p>{posts.content}</p>
                      {posts.link && <Link class="flex pt-24 justify-end" to={posts.link}><img src={posts.linkimg} class="max-h-6 dark:invert" /></Link>}
                    </Animated>
                  </div>
                ))
              }
            </div>
          </Divmain>
        </LayoutWrapper>
    </div>
    )
}

export default Blog