import styled from "styled-components"
import backgroundHills from "./assets/images/pattern-hills.svg"
import backgroundStars from "./assets/images/bg-stars.svg"

export default function BackgroundStyled() {

  return (
    <Background>
      <div className="degrade">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img className="bg-Stars" src={backgroundStars} alt="" />
      <img className="bg-Hills" src={backgroundHills} alt="" />
    </Background>
  )


}


const Background = styled.div`
width: 100vw;
height: 100vh;

position:fixed;

overflow: hidden;

.bg-Hills{
  width:100%;

  position:fixed;
  bottom:0;
}

.bg-Stars{
  position:fixed;
  height:100%;
}

.degrade{
  width:100vw;
  height:100vh;
  background-color: green;

  position:fixed;

  & div{
    height: calc(100vh / 5);
    width:100%;
    
    &:nth-child(1){
      background-color: rgba(31,29,40,255)
    }
    &:nth-child(2){
      background-color: rgba(32,30,41,255)
    }
    &:nth-child(3){
      background-color: rgba(33,29,43,255)
    }
    &:nth-child(4){
      background-color: rgba(35,29,43,255)
    }
    &:nth-child(5){
      background-color: rgba(36,28,43,255)
    }

  }
}

`