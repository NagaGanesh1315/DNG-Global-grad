import React from 'react';
import './popup.css'
const Popup = ({ onClose , data}) => {
    const { title, course, redirectUrl, smallImage ,text, redirectContent, story } = data
  return (
    <div className="popup">
      
      <div className="popup-content">
      <div className='close-div' onClick={onClose}>
        {/* <button className="close-button" onClick={onClose}> */}
          X
  
        </div>
        <div className="wrapper">
          <div className="alumni-image">
            <img className='pop-image' src={smallImage} alt={title} />
            <a href={redirectUrl} target="_blank" rel="noreferrer" className='linkedin-button' ><i className="fa fa-linkedin fa-fw"></i>{redirectContent ? redirectContent :"View Profile"}</a>
          </div>
          <div >
            <h4>{title}</h4>
            <p>{course}</p>
            <p>{text}</p>
            {/* <a href={redirectUrl} target="_blank" rel="noreferrer" className='linkedin-button' ><i class="fa fa-linkedin fa-fw"></i>{redirectContent ? redirectContent :"View Profile"}</a> */}
            <div className="alumni-about">
              <p>{story}</p>
            </div>
            {/* <button onClick={onClose}>Close</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;