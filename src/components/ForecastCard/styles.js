import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 576px) {
    height: 100%;
    justify-content: space-around
  }
`
export const Weekday = styled.span``
export const WeatherIcon = styled.img`
  max-width:64px;
`
export const Temperature = styled.div``
export const WeatherDesc = styled.span``
