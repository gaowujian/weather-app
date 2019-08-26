import React from "react"
import { Wrapper, Title, Description, Image, ReadMore } from "./styles"

const Newscard = ({ title, description, url, urlToImage }) => {
  return (
    <Wrapper className="newsCard">
      <Title>Title: {title}</Title>
      <Description>{description}</Description>
      {urlToImage ? (
        <Image>
          <img src={urlToImage} alt="Loading"></img>
        </Image>
      ) : null}
      <ReadMore>
        <a href={url}>Read More</a>
      </ReadMore>
    </Wrapper>
  )
}

export default Newscard
