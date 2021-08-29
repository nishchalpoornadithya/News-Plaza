import React from "react";

import "./NavBar.css";

function NavBar(props) {

	const { navBarItems } = props;

	return (
		<div className="nav-bar-container">
			{navBarItems && navBarItems.length ? (
				<nav className="nav-bar">
					{navBarItems.map((navBarItem, index) => {
					  return  <span key={index} className="nav-bar-item">{navBarItem}</span>
					})}
				</nav>
			) : null}
		</div>
	);
}

export default NavBar;
