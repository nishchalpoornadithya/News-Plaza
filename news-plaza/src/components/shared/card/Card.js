import React from "react";

import "./Card.css";

function Card(props) {
	const { imgUrl, cardHeader, description, author, timeStamp, routeText } = props;

	return (
		<div className="card">
			<header className="card-header">
				<figure>
					<img src={imgUrl} alt="Img" />
				</figure>
				<h3>{cardHeader}</h3>
			</header>
			<div className="card-body">{description}</div>
			<div className="card-footer">
				<div className="author">{author}</div>
				<footer className="additional-details">
					<time className="time-stamp">{timeStamp}</time>
					<div className="route-text">{routeText}</div>
				</footer>
			</div>
		</div>
	);
}

export default Card;
