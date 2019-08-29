import React from "react"
import { Wrapper, Title, Description, Image, ReadMore } from "./styles"

const Newscard = ({ title, description, url, urlToImage }) => {
  return (
    <Wrapper className="newsCard">
      <Title>{title}</Title>
      <Description>{description}</Description>
      {urlToImage && <Image src={urlToImage} alt="Loading"></Image>}
      <ReadMore>
        <a href={url}>Read More</a>
      </ReadMore>
    </Wrapper>
  )
}

export default Newscard
