import React, { useState } from "react";
import classNames from 'classnames';
import "./NavBar.css";

function NavBar(props) {

	const { navBarItems, handleNavItemClicked } = props;

  const [hightlightedIndex, setHightedIndex] = useState(0);

  /*** METHODS ***/

  const navItemClicked = (navBarItem, index) => {
    setHightedIndex(index);
    handleNavItemClicked(navBarItem);
  }

  /*** VIEWS ***/

	return (
		<div className="nav-bar-container">
			{navBarItems && navBarItems.length ? (
				<nav className="nav-bar">
					{navBarItems.map((navBarItem, index) => {
            {console.log(hightlightedIndex)}
            {console.log(index)}
					  return  <span key={`nav-bar-item-${index}`} className={classNames(['nav-bar-item', {
              'nav-bar-highlight': hightlightedIndex === index
            }])} onClick={() => navItemClicked(navBarItem, index)}>{navBarItem}</span>
					})}
				</nav>
			) : null}
		</div>
	);
}

export default NavBar;
