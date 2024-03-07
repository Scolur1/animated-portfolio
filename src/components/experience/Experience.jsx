import React from "react";
import{
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./experience.scss"

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#808080">
        <VerticalTimelineElement 
        className="vertical-timeline-element--work" 
        date="2020-2022"
        iconStyle={{background: "#ffa500", color:"#808080"}}
        icon={
            <svg fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.01024">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M197.769 791.767l60.672-286.853c2.341-11.066-4.733-21.934-15.799-24.275s-21.934 4.733-24.275 15.799l-60.672 286.853c-2.341 11.066 4.733 21.934 15.799 24.275s21.934-4.733 24.275-15.799zm571.063-286.786l61.778 287.068c2.38 11.058 13.273 18.093 24.33 15.713s18.093-13.273 15.713-24.33l-61.778-287.068c-2.38-11.058-13.273-18.093-24.33-15.713s-18.093 13.273-15.713 24.33z"></path>
                <path d="M967.45 386.902L535.9 208.126c-10.609-4.399-30.569-4.442-41.207-.088L57.821 386.901l436.881 178.857c10.624 4.355 30.583 4.313 41.207-.085L967.45 386.901zM551.583 603.516c-20.609 8.533-51.787 8.599-72.409.145L24.437 417.494c-32.587-13.359-32.587-47.847.009-61.188l454.73-186.174c20.641-8.448 51.818-8.382 72.407.156l448.836 185.936c32.466 13.442 32.466 47.913.004 61.354l-448.84 185.938zm288.673 166.569c-98 57.565-209.669 88.356-325.888 88.356-116.363 0-228.162-30.866-326.246-88.564-9.749-5.735-22.301-2.481-28.036 7.268s-2.481 22.301 7.268 28.036c104.336 61.377 223.297 94.22 347.014 94.22 123.564 0 242.386-32.763 346.634-93.998 9.753-5.729 13.015-18.279 7.286-28.032s-18.279-13.015-28.032-7.286z"></path>
                <path d="M983.919 383.052v296.233c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V383.052c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"></path>
              </g>
            </svg>}        
          >
          <h3 className="vertical-timeline-element-title">Northeastern Illinois University</h3>
          <h4 className="vertical-timeline-element-subtitle">Computer Science <i>Expected 2024</i></h4>
          <br />
          <ul className="ExpDescriptionList">
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
          <h3 className="vertical-timeline-element-title">Northeastern Illinois University</h3>
          <h4 className="vertical-timeline-element-subtitle">Peer Leader Team-Member</h4>
          <br />
          <ul className="ExpDescriptionList">
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
          <h3 className="vertical-timeline-element-title">OccuNomix International LLC.</h3>
          <h4 className="vertical-timeline-element-subtitle">IT Systems Analyst</h4>
          <br />
          <ul className="ExpDescriptionList">
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
          <h3 className="vertical-timeline-element-title">Mivie LLC.</h3>
          <h4 className="vertical-timeline-element-subtitle">Full-Stack Developer</h4>
          <br />
          <ul className="ExpDescriptionList">
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
