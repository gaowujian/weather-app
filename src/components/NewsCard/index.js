import React from "react"
import { Wrapper, Title, Description, Image, ReadMore } from "./styles"

const Newscard = ({ title, description, url, urlToImage }) => {
  return (
    <Wrapper>
      <Title>Title: {title}</Title>
      <Description>Description: {description}</Description>
      <Image src={urlToImage} alt="img"/>
      <ReadMore >
        <a href={url}>Read More</a>
      </ReadMore>
    </Wrapper>
  )
}

export default Newscard
