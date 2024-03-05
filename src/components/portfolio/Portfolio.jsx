import { useRef } from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
  {
    id:1,
    title:"React Project",
    img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, distinctio. Aut cum eum iste voluptas. Praesentium voluptatum fugiat natus voluptates, commodi nesciunt asperiores sed, est, recusandae repellat autem velit minus"
  },
  {
    id:2,
    title:"Next.js Project",
    img: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, distinctio. Aut cum eum iste voluptas. Praesentium voluptatum fugiat natus voluptates, commodi nesciunt asperiores sed, est, recusandae repellat autem velit minus"
  },
  {
    id:3,
    title:"Vanilla JS App",
    img: "https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, distinctio. Aut cum eum iste voluptas. Praesentium voluptatum fugiat natus voluptates, commodi nesciunt asperiores sed, est, recusandae repellat autem velit minus"
  },
  {
    id:4,
    title:"Chess App",
    img: "https://images.pexels.com/photos/957312/chess-checkmated-chess-pieces-black-white-957312.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, distinctio. Aut cum eum iste voluptas. Praesentium voluptatum fugiat natus voluptates, commodi nesciunt asperiores sed, est, recusandae repellat autem velit minus"
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
          {/* <p>{item.desc}</p> */}
          <button>Coming Soon</button>
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