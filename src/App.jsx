import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Experience from "./components/experience/Experience";
//import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import {Route, Routes} from "react-router-dom";
import ToDoList from "./components/todolist/ToDoList";
import Back from "./components/BackButton/Back";
import Weather from "./components/weatherapp/Weather";


const App = () => {
  return( 
   <Routes>
      <Route 
        path="/" 
        element={
          <div>
            <Cursor/>
            <section id="Homepage">
              <Navbar/>
              <Hero/>
            </section>
            <section id="Services">
              <Parallax type="services"/>
            </section>
            <section id="Experience">
              <Experience/>
            </section>
            <section id="Portfolio">
              <Parallax type="portfolio"/>
            </section>
            <Portfolio/>
            <section id="Contact">
              <Contact/>
            </section>
          </div>
        }
      />
      <Route path="/TodoList" 
        element={
          <>
            <Back/>
            <ToDoList />
          </>
        }
      />
      <Route path="/WeatherApp" 
        element={
          <>
            <Back/>
            <Weather/>
          </>
        }
      />
    </Routes>
  );
};

export default App;
