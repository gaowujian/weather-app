import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: lightpink;
  @media (min-width: 576px) {
    flex-direction: row;
    align-items: space-around;
    height: 400px;
  }
`
