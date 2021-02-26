import React from "react";
import "./style.css";
import TypedName from "../TypedName";

function Footer(props) {
  return (
    <footer className="footer">
      	{props.children}
      <span>juliette gondon</span>
      	<TypedName />
    </footer>
  );
}

export default Footer;
