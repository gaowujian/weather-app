import styled from "styled-components"
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* padding-right: 15px;
  padding-left: 15px; */
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  overflow: overlay;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    & > div:nth-child(2) {
      flex: 1 1 40%;
      overflow: overlay;
    }
    & > div:nth-child(1) {
      flex: 1 1 60%;
      display: flex;
      flex-flow: row;
      & > div {
        display: flex;
        flex-flow: column;
        flex: 1;
        min-height:580px;
        justify-content:space-around;
        & > img {
          width: 80%;
          max-width: 100px;
          max-height: 100px;
        }
        & > * {
          flex:0;
        }
      }
    }
  }
`
