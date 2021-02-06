import React from "react";
import "./Plans.css";

function Plans() {
  return (
    <div className="plans">
      <p>Renewal date: 08/03/2021</p>
      <div className="plans__plan">
        <div className="plans__info">
          <h5>Premium</h5>
          <h6>4K + HD</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plans__plan current">
        <div className="plans__info">
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>
        <button>Current Package</button>
      </div>
      <div className="plans__plan">
        <div className="plans__info">
          <h5>Standard</h5>
          <h6>1080p</h6>
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Plans;
