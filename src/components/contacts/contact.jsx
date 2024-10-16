import React from "react";
import monica from './images/monica.jpg'
import eric from './images/eric.jpg'
import ganesh from './images/Ganesh.jpg'
import './contacts.css'

export const Contact = (props) => {

  return (
  <div id="globalgrad">
    <div className="section-title">
          <h2>Contact Us</h2>
        </div>
    <div className="container">
    <div className="row">
    <div className=" col-sm-4 col-md-4 col-lg-4" style={{"width": "18rem", marginTop:"150px"}}>
        <img className="card-img-top" src={monica} alt="Card  cap"/>
        <div className="card-body">
        <p className="card-text">Monika Kumari</p>
          <p className="card-text">International Student Ambassador</p>
          
        </div>
      </div>

      <div className=" col-sm-4 col-md-4 col-lg-4" style={{"width": "18rem", left:"25%"}}>
        <img className="card-img-top" src={eric} alt="Card  cap"/>
        <div className="card-body">
        <p className="card-text">Eric S. Armbrecht, Ph.D.</p>
          <p className="card-text">Professor, Associate Provost</p>
        </div>
      </div>

      <div className=" col-sm-4 col-md-4 col-lg-4" style={{"width": "18rem", marginTop:"150px", left:"50%"}}>
        <img className="card-img-top" src={ganesh} alt="Card  cap"/>
        <div className="card-body">
        <p className="card-text">Naga Ganesh Dhanekula</p>
        <p className="card-text">Global Graduate Ambassador</p>
      </div>
      </div>
      </div>
      {/* <button className="btn btn-custom btn-lg page-scroll">Schedule an appoinment </button> */}
      <div className="dropdown" style={{left:"33%"}}>
    <button className="btn btn-custom btn-lg dropdown-toggle" type="button" data-toggle="dropdown">Schedule an Appoinment
    <span className="caret"></span></button>
    <ul className="dropdown-menu" style={{width:"300px", left:"50"}}>
      <li ><a href="#a">Dr. Eric Armbrecht</a></li>
      <li><a href="#a">Monika Kumari</a></li>
      <li><a href="#a">Naga Ganesh Dhanekula</a></li>
    </ul>
  </div>
  <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address:  <t></t>
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
                       <div className="contact-item">
               <p>
                 <span>
                   <i className="fa fa-phone"></i> Phone: <t></t>
                 </span>{" "}
                 {props.data ? props.data.phone : "loading"}
               </p>
             </div>
             <div className="contact-item">
               <p>
                 <span>
                   <i className="fa fa-envelope-o"></i> Email: <t></t>
                 </span>{" "}
                 <a href={"mailto:"+props.data.email} style={{color:"black"}}>{props.data ? props.data.email : "loading"}</a>
               </p>
             </div>

              <div className="col-md-12">
             <div className="row">
               <div className="social">
                 <ul>
                   <li>
                     <a href={props.data ? props.data.facebook : "/"}>
                       <i className="fa fa-facebook"></i>
                     </a>
                   </li>
                   <li>
                     <a href={props.data ? props.data.twitter : "/"}>
                       <i className="fa fa-twitter"></i>
                     </a>
                   </li>
                   <li>
                     <a href={props.data ? props.data.youtube : "/"}>
                       <i className="fa fa-youtube"></i>
                     </a>
                   </li>
                   <li>
                     <a href={props.data ? props.data.instagram : "/"}>
                       <i className="fa fa-instagram"></i>
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
           </div>

    </div>

    <div id="footer">
        <div className="container text-center">
          <p>
            &copy;  1818 - 2023 SAINT LOUIS UNIVERSITY
          </p>
        </div>
      </div>
    </div>
  );
};
