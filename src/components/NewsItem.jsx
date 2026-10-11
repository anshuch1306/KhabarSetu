import React from 'react'
import newsImage from "./image.png";
const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>

      <div className="card h-100 positon-relative">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "80%", zIndex: '1' }}> {source?.name || "Unknown"}</span>
        <img src={imageUrl || newsImage} onError={(e) => {
          e.target.src = newsImage;
        }} className="card-img-top" alt="jren" style={{ height: "180px", objectFit: "cover" }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}... </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} className="btn btn-sm btn-dark mt-auto">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem