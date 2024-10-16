import React from "react";
import './gallery.css'

export const Image = ({ title, course, redirectUrl, smallImage ,text, redirectContent }) => {
  return (
    <div className="gallery-item">
      <div className="gallery-hover-bg">
        {" "}
          <img src={smallImage} rel="noopener noreferrer" target="_blank" className="img-responsive" alt={title} />{" "}
      </div>
    </div>
  );
};
