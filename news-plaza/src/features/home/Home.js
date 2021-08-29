import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { AppConstants } from "../../constants/AppContants";

import NavBar from "../../components/shared/nav-bar/NavBar";
import Card from "../../components/shared/card/Card";

import "./Home.css";

function Home(props) {
	const [news, setNews] = useState(null);

	useEffect(() => {
		// fetch news for first item in list by default
		getNews(AppConstants.APPLICATION.NAVBAR_ITEMS[0]);
	}, []);

	/*** METHODS ***/

	const getNews = (keyWord) => {
		axios
			.get(
				`https://newsapi.org/v2/everything?q=${keyWord}&from=${AppConstants.APPLICATION.NEWS_DATE}&sortBy=${AppConstants.APPLICATION.NEWS_DEFAULT_RELEVANCE}&apiKey=${AppConstants.USER.API_KEY}&pageSize=${AppConstants.APPLICATION.NEWS_PAGE_SIZE}&page=${AppConstants.APPLICATION.NEWS_DEFAULT_PAGE_NUMBER}`
			)
			.then(
				(response) => {
					if (response && response.data) {
						setNews(response.data.articles);
					}
				},
				(error) => {
					console.log(error);
				}
			);
	};

	const cardClicked = (index) => {
		if (news[index].url) {
			window.open(news[index].url, "_blank").focus();
		} else {
			window.alert("Sorry! The news link does not exit");
		}
	};

	/*** VIEWS ***/

	return (
		<div className="home-container">
			<section className="nav-bar-container">
				<NavBar navBarItems={AppConstants.APPLICATION.NAVBAR_ITEMS} handleNavItemClicked={(navBarItem) => getNews(navBarItem)} />
			</section>
			<section className="news-items-container">
				{news && news.length
					? news.map((newsItem, index) => {
							return (
								<Card
									key={`news-card-${index}`}
									imgUrl={newsItem.urlToImage}
									cardHeader={newsItem.title}
									description={newsItem.description}
									author={newsItem.author}
									timeStamp={newsItem.publishedAt}
									routeText={"more..."}
									handleCardClick={() => cardClicked(index)}
								/>
							);
					  })
					: null}
			</section>
		</div>
	);
}

export default Home;
