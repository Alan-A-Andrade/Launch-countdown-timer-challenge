
import Card from "./Card";
import { useState, useEffect } from "react";
import styled from "styled-components"

export default function TimerDays() {

  const [cardState, setCardState] = useState({ cardStage: 0, cardCount: 8 });

  function handleClick() {

    if (cardState.cardCount === 0) {

      setCardState({ ...cardState, cardStage: 0, cardCount: 8 })

    }

    else {

      setCardState({ ...cardState, cardStage: cardState.cardStage + 1, cardCount: cardState.cardCount - 1 })

    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {

      handleClick();

    }, 8 * 24 * 60 * 1000);

    return () => clearInterval(intervalId);
  });


  return (
    <TimeSecondsStyled>
      <Card number={8} lastNumber={8} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 0) % 3}></Card>
      <Card number={8} lastNumber={7} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={7} lastNumber={6} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={6} lastNumber={5} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={5} lastNumber={4} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={4} lastNumber={3} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={3} lastNumber={2} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={2} lastNumber={1} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={1} lastNumber={0} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={0} lastNumber={8} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>


    </TimeSecondsStyled>
  )
}

const TimeSecondsStyled = styled.div`

position: relative;

& > div{

position: absolute;
}


`