import BackgroundStyled from "./background"

import styled from "styled-components"

export default function App() {

  return (
    <div className="App">
      <AppStyled>
        <BackgroundStyled />
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://github.com/Alan-A-Andrade">Alan de Andrade</a>.
        </div>
      </AppStyled>
    </div>
  )


}

const AppStyled = styled.div`

display:flex;

.attribution{

  position: fixed;
}

`