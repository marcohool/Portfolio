import { motion, useScroll } from "framer-motion"
import "./scrollbar.css"

export default function ScrollBar() {
   const { scrollYProgress } = useScroll();

   return (
      <div className="scrollbar">
         <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      </div>
   )
}