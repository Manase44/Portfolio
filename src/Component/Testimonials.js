import React from "react";
import Navbar from "./Layout/Navbar";

const Testimonials = () => {
  return (
    <div>
      <div id="background"></div>
      <Navbar />
      <div className="container" id="cnt">
        <div className="row">
          <div className="col pt-3" id='contentColumn'>
            <p id="title" className="h5 text-center">
              TESTIMONIES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
