import React from "react";

import "./Card.css";

function Card(props) {
	const { handleCardClick } = props;

	const { imgUrl, cardHeader, description, author, timeStamp, routeText } = props;

	return (
		<div className="card">
			<section className="card-content" onClick={() => handleCardClick()}>
				<header className="card-header">
					<figure>
						<div className="news-item-image" style={{ background: `url(${imgUrl})` }} alt="Image"></div>
					</figure>
					<h4 className="text-overflow">{cardHeader}</h4>
				</header>
				<div className="card-body text-overflow">{description}</div>
			</section>
			<section>
				<div className="card-footer">
					<div className="author text-overflow">{author}</div>
					<footer className="additional-details">
						<time className="time-stamp">{timeStamp}</time>
						<div className="route-text">{routeText}</div>
					</footer>
				</div>
			</section>
		</div>
	);
}

export default Card;
