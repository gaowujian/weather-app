import React from "react"
import { Wrapper, Title, Description, Image, ReadMore } from "./styles"

const Newscard = ({ title, description, url, urlToImage }) => {
  return (
    <Wrapper>
      <Title>Title: {title}</Title>
      <Description>Description: {description}</Description>
      <Image src={urlToImage} />
      <ReadMore href={url}>Read More</ReadMore>
    </Wrapper>
  )
}

export default Newscard
