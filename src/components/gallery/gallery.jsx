import { Image } from "../../image/galleryImage.jsx";
import React from "react";
import './gallery.css'

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
          A Blend of Passion, Diversity, and the Joy of Learning.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-item">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-3 col-lg-3"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
        <br></br>
        <br></br>

        <p></p>
              <button className="btn btn-custom btn-lg page-scroll">More </button>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScICdvDmXdOnFwg43LJ2PyC3OE_WPBKkn8xAtzozOrco45e4w/viewform" target="_blank" rel="noreferrer" className="btn btn-custom btn-lg page-scroll">Upload your photo</a>
      </div>
    </div>
  );
};
