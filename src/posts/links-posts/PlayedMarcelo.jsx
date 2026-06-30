import React from 'react'
import ReactPlayer from 'react-player'
import { Divmain, LayoutWrapper, Container} from "../../components"


function PlayedMarcelo() {
    return (
        <>
        <div class="grid min-h-screen content-around"> 
            <div class="grid justify-center gap-3 p-3">
                <Container>
                    <div class="p-4">
                        <h1 class="text-4xl font-snpro text-white">Some clips and Random Things</h1>
                        <span class="text-[13px] align-text-top font-snpro text-white">11:06 am 06/29/2026</span>
                        <div class="grid justify-center gap-4">
                            <img src="../img-posts/post-img-13-1.jpg" class="lg:max-w-3xl xs:max-w-80 rounded-2xl"/>
                            <img src="../img-posts/post-img-13-2.jpg" class="lg:max-w-3xl xs:max-w-80 rounded-2xl"/>
                            <p></p>
                        </div>
                        <p class="p-4 text-white">I recently started playing Cult of the Lamb again; I had already played the new DLCs, but now that I'm taking a closer look and snapping some screenshots, I'm becoming increasingly impressed. <br /> I have all the DLCs again, and now I have to beat Woolhaven so I can get the Platinum trophy all over again! All of this reminded me that I’ve been playing Cult of the Lamb for four years <br />I’ve been playing since 2022, back during the open beta; I even recorded gameplay for my old channel. <a class="text-blue-500 underline" href="https://www.youtube.com/watch?v=XlhooygZ3y8">Watch the video here!</a></p>     
                        <div class="grid justify-center gap-4">
                            <ReactPlayer src="https://www.youtube.com/watch?v=4uVzfqklGcw" width="920px" height="768px" />
                            <p class="p-4 text-white">In this clip, Marcelo and Taldoqui (playing Yasuo and Jhin) were having a 1v1 when Taldoqui killed Marcelo in an incredible way lol.</p>  
                            <ReactPlayer src="https://www.youtube.com/watch?v=OUzuYu6ZA38" width="920px" height="768px" />
                            <p class="p-4 text-white">In this other clip, Marcelo was in a clutch situation when he pulled off this SICK play. P.S. He won the round.</p>  
                        </div>
                    </div>
                </Container>
            </div>
        </div>
        </>
    )
}

export default PlayedMarcelo