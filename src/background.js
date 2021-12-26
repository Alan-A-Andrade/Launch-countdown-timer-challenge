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
      <div className="bg-Stars">
        <img src={backgroundStars} alt="" />
      </div>
      <div className="bg-Hills">
        <img src={backgroundHills} alt="" />
      </div>
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

  & img{
 
    width:100vw;
  }
}

.bg-Stars{
  position:fixed;
  height:100%;

  & img{
 
  width:100vw;
  }
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

@media only screen and (max-width: 600px) {

 

  .Title{
  //color: hsl(0, 0%, 100%);
  font-size: 24px;
  z-index: 20 ;
  letter-spacing: 6px;
  padding-top: calc(18vh);
  text-align: center;
  }

  .bg-Hills{
    all:unset;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
 
    position:fixed;

    & img{
 
      position:relative;
      bottom: -70vh;
      right: 0px;
      width: 1200px;
    }
  }

  .degrade{

    background-color: #30243a;

    & div{
      height: calc(100vh / 6);
      width:100%;
      

    }

  }
  .bg-Stars{
    display:none;
  position:fixed;
  height:80%;


  }

}


`