import "./back.scss";
import {Link} from "react-router-dom";

const Back = () => {
  return (
   <div className="backBtnWrap">
      <button className="backBtn">
       <Link to="/#Portfolio">
       <svg width="23" height="23" viewBox="0 0 23 23">
          <path 
              strokeWidth="3" 
              stroke="black" 
              strokeLinecap="round"
              d= "M 3 16.5 L 17 2.5"
            />
            <path 
              strokeWidth="3" 
              stroke="black" 
              strokeLinecap="round"
              d= "M 3 2.5 L 17 16.346"
            />
       </svg>
       </Link>
      </button>
    </div>
  )
}

export default Back
