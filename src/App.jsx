import React, { useEffect } from "react";
import { Navigation } from "./components/navigation/navigation";
import { Header } from "./components/header/header";
import { ApplicationProcess } from "./components/application/applicationProcess";
import { Courses } from "./components/courses/courses";
import { Gallery } from "./components/gallery/gallery";
import { Testimonials } from "./components/testimonials/testimonials";
import { Alumni } from "./components/alumni/Alumni";
import { Contact } from "./components/contacts/contact";

import SmoothScroll from "smooth-scroll";
import "./App.css";

import dheader from "./data/header.json"
import dapplication from "./data/applicationProcess.json"
import dcourses from "./data/courses.json"
import dgallery from "./data/gallery.json"
import dtestimonials from "./data/testimonials.json"
import dalumni from "./data/alumni.json"
import dcontact from "./data/contact.json"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  // const [header, setHeader] = useState({});
  // const [applicationProcess, setApplicationProcess] = useState({});
  // const [lifeAtSlu, setLifeAtSlu] = useState({});
  // const [courses, setCourses] = useState({});
  // const [gallery, setGallery] = useState({});
  // const [testimonials, setTestimonials] = useState({});
  // const [alumni, setAlumni] = useState({});
  // const [contact, setContact] = useState({});

  useEffect(() => {
    // setHeader(dheader)
    // setAlumni(dalumni)
    // setApplicationProcess(dapplicationProcess)
    // setContact(dcontact)
    // setGallery(dgallery)
    // setTestimonials(dtestimonials)
    // setLifeAtSlu(dlifeAtSlu)
    // setCourses(dcourses)
  }, []);
  return (
    <div>
      <Navigation />
      <Header data={dheader} />
      <Gallery data={dgallery} />
      <ApplicationProcess data={dapplication} />
      <Courses data={dcourses} />
      
      <Alumni data={dalumni} />
      <Testimonials data={dtestimonials} />
      <Contact data={dcontact} />
    </div>
  );
};

export default App;
