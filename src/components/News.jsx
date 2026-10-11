import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const { category, pageSize, apiKey, setProgress } = props;
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  const updateNews = async () => {
    props.setProgress(0);
    setLoading(true);
    const query = category === "general" ? "India" : category;

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=en&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    // setState({ loading: true });
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles || []);
    setTotalResults(parsedData.totalResults || 0);
    setLoading(false);

    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, [category]);

  const fetchMoreData = async () => {
    setPage(page + 1);
    setLoading(true);
    const query = category === "general" ? "India" : category;
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=en&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`;

    let data = await fetch(url);

    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles || []));
    setPage(page + 1);
    setTotalResults(parsedData.totalResults || 0);
    setLoading(false);
  };



  return (

    <>
      <h1 className="text-center my-4">
        <strong>{category === "general" ? "Top Headlines" : `${category.charAt(0).toUpperCase() + category.slice(1)} News`}</strong>
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={loading ? <div className="d-flex justify-content-center align-items-center py-3"><Spinner /> </div> : null}
      >
        <div className='container my-4'>
          <div className="row">
            {(articles || []).map((element) => {
              return <div className="col-md-3 mb-4 d-flex align-items-stretch" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>

    </>
  )
}

News.defaultProps = {
  pageSize: 20,
  category: 'general'
}

News.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number
}

export default News

