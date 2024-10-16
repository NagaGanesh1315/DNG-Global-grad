import React from "react";
import './stastic.css'
export const Statstic = ( props ) => {

    return(
        <div className="fsElementContent">
            {props.data
              ? props.data.map((d, i) => (
              <div key={i} className="counter">
                <i className="fas fa-users"></i>
                <header>
                    <div className="fsElementHeaderContent">
                        <p style={{"fontSize": "32px" }}>
                            {d.counter}
                        </p>
                    </div>
                </header>

                <div className="fsElementContent">
                    <p>{d.content}</p>
                </div>
            </div>
            ))
            : "Loading..."}
        </div>
        
    )
}