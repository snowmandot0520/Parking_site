import React from "react";
import "./Background.css";

const Background = props => (
  <div className="backg text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}
  </div>
);

export default Background;