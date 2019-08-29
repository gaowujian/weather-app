import React from "react"
import styled, { keyframes } from "styled-components"

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 25px }
  100% { margin-bottom: 0 }
`

const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`
const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 30px 5px 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`
function Loading() {
  return (
    <DotWrapper>
      <h1>Loading</h1>
      <Dot delay="0s" />
      <Dot delay=".1s" />
      <Dot delay=".2s" />
    </DotWrapper>
  )
}

export default Loading
