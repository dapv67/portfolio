import React from "react";
import { Link } from "react-router-dom";
import "./LinkButton.css";
function LinkButton(props) {
  return (
    <Link to={props.url} className="container-link">
      <div className="icon-link">{props.icon}</div>
      <div className="text-link">{props.textDescrip}</div>
    </Link>
  );
}

export default LinkButton;
