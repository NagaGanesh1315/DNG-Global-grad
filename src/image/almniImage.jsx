import React, { useState, useEffect } from "react";
import Popup from './popup';
import './almni.css'

export const Image = ({ title, course, redirectUrl, smallImage ,text, redirectContent, story }) => {

  const [showPopup, setShowPopup] = useState(false);
  const handleButtonClick = () => {
    console.log('open')
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    console.log('close')
    setShowPopup(false);
  };

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add('popup-open');
    } else {
      document.body.classList.remove('popup-open');
    }
  }, [showPopup]);

  return (
    <div className="portfolio-item">
      <div className="hover-bg"  style={{"cursor": "pointer"}} >
        {" "}
          <div className="hover-text" onClick={handleButtonClick}>
            <h4>{title}</h4>
            <p>{course}</p>
            <p>{text}</p>
            {/* <a href={redirectUrl} target="_blank" rel="noreferrer" >{redirectContent ? redirectContent :"View Profile"}</a> */}
          </div>
          <img src={smallImage} rel="noopener noreferrer" target="_blank" className="img-responsive" alt={title} />{" "}
          
          {/* <i style={{
              position: "absolute",
              top: "80%",
              left: "85%",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
              "fontSize": "40px"
        }} className="fa fa-arrow-right"
        onClick={handleButtonClick}
        ></i> */}

        {showPopup && <Popup 
        onClose={handleClosePopup}
        data = {{ title, course, redirectUrl, smallImage ,text, redirectContent, story }} />}
      </div>
    </div>
  );
};
