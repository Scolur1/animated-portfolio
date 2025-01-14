import {motion} from "framer-motion"
import { useState } from "react"

const Test = () => {
 
  const [open, setOpen] = useState(false)

  const variants ={
    visible:{
      opacity:1,
      //transition: {type: "spring", stiffness: 100, damping: 100},
      transition:{staggerChildren:0.2}
    },
    hidden: {opacity: 0}
  }

  const items = [
    "item1", "item2","item3", "item4"
  ]
  return(
  <div className="course">
    {/* <motion.div className="box" 
                variants={variants}
                // initial="hidden"
                // animate="visible"
                transition={{duration:2}}
                animate={open ? "visible" : "hidden"}
                drag
    ></motion.div> */}
    {/* <button onClick={()=>setOpen(prev=>!prev)}>Click</button> */}
    <motion.ul initial="hidden" animate="visible" variants={variants}>
      {items.map((item) => (
        <motion.li variants={variants} key={item}>{item}</motion.li>
      ))}
    </motion.ul>
  </div>
 )
}

export default Test