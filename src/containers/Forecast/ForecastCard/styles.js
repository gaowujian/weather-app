import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  border-radius:5px;
  background-color: lightsalmon;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`
export const Weekday = styled.span`
  text-align: center;
  flex: 1;
`
export const WeatherIcon = styled.img`
  max-width: 30px;
  flex: 1;
`
export const Temperature = styled.div`
  flex: 1;
  text-align: center;
`
export const WeatherDesc = styled.span`
  flex: 1;
  text-align: center;
`
