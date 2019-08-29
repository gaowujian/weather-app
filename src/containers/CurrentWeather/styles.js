import styled from "styled-components"
export const Wrapper = styled.div`
  background-color: lightyellow;
  .vertical {
    display: flex;
    flex-flow: column;
    align-items: center;
    div{
      margin: 20px;
    }
  }
  .horizontal {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    div{
      margin: 20px;
    }
  }
`
export const City = styled.h1``
export const WeatherCondition = styled.p``
export const Temperature = styled.p``

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
