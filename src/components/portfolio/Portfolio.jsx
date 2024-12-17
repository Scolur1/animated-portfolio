import { useRef } from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import { Link } from "react-router-dom";

const items = [
  {
    id:1,
    title:"Mivie",
    img: "/Mivie.png",
    desc: "Solo Developer for the Mivie Social Impact Certification Marketing Site. Prototyped with Figma and built with Webflow.",
    path: "https://mivie.com/"
  },
  {
    id:2,
    title:"Topcoat Painters",
    img: "/TOPCOATLOGO.png",
    desc: "A marketing website for a professional painting service. Built with Next.js, Tailwind, and Sanity CMS.",
    path: "https://topcoatpainterschicago.com/"
  },
  {
    id:3,
    title:"Every Eats",
    img: "/EveryEats.png",
    desc: "Please allow 1 minute for the first restaurant search. Example search cities: Skokie, Dallas. Built using the MERN stack.",
    path: "https://everyeats.onrender.com/"
  },
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
          <img src={item.img} alt="project image" />
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