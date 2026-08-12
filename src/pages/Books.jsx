import { Divmain, Container } from '../components';
import { useState } from 'react';
import { motion } from 'framer-motion';
import book from "../json/books.json";

function Books() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <>
      <Divmain>
        <div>
          <h1 class="text-center text-2xl text-white text-shadow-2xs/40 text-shadow-black">
            Books
          </h1>
          <p class="text-center text-md text-white text-shadow-2xs/40 text-shadow-black">
            These are some books I've been reading recently.
          </p>
        </div>

        <Container>
          <div className="grid lg:grid-cols-3 gap-6 p-8">
            {book.map((bookies, index) => (
              <motion.div
                key={bookies.title || index}
                transition={{ type: 'spring', stiffness: 1000, damping: 30 }}
                onClick={() => setFlippedIndex((prev) => (prev === index ? null : index))}
                class="cursor-pointer h-107.5 perspective-[1000px]"
              >
                <motion.div
                  animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.12 }}
                  style={{
                    transformStyle: 'preserve-3d',
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <img
                    src={bookies.frontimg}
                    class="w-full h-full object-cover rounded-xl transition hover:scale-110"
                    style={{
                      backfaceVisibility: 'hidden',
                      objectFit: 'cover',
                    }}
                    alt={bookies.title}
                  />
                  <img
                    src={bookies.backimg}
                    class="w-full h-full object-cover absolute inset-0 rounded-xl transition hover:scale-110"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      objectFit: 'cover',
                    }}
                    alt={`${bookies.title} cover back`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Divmain>
    </>
  );
}

export default Books;