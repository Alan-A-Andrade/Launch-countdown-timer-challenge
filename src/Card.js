import styled from "styled-components"

export default function Card(Props) {


  if (Props.cardCount !== Props.number && Props.cardCount !== Props.lastNumber && Props.cardCount !== Props.lastNumber - 1 && Props.cardCount !== Props.number - 1) {

    return ""
  }


  //Card Logic:
  // 0 Display None
  // 1 top haf
  // 2 botton half
  // 3 disply none

  const stages = [

    { display: `flex`, position: `rotateX(0deg)`, transition: "none", z: "10" },
    { display: `flex`, position: `rotateX(-180deg)`, transition: "transform 500ms", z: "20" },
    { display: `flex`, position: `rotateX(-180deg)`, transition: "none", z: "10" },

  ]

  function convert(number) {
    number = String(number)
    if (number.length === 1)
      number = '0' + number
    return number
  }

  return (
    <CardStyled
      display={stages[Props.cardState].display}
      position={stages[Props.cardState].position}
      transition={stages[Props.cardState].transition}
      z={stages[Props.cardState].z}
    >
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p>{convert(Props.number)}</p>
          </div>
          <div className="flip-card-back">
            <p>{convert(Props.lastNumber)}</p>
          </div>
        </div>
        <CircleCutLeft />
        <CircleCutRight />
      </div>

    </CardStyled>
  )

}

const CardStyled = styled.div`

width: 160px;
height: 160px;
display:${props => props.display};
flex-direction:column;
border-radius: 10px;
z-index: ${props => props.z};

font-size:80px;
overflow: hidden;

box-shadow: 0px 10px 0px 0px hsl(234, 17%, 12%);

.flip-card {
  background-color: transparent;
  width: 160px;
  height: 80px;
  perspective: 1000px;

}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: ${props => props.transition};
  transform-style: preserve-3d;
  transform-origin: bottom center;
  transform: ${props => props.position};
}


.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #2c2c44;
  color: rgba(211,79,110,255);
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 1px 0px 0px hsl(234, 17%, 12%);

  overflow: hidden;

  & p{

    width:160px;
    position: relative;
    left: 0;
    bottom: -50%;
    text-align: center;

  }
  
}

.flip-card-back {
  background-color: #34364f;
  color: rgba(249,94,133,255);
  transform: rotateX(180deg);

  overflow: hidden;
  box-shadow: 0px 20px 0px 0px hsl(234, 17%, 12%);

  & p{
    width:160px;
    position: relative;
    left: 0;
    bottom: 50%;
    text-align: center;


  }
 
}


@media only screen and (max-width: 600px) {

width: 80px;
height: 80px;
display:${props => props.display};
flex-direction:column;
border-radius: 2px;
z-index: ${props => props.z};

font-size:40px;
overflow: hidden;

box-shadow: 0px 5px 0px 0px hsl(234, 17%, 12%);

.flip-card {
  background-color: transparent;
  width: 80px;
  height: 40px;
  perspective: 1000px;

}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: ${props => props.transition};
  transform-style: preserve-3d;
  transform-origin: bottom center;
  transform: ${props => props.position};
}


.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #2c2c44;
  color: rgba(211,79,110,255);
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 1px 0px 0px hsl(234, 17%, 12%);

  overflow: hidden;

  & p{

    width:80px;
    position: relative;
    left: 0;
    bottom: -50%;
    text-align: center;

  }
  
  }
  .flip-card-back {
  background-color: #34364f;
  color: rgba(249,94,133,255);
  transform: rotateX(180deg);

  overflow: hidden;
  box-shadow: 0px 20px 0px 0px hsl(234, 17%, 12%);

  & p{
    width:80px;
    position: relative;
    left: 0;
    bottom: 50%;
    text-align: center;


  }
 
}

}

`

const CircleCutLeft = styled.div`
width: 10px;
height: 20px;
background-color: hsl(234, 17%, 12%);
border-bottom-left-radius: 20px;
border-top-left-radius: 20px;

position: absolute;
top: calc(100% - 10px);
right: 0px;

@media only screen and (max-width: 600px) {

  width: 5px;
height: 10px;
background-color: hsl(234, 17%, 12%);
border-bottom-left-radius: 10px;
border-top-left-radius: 10px;

position: absolute;
top: calc(100% - 5px);
right: 0px;



}

`

const CircleCutRight = styled.div`
width: 10px;
height: 20px;
background-color: hsl(234, 17%, 12%);
border-bottom-right-radius: 20px;
border-top-right-radius: 20px;

position: absolute;

top: calc(100% - 10px);
left: 0px;

@media only screen and (max-width: 600px) {

width: 5px;
height: 10px;
background-color: hsl(234, 17%, 12%);
border-bottom-right-radius: 10px;
border-top-right-radius: 10px;

position: absolute;

top: calc(100% - 5px);
left: 0px;



}


`

