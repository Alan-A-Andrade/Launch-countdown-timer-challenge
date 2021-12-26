import BackgroundStyled from "./background"
import Card from "./Card"
import { useState, useEffect } from "react";
import styled from "styled-components"

let countSeconds = 59, nextCountSeconds = countSeconds - 1, flipperSeconds = 0;

export default function App() {




  //------------------------seconds---------------------------------//

  function handleCountSeconds() {

    if (flipperSeconds % 2 === 0) {

      nextCountSeconds = countSeconds - 1;
    }

    else {

      if (countSeconds - 2 === -1) {

        countSeconds = 59
      }

      else {
        countSeconds -= 2;
      }

    }

  }

  const [flipDownSeconds, setFlipDownSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {


      setFlipDownSeconds(flipDownSeconds + 1)
      flipperSeconds++;
      setTimeout(handleCountSeconds, 200)

    }, 1000);
    return () => clearInterval(interval);
  });


  //------------------------seconds---------------------------------//

  return (
    <div className="App">
      <AppStyled>
        <BackgroundStyled />
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
          Coded by <a href="https://github.com/Alan-A-Andrade">Alan de Andrade</a>.
        </div>
        <div className="timer">
          <div className="display-number-seconds">
            <Card number={nextCountSeconds} lastNumber={countSeconds} cardState={`rotateX(0deg)`}></Card>
            <Card number={countSeconds} lastNumber={nextCountSeconds} cardState={`rotateX(-180deg)`}></Card>
            <Card number={nextCountSeconds} lastNumber={countSeconds} cardState={`rotateX(${(flipDownSeconds + 1) * -180}deg)`}></Card>
            <Card number={countSeconds} lastNumber={nextCountSeconds} cardState={`rotateX(${flipDownSeconds * -180}deg)`}></Card>
          </div>
        </div>
        <button onClick={() => { alert("oi") }}> Click me</button>
      </AppStyled>
    </div>
  )


}

const AppStyled = styled.div`

width:100vw;
height:100vh;

font-family: 'Red Hat Text', sans-serif;
font-size: 14px;

display:flex;
align-items: center;
justify-content: center;

button{
  position:fixed;
  width: 100px;
  z-index:10;
  top:0px;
}

.timer{
  display:block;
}

.display-number-seconds{
  display:flex;
  position:relative;
  left:-250px;
}

.display-number-minutes{
  position:relative;
  left:0px;

}


.attribution{

  position: fixed;
  color: hsl(0, 0%, 100%);
  text-decoration: none;

  bottom:0;
}

`