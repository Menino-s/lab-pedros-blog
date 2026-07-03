import { Container } from "../../components"

function FirtsPost() {

    return(
      <>
        <div class="z-10">
          <section class="grid min-h-screen content-around">
            <div class="grid justify-center gap-3 p-3 text-white">
                <Container>
                    <h1 class="text-4xl font-snpro ">First long post</h1>
                    <span class="text-[13px] align-text-top font-snpro">16:01 pm 04/24/2026</span>
                    <div class="grid justify-center">
                        <img src="../img-posts/post-img-9.png" class="lg:max-w-4xl xs:max-w-80 rounded-2xl"/>
                    </div>
                    <p class="p-4">This is the first post to have a dedicated page; not all posts will have this, most will remain just a short post. But even so, I'm very happy about this new phase :)</p>           
                </Container>
            </div>
        </section>
        </div>
    </>
    )
}

export default FirtsPost