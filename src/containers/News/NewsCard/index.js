import React from "react"
import "./style.scss"
import "./toggle"
const Newscard = ({ title, description, url, urlToImage }) => {
  
  return (
    <div className="news-card">
      <div className="thumbnail">
        {urlToImage && <img src={urlToImage} alt="Loading"></img>}
        {urlToImage && <div className="category">Photos</div>}
      </div>

      <div className="post-content">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <div className="post-meta">
          <span className="comments">
            <i className="fa fa-comments"></i>
            <a href={url}>Read More</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Newscard
