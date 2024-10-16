import React from "react";
import { Image } from "../../image/almniImage.jsx";
import './alumni.css'

export const Alumni = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container testimonial-group">

        <div className="col-md-12  section-title">
          <h2>Meet the Alumni</h2>
          <p>
          Pioneers of Today, Shaping the World of Tomorrow, Globalgrads forever.
          </p>
        </div>

        <div id="row" className=" row">
        {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-4 col-md-4 col-lg-3"
                  >
                    <Image
                      title={d.title}
                      redirectUrl={d.redirectUrl}
                      course={d.course}
                      smallImage={d.smallImage}
                      text={d.text}
                      story={d.story}
                    />
                  </div>
                ))
              : "Loading..."}
        </div>
        
      </div>
    </div>
  );
};
