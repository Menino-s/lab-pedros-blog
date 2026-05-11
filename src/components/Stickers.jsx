import { motion } from "framer-motion";
import stickerList from "../json/stickerList.json"

export default function Stickers() {

  return (
    <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
      {stickerList.map((sticker) => (
        <motion.div
          key={sticker.id}
          drag
          dragMomentum={true}
          dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
          class="hidden lg:block absolute w-40 h-40 cursor-grab active:cursor-grabbing pointer-events-auto"
          style={{ 
            top: sticker.top, 
            left: sticker.left, 
            right: sticker.right,
            rotate: sticker.rotate 
          }}
          whileHover={{ scale: 1.1, zIndex: 50 }}
          whileTap={{ scale: 0.9, rotate: 0 }}
        >
          <img 
            src={sticker.src} 
            alt="sticker" 
            class="w-full h-full object-contain select-none shadow-sm" 
            draggable="false"
          />
        </motion.div>
      ))}
    </div>
  );
}