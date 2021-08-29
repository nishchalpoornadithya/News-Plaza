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
    getNews(AppConstants.NAVBAR_ITEMS[0]);
	}, []);

  /*** METHODS ***/

  const getNews = (keyWord) => {
		axios.get(`https://newsapi.org/v2/everything?q=${keyWord}&from=2021-08-28&sortBy=popularity&apiKey=d5a9f68002b7499990ddc975a3be3b95&pageSize=8&page=1`).then(
			(response) => {
				if (response && response.data) {
					setNews(response.data.articles);
				}
			},
			(error) => {
				console.log(error);
			}
		);
  }

  const viewMoreClicked = (index) => {
    window.open(news[index].url, '_blank').focus();
  }

  /*** VIEWS ***/

	return (
		<div className="home-container">
			<section className="nav-bar-container">
				<NavBar navBarItems={AppConstants.NAVBAR_ITEMS} handleNavItemClicked={(navBarItem) => getNews(navBarItem)}/>
			</section>
			<section className="news-items-container">
				{news && news.length 
					?
            news.map((newsItem, index) => {
							return <Card 
                key={`news-card-${index}`} 
                imgUrl={newsItem.urlToImage} 
                cardHeader={newsItem.title} 
                description={newsItem.description} 
                author={newsItem.author} 
                timeStamp={newsItem.publishedAt} routeText={"more..."}
                handleViewMoreClick={() => viewMoreClicked(index)}
              />;
					  })
					: null}
			</section>
		</div>
	);
}

export default Home;
