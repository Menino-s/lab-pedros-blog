import Headr from "../componetes/header"
import creuBrasil from "../assets/Brasil.gif"
import profile from "../assets/profile.jpeg"
import lovegf from "../assets/lovemygf.gif"

function WhoIam() {
    return (
    <body class="bg-green-600">
        <div>
            <Headr />
            <div class="grid justify-center">
                <div class="grid grid-cols-2 w-auto max-w-xl p-3 bg-white rounded-2xl shadow-xl/30 gap-6 dark:bg-[#181a1b] dark:text-white">
                    <div class="grid items-center">
                        <img src={profile} class="rounded-[24rem] w-7xl" />
                    </div>
                    <div>
                        <h1 class="text-2xl">Hi, I am Pedro Menino</h1>
                        <p class="text-xs pt-3">I'm a Brazilian with a curiosity and fascination for old technologies. I'm also a gamer who doesn't have much to say, but I can guarantee posts here on the blog. I'm in my early twenties, studying to be a full-stack developer, and I'm also dating the most beautiful woman in the whole world ♡ <br/>That's a summary of who I am :)</p>
                        <div class="grid grid-cols-2 items-end">
                            <img src={creuBrasil} alt="" />
                            <img src={lovegf} class="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </body>
    )
}

export default WhoIam