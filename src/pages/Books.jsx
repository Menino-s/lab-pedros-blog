import { Divmain, Animated, Container } from '../components';
import { useState } from 'react'
import { motion } from 'framer-motion'

function Books() {

  
  const [isFlipped, setIsFlipped] = useState(false)


    return(
      <>
          <Divmain>
            <div>
              <h1 class="text-center text-2xl text-white text-shadow-2xs/40 text-shadow-black">Books</h1>
              <p class="text-center text-md text-white text-shadow-2xs/40 text-shadow-black">These are some books I've been reading recently.</p>
            </div>
            <Container>
              <div class="grid lg:grid-cols-3 gap-6 p-8">
                <motion.div
                transition={{ type: 'spring', stiffness: 1000, damping: 30 }}
                onClick={() => setIsFlipped(!isFlipped)}
                class="cursor-pointer">
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.12 }}
                    style={{ transformStyle: 'preserve-3d' }}>
                      <img src="https://m.media-amazon.com/images/I/91N8saM4HdL._SL1500_.jpg" class="w-full z-50" style={{ backfaceVisibility: 'hidden' }}/>
                      <img src="https://m.media-amazon.com/images/I/81T3OalUEeL._SL1500_.jpg" class="w-full z-50 absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}/>
                  </motion.div>
                </motion.div>
              </div>
            </Container>
          </Divmain>
    </>
    )
}

export default Books