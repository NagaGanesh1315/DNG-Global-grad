import React from "react";
import backgroundVideo from '../../assets/Video.mp4'
import './header.css'

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">

          <div className="homepage-video">
            <video width="100%" height="100%" loop autoPlay muted>
            <source src={backgroundVideo} type="video/mp4"/>
            </video>
            <div className="text-over-video">
              <h1>GlobalGrad</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
