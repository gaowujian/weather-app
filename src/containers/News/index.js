import React from "react"
import { connect } from "react-redux"

import { Wrapper } from "./styles"
import NewsCard from "./NewsCard"

import { getNews } from "../../actions"

class News extends React.Component {
  componentDidMount() {
    this.props.getNews()
  }

  render() {
    const { isFetched, data } = this.props.news

    return (
      <Wrapper className="news">
        {isFetched &&
          data.map((news) => (
            <NewsCard key={news.title} title={news.title} description={news.description} url={news.url} urlToImage={news.urlToImage} />
          ))}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  news: state.newsReducer
})

const mapDispatchToProps = (dispatch) => ({
  getNews: () => dispatch(getNews)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
