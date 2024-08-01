import { useRef } from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import { Link } from "react-router-dom";

const items = [
  {
    id:1,
    title:"Every Eats",
    img: "/EveryEats.png",
    desc: "Please allow 1 minute for the first restaurant search.",
    path: "https://everyeats.onrender.com/"
  },
  {
    id:2,
    title:"Mix Master",
    img: "/MixMaster.png",
    desc: "Mobile Controls in Development.",
    path: "https://mix-master-69a96.web.app/"
  },
  {
    id:3,
    title:"Chess Viz",
    img: "https://images.pexels.com/photos/957312/chess-checkmated-chess-pieces-black-white-957312.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Visulizes square control using color gradients for piece count. Ability to input Chess.com username coming soon.",
    path: "https://chessviz.web.app/"
  },
  {
    id:4,
    title:"React Native Project",
    img: "https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "In development"
  }
]

const Single = ({item}) =>{

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    //offset:["start start", "end start"], 
  });

  const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

  return (
  <section>
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer" ref={ref}>
          <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{y}}>
          <h2 >{item.title}</h2>
          <p>{item.desc}</p>
          <Link className="demo" to={item.path}>{item.path ? "See Demo" : "Coming Soon"}</Link>
        </motion.div>
      </div>
    </div>
  </section>
  );
}

const Portfolio = () => {

  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref, 
    offset:["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return(
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div 
          className="progressBar"
          style={{scaleX}}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio;