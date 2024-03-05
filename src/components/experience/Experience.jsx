import React from "react";
import{
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date="2020-2022"
        iconStyle={{background: "#3e497a", color:"#fff"}}
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
          <h3 className="vertical-timeline-element-title">Northeastern Illinois University</h3>
          <h4 className="vertical-timeline-element-subtitle">Computer Science <i>Expected 2024</i></h4>
          <ul>
            <li>
            GPA: 3.92/4.00 – Dean’s list: Spring 2021, Summer 2021, Fall 2021
            </li>
            <li>
            National Society for Leadership and Success, Member: Fall 2021
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date="2021-2022"
        iconStyle={{background: "#3e497a", color:"#fff"}}
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
          <h3 className="vertical-timeline-element-title">Northeastern Illinois University</h3>
          <h4 className="vertical-timeline-element-subtitle">Peer Leader Team-Member</h4>
          <ul>
            <li>
            Collaborated with a professor on Java concepts to be taught during weekly workshops.
            </li>
            <li>
            Conducted workshops of 10 or more students via zoom on Java basics, OOP, and data structures.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date="2022-2023"
        iconStyle={{background: "#3e497a", color:"#fff"}}
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
          <h3 className="vertical-timeline-element-title">OccuNomix International LLC.</h3>
          <h4 className="vertical-timeline-element-subtitle">IT Systems Analyst</h4>
          <ul>
            <li>
            Held administration role of and conducted QA testing for company’s Dynamics 365 F & O instance.
            </li>
            <li>
            Oversaw comprehensive software licensing to ensure compliance and cost-effectiveness.
            </li>
            <li>
            Managed the relational database and visualized data for business reports using Microsoft Power BI.
            </li>
            <li>
            Devised cloud architecture in SharePoint that allowed the migration of over 300GB of data from Box.
            </li>
            <li>
            Addressed software and hardware issues through remote support.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date="2022-2024"
        iconStyle={{background: "#3e497a", color:"#fff"}}
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
          <h3 className="vertical-timeline-element-title">Mivie LLC.</h3>
          <h4 className="vertical-timeline-element-subtitle">Full-Stack Developer</h4>
          <ul>
            <li>
              Collaborated on development of a robust web application, leveraging WebFlow, React and Node.js.
            </li>
            <li>
              Implemented user authentication and integrated backend database using FireBase
            </li>
            <li>
              Spearheaded the seamless integration of an e-commerce store, incorporating Stripe payment processing.
            </li>
            <li>
              Utilized Google Cloud storage for data handling to ensure scalability of the application.
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>    
    </div>
  )
}

export default Experience
