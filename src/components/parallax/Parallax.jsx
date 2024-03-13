import "./parallax.scss"
import {motion, useScroll, useTransform} from "framer-motion"
import{useRef, useEffect, useState} from "react";


const Parallax = ({type}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update screenWidth state when window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "500%"]);
  return(
    <div 
      className="parallax"
      ref={ref}
      style={{
        background:
        type === "services"
        ? "linear-gradient(180deg, #111132, #0c0c1d"
        : "linear-gradient(180deg, #111132, #505064"
      }}>
      <motion.h1 style={screenWidth >= 400 ? {y:yText} : ""}>
        {type === "services" ? "My Journey" : "My Creations"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div 
        className="planets" 
        style={screenWidth >= 400 
          ?{
            y:yBg, 
            backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`}
          :{backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`}}
        ></motion.div>
      <motion.div style={screenWidth >= 400 
          ?{x:yBg}: ""} className="stars"></motion.div>
    </div>
  )
}

export default Parallax