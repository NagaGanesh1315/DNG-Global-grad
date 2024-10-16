import React from "react";
import "./application.css";
export const ApplicationProcess = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="col-md-10 col-md-offset-1 section-title">
        <h2>How to be a GlobalGrad Scholar</h2>
        <p>
        Apply Yourself Today for the Fastest Decision and Become Part of the SLU Global Family
          </p>
      </div>
      <div className="accordion" id="accordionExample">
        
      {props.data
              ? props.data.map((d, i) => (
        <div className="card">
          <div className="card-header" id={"main"+i}>
            <h2 className="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target={"#"+i}
                aria-expanded="false"
                aria-controls={i}
              >
                {d.heading}
              </button>
            </h2>
          </div>
          <div
            id={i}
            class="collapse"
            aria-labelledby={"main"+i}
            data-parent="#accordionExample"
          >
            {d.contant? d.contant.map((a,i)=>(
              <div class="card-body">
              {a}
            </div>
            )):""}
            {/* <div class="card-body">
              1
            </div>
            <div class="card-body">
              2
            </div> */}
          </div>
        </div>
              )):"Loading..."}
        
        
      </div>
    </div>
  );
};
