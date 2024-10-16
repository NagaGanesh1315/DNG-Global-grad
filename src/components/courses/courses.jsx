import React from "react";
import { Image
 } from "../image";
import './courses.css'

export const Courses = (props) => {
  const categories = Object.keys(props.data)
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Globalgrads courses</h2>
          <p>
            Unlock your potential by embracing a world of learning with Globalgrad courses
          </p>
        </div>
        <div className="row">
        {props.data? categories.map((category,i) => (
          <div key={`${i}`} className="row">
          <p style={{"fontSize":"24px", "textAlign":"left"}}>{category}</p>
            {props.data[category].map((course,i)=>(
              <div
              key={`${course.title}-${i}`}
              className="col-sm-4 col-md-2 col-lg-2"
            >
              <Image
                title={course.title}
                redirectUrl={course.redirectUrl}
                course={course.course}
                smallImage={course.smallImage}
                redirectContent={"Learn more"}
              />
            </div>
            ))
            }
            <br></br>
            <br></br>
            <br></br>
          </div>
        ))
        
      :"Loading"}
        {/* {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-4 col-md-2 col-lg-2"
                  >
                    <Image
                      title={d.title}
                      redirectUrl={d.redirectUrl}
                      course={d.course}
                      smallImage={d.smallImage}
                      redirectContent={"Learn more"}
                    />
                  </div>
                ))
              : "Loading..."} */}
        </div>
      </div>
    </div>
  );
};
