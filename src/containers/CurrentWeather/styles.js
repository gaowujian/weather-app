import styled from "styled-components"
export const Wrapper = styled.div`
  background-color: lightyellow;

  .vertical {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
    div {
      margin: 10px;
    }
    img {
      max-width: 30px;
    }
  }
  @media (min-width: 576px) {
    .vertical {
      display: flex;
      flex-flow: column;
      align-items: center;
      img {
        max-width: initial;
      }
    }
  }
  .horizontal {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    div {
      margin: 10px;
    }
  }
`
export const City = styled.h1`
  margin: 0.5em;
`
export const WeatherCondition = styled.p``
export const Temperature = styled.p``
export const Icon = styled.img``
export const Weekday = styled.span`
  margin: 5px;
`
export const Today = styled.span`
  margin: 5px;
`

export const MaxTemp = styled.span`
  margin: 5px;
`
export const MinTemp = styled.span`
  margin: 5px;
`
