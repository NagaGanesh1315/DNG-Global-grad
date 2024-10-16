import React from "react";
import { Statstic } from "./statstic";
import './testimonials.css'
export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Global Grad at a Glance</h2>
          <p>Bridging Cultures, Shaping Futures at Saint Louis University.</p>
        </div>
        <Statstic
        data={props.data}
        />
      </div>
    </div>
  );
};
