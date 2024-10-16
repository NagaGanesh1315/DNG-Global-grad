import React from "react";

export const Image = ({ title, course, redirectUrl, smallImage ,text, redirectContent }) => {
  return (
    <div className="portfolio-item">
      <a style={{"color":"ghostwhite"}} href={redirectUrl} target="_blank" rel="noreferrer" >
      <div className="hover-bg">
        {" "}
          <div className="hover-text">
            <h4>{title}</h4>
            <p>{course}</p>
            <p>{text}</p>
            {/* <a style={{color:"ghostwhite"}} href={redirectUrl} target="_blank" rel="noreferrer" >{redirectContent ? redirectContent :"View Profile"}</a> */}
          </div>
          <img src={smallImage} rel="noopener noreferrer" target="_blank" className="img-responsive" alt={title} />{" "}
      </div>
      </a>
    </div>
  );
};
