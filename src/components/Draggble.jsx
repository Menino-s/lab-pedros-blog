import { motion } from "framer-motion";

export default function Draggable({ src, top, left, size = "w-16" }) {
  return (
    <motion.img
      src={src}
      drag
      // Isso permite que você arraste ele por toda a tela sem limites
      dragMomentum={true} 
      whileHover={{ scale: 1.1 }}
      whileTap={{ cursor: "grabbing" }}
      className={`absolute ${size} z-50 cursor-grab select-none`}
      style={{ top: top, left: left }}
    />
  );
}