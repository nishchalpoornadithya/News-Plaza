import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { AppConstants } from "../../constants/AppContants";

import NavBar from "../../components/shared/nav-bar/NavBar";

import "./Home.css";
import Card from "../../components/shared/card/Card";

function Home(props) {
	const [news, setNews] = useState(null);

	useEffect(() => {
		// apicall
		axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2021-08-28&sortBy=popularity&apiKey=94699809b23c41799bf14b3f5f0ff19b&pageSize=8&page=1`).then(
			(response) => {
				if (response && response.data) {
					setNews(response.data.articles);
				}
			},
			(error) => {
				console.log(error);
			}
		);
	}, []);

	return (
		<div className="home-container">
			<section className="nav-bar-container">
				<NavBar navBarItems={AppConstants.NAVBAR_ITEMS} />
			</section>
			<section className="news-items-container">
				{news && news.length 
					?
            news.map((newsItem) => {
							return <Card imgUrl={newsItem.urlToImage} cardHeader={newsItem.title} description={newsItem.description} author={newsItem.author} timeStamp={newsItem.publishedAt} routeText={"more..."} />;
					  })
					: null}
			</section>
		</div>
	);
}

export default Home;
