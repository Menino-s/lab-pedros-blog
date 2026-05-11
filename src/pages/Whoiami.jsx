import { profile, profilepic, profileBorder, creuBrasil, lovegf, oldTec, game, music, cd, connected, website, argLiker, musical, brazil, kittys, } from "../assets"
import LayoutWrapper from "../components/Background"
import { Container, Divmain } from "../components"

function WhoIam() {
    return (
        <div >
            <LayoutWrapper>    
                <Divmain>
                    <div class="grid ">
                        <Container>
                            <div class="flex flex-wrap justify-center p-5 gap-1">
                                <div class="group group-hover:transition">
                                    <div class="relative hidden group-hover:block">
                                        <img src={profilepic} class="rounded-[24rem] w-3xs " />
                                        <img src={profileBorder} class="absolute inset-0" />
                                    </div>
                                    <div class="group-hover:hidden block">
                                        <img src={profile} class="rounded-[20rem] w-3xs" />
                                    </div>
                                </div>
                                <div class="text-center p-3">
                                    <h1 class="text-3xl">Hi There!</h1>
                                    <p class="text-md pt-3">I'm Pedro (aka the blog owner), a twenty-something guy studying to be a Full-Stack developer. I’m a gamer and designer at heart—I love playing rogue-likes and platformers, and while I do dabble in competitive games, I’m honestly terrible at them LOL. I’m also in a relationship with the most beautiful woman in the world ♡. I have a huge thing for Y2K aesthetics, Frutiger Aero, and the old internet. <br />That’s a short summary of who I am—enjoy the blog! :)</p>
                                    <div class="flex justify-between">
                                        <div class="grid grid-cols-3 justify-center content-center">
                                            <img src={lovegf} />
                                            <img src={oldTec}  />
                                            <img src={game}   />
                                            <img src={connected}  />
                                            <img src={argLiker}  />
                                            <img src={music}  />
                                            <img src={website}  />
                                            <img src={musical}  />
                                            <img src={brazil}  />
                                            <img src={kittys}  />
                                        </div>
                                        <div>
                                            <img src={creuBrasil} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </Divmain>
            </LayoutWrapper>
        </div>
    )
}

export default WhoIam