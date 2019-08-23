import React from "react";
import {
  Wrapper,
  Title,
  Content,
  PublishedDate,
  Author
} from "./styles";

const Newscard = ({title, content, publishedAt, author}) => {
  return (
    <Wrapper>
      <Title>Title: {title}</Title>
      <Content>Content: {content}</Content>
      <PublishedDate>Date: {publishedAt}</PublishedDate>
      <Author>Author: {author}</Author>
    </Wrapper>
  );
};

export default Newscard;
