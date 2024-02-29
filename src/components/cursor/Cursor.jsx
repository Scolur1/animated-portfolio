import "./cursor.scss";
import { useState, useEffect } from "react";
import {motion} from "framer-motion";



const Cursor = () =>{
  const[position, setPosition] = useState({x: 0, y:0});

  useEffect(() =>{
    const mouseMove = (e) =>{
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() =>{
        setPosition({x: e.clientX, y:e.clientY})
      }, 1);
    };

    let timeoutId;
    window.addEventListener("mousemove", mouseMove);

    return () =>{
      window.removeEventListener("mousemove",mouseMove);
    }
  },[])
  
  return(
    <motion.div className="cursor" animate={{x:position.x, y:position.y}}></motion.div>
  )
}

export default Cursor;