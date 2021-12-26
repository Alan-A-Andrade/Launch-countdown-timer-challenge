import BackgroundStyled from "./background"
import styled from "styled-components"
import TimerSeconds from "./TimerSeconds";
import TimerMinutes from "./TimerMinutes";
import TimerHours from "./TimerHours";
import TimerDays from "./TimerDays";

import fbLogo from "./assets/images/icon-facebook.svg";
import igLogo from "./assets/images/icon-instagram.svg";
import ptLogo from "./assets/images/icon-pinterest.svg";

export default function App() {



  return (
    <div className="App">
      <AppStyled>
        <BackgroundStyled />
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-">Frontend Mentor</a>.
          Coded by <a href="https://github.com/Alan-A-Andrade">Alan de Andrade</a>.
        </div>
        <h1 className="Title">WE'RE LAUNCHING SOON</h1>
        <div className="timer">
          <span className="timer-seconds">
            <TimerSeconds />
            <h1>Seconds</h1>
          </span>
          <span className="timer-minutes">
            <TimerMinutes />
            <h1>Minutes</h1>
          </span>
          <span className="timer-hours">
            <TimerHours />
            <h1>Hours</h1>
          </span>
          <span className="timer-days">
            <TimerDays />
            <h1>Days</h1>
          </span>
        </div>
        <div className="icon-List">
          <img src={fbLogo} alt="" />
          <img src={igLogo} alt="" />
          <img src={ptLogo} alt="" />
        </div>
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
flex-direction: column;
align-items: center;
justify-content: flex-start;

.Title{
  color: hsl(0, 0%, 100%);
  font-size: 28px;
  z-index: 20 ;
  letter-spacing: 6px;
  padding-top: calc(18vh);
}

.timer{
  display:flex;
  padding-top: calc(10vh);
  
}

.icon-List{
  z-index: 20 ;
  padding-top: calc(55vh);
  display:flex;
  flex-wrap:wrap;
  gap: 25px;

  & img{

    width: 32px;
    height: 32px;

    filter: brightness(0) saturate(100%);
    filter: invert(57%) sepia(18%) saturate(495%) hue-rotate(199deg) brightness(91%) contrast(92%);
  
  }
  & img:hover{

    filter: invert(50%) sepia(81%) saturate(1469%) hue-rotate(310deg) brightness(101%) contrast(97%);
  }
}

.timer-seconds{
  position: absolute;
  left: calc(50vw + 210px);

  & h1{
    position: relative;
    bottom: -180px;
    left: 22px;

    font-size: 28px;
    color: hsl(237, 18%, 59%);
  }

}

.timer-minutes{
position: absolute;
left: calc(50vw + 010px);

& h1{
    position: relative;
    bottom: -180px;
    left: 26px;

    font-size: 28px;
    color: hsl(237, 18%, 59%);
  }
}

.timer-hours{
position: absolute;
left: calc(50vw - 190px);

& h1{
    position: relative;
    bottom: -180px;
    left: 38px;

    font-size: 28px;
    color: hsl(237, 18%, 59%);
  }
}

.timer-days{
position: absolute;
left: calc(50vw - 390px);

& h1{
    position: relative;
    bottom: -180px;
    left: 38px;

    font-size: 28px;
    color: hsl(237, 18%, 59%);
  }
}



.attribution{

  position: fixed;
  color: hsl(0, 0%, 100%);
  text-decoration: none;

  bottom:0;
}

@media only screen and (max-width: 600px) {
  

  .Title{
  //color: hsl(0, 0%, 100%);
  font-size: 24px;
  z-index: 20 ;
  letter-spacing: 6px;
  padding-top: calc(18vh);
  text-align: center;
}

.attribution{

all:unset;

position: fixed;
color: hsl(0, 0%, 100%);
text-decoration: none;
padding: 10px;

top: 0px;
}

.timer-seconds{
  position: absolute;
  left: calc(50vw + 90px);

  & h1{
    position: relative;
    bottom: -90px;
    left: 10px;

    font-size: 14px;
    color: hsl(237, 18%, 59%);
  }

}

.timer-minutes{
position: absolute;
left: calc(50vw + 5px);

& h1{
    position: relative;
    bottom: -90px;
    left: 12px;

    font-size: 14px;
    color: hsl(237, 18%, 59%);
  }
}

.timer-hours{
position: absolute;
left: calc(50vw - 80px);

& h1{
    position: relative;
    bottom: -90px;
    left: 19px;

    font-size: 14px;
    color: hsl(237, 18%, 59%);
  }
}

.timer-days{
position: absolute;
left: calc(50vw - 165px);

& h1{
    position: relative;
    bottom: -90px;
    left: 25px;

    font-size: 14px;
    color: hsl(237, 18%, 59%);
  }
}

.icon-List{
  z-index: 20 ;
  padding-top: calc(50vh);
  display:flex;
  flex-wrap:wrap;
  gap: 25px;

  & img{

    width: 32px;
    height: 32px;

    filter: brightness(0) saturate(100%);
    filter: invert(57%) sepia(18%) saturate(495%) hue-rotate(199deg) brightness(91%) contrast(92%);
  
  }
  & img:hover{

    filter: invert(50%) sepia(81%) saturate(1469%) hue-rotate(310deg) brightness(101%) contrast(97%);
  }
}


}

`