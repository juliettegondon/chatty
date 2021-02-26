import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

function MyNav() {
	return (
		<div className="container-fluid justify-content-center">
			<Navbar className="fixed-top MyNav" expand="lg" sticky="fixed">
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="https://github.com/juliettegondon" target="_blank" rel="noreferrer">github</Nav.Link>
						<Nav.Link href="https://www.linkedin.com/in/juliettegondon/" target="_blank" rel="noreferrer">linkedin</Nav.Link>
						<Nav.Link href="https://juliettegondon.github.io/portfolioround3/projects.html" target="_blank" rel="noreferrer">projects</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default MyNav;
