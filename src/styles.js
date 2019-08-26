import styled from "styled-components"
import { Row } from "antd"
export const Wrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
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
export const CustomizedRow = styled(Row)`
  @media (min-width: 576px) {
    height: 400px;
    .col {
      height: 100%;
      overflow: overlay;
      .forecast {
        flex-direction: row;
        height: 100%;
        .forecastCard {
          height: 100%;
          justify-content: space-around;
        }
      }
      .news {
        .newsCard {
          height: 100%;
        }
      }
    }
  }
`
