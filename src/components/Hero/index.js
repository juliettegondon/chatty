import React from "react";
import "./style.css";
import TypedName from "../TypedName";

function Hero(props) {
	return (
		<div className="hero text-center">
			{props.children}
			<h1>Juliette Gondon</h1>
			<h2>
				<TypedName />
			</h2>
		</div>
	);
}

export default Hero;
