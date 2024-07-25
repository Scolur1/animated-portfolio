import { useState,useEffect } from "react";
import{
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./experience.scss"

const Experience = () => {
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
  return (
    <div className="experience">
      <VerticalTimeline 
        lineColor="#808080"
        animate={screenWidth >= 400 ? true: false}
      >
        <VerticalTimelineElement 
        className="vertical-timeline-element--education no-animation" 
        date="2022-2024"
        iconStyle={{background: "#ffa500", color:"lightgray"}}
        icon={
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
            <path d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15" 
            stroke="#000000" strokeWidth="0.6" 
            strokeLinecap="round" 
            strokeLinejoin="round"></path> </g></svg>}
        >
          <h3 className="vertical-timeline-element-title">Full-Stack Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Mivie LLC.</h4>
          <br />
          <ul className="ExpDescriptionList">
            <li>
              Collaborated with a team of 3 developers to build a scalable web application using React.js, Node.js, and Webflow
            </li>
            <li>
              Managed user authentication for over 100 users and integrated a Firebase Firestore database, reducing login time by
              30% while ensuring data continuity and enhancing security for a seamless user experience
            </li>
            <li>
              Developed detailed user guides for administrative tasks and DevOps workflows on the web platform, Firebase, and
              Google Cloud Platform, ensuring accurate usage and reducing support queries by 25%
            </li>
            <li>
              Utilized Google Cloud Platform for secured, efficient asset management and seamless back-end deployment
            </li>
            <li>
              Implemented the integration of Stripe payment processing, enhancing transaction efficiency and security
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education no-animation" 
        date="2022-2023"
        iconStyle={{background: "#ffa500", color:"lightgray"}}
        icon={
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> 
          <path d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15" 
          stroke="#000000" strokeWidth="0.6" 
          strokeLinecap="round" 
          strokeLinejoin="round"></path> </g></svg>}
        >
          <h3 className="vertical-timeline-element-title">IT Systems Analyst</h3>
          <h4 className="vertical-timeline-element-subtitle">OccuNomix International LLC.</h4>
          <br />
          <ul className="ExpDescriptionList">
            <li>
            Administrator to company’s Dynamics 365 F & O instance, onboarded users, conducted QA testing for over 20 features, and managed daily and monthly administrative tasks within the system, enhancing operational efficiency
            </li>
            <li>
            Worked with 100 key tables in the Microsoft SQL Server database and Microsoft Power BI to visualize data for 15 business reports, which were then embedded in a SharePoint page on the company’s intranet
            </li>
            <li>
            Authored over 50 comprehensive technical documents detailing end-user and administrative workflows, which led to a 20% reduction in onboarding time for new hires and decreased the volume of support tickets by 25%
            </li>
            <li>
            Worked in a team to design and build SharePoint cloud architecture, implemented security permissions and facilitated the seamless migration of 537GB of data from Box that supported 7 departments
            </li>
            <li>
            Managed employee equipment issuance and replacement, oversaw licensed software and third-party applications, and provided remote support to resolve an average of 5 software and hardware inquiries daily
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2021-2022"
        iconStyle={{background: "#ffa500", color:"#808080"}}
        icon={
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
            <path d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15" 
            stroke="#000000" strokeWidth="0.6" 
            strokeLinecap="round" 
            strokeLinejoin="round"></path> </g></svg>}
          >
          <h3 className="vertical-timeline-element-title">Peer Leader Team-Member</h3>
          <h4 className="vertical-timeline-element-subtitle">Northeastern Illinois University</h4>
          <br />
          <ul className="ExpDescriptionList">
            <li>
            Collaborated with 3 different professors on Java concepts to be taught during 60 minute weekly workshops
            </li>
            <li>
            Conducted 40 workshops for a class of 10 or more students via zoom on Java basics, OOP, and data structures
            </li>
            <li>
              Organized and participated in Peer Leader team building meetings and campus events, such as NETT Day
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2021-2022"
        iconStyle={{background: "#ffa500", color:"#808080"}}
        icon={
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
            <path d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15" 
            stroke="#000000" strokeWidth="0.6" 
            strokeLinecap="round" 
            strokeLinejoin="round"></path> </g></svg>}
          >
          <h3 className="vertical-timeline-element-title">Master Personal Trainer</h3>
          <h4 className="vertical-timeline-element-subtitle">XSport Fitness</h4>
          <br />
          <ul className="ExpDescriptionList">
            <li>
            Successfully acquired and maintained a client base, generating over $300,000 in training package sales
            </li>
            <li>
            Prepared personalized exercise and nutrition programs using Microsoft Office for over 100 clients
            </li>
            <li>
            Demonstrated, instructed, and assisted clients with exercises during hour-long sessions
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>    
    </div>
  )
}

export default Experience
