import React from "react";
import { connect } from "react-redux";

import { Wrapper } from "./styles";
import NewsCard from "../../components/NewsCard";

import { getNews } from "../../actions";

class News extends React.Component {
  componentDidMount() {
    this.props.getNews();
  
  }

  render() {
    const { isFetched, data } = this.props.news;
    // console.log(isFetched,data)
  
    return (
      <Wrapper>
        {isFetched&&
          data.map(news => (
            <NewsCard
              key={news.url}
              title={news.title}
              content={news.content}
              publishedAt={news.publishedAt}
              author={news.author}
            />
          ))}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  news: state.newsReducer
});

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(getNews)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);

