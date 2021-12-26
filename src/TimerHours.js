
import Card from "./Card";
import { useState, useEffect } from "react";
import styled from "styled-components"

export default function TimerHours() {

  const [cardState, setCardState] = useState({ cardStage: 0, cardCount: 23 });

  function handleClick() {

    if (cardState.cardCount === 0) {

      setCardState({ ...cardState, cardStage: 0, cardCount: 23 })

    }

    else {

      setCardState({ ...cardState, cardStage: cardState.cardStage + 1, cardCount: cardState.cardCount - 1 })

    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {

      handleClick();

    }, 24 * 60 * 1000);

    return () => clearInterval(intervalId);
  });


  return (
    <TimeSecondsStyled>
      <Card number={0} lastNumber={23} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 0) % 3}></Card>
      <Card number={23} lastNumber={22} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={22} lastNumber={21} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={21} lastNumber={20} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={20} lastNumber={19} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={19} lastNumber={18} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={18} lastNumber={17} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={17} lastNumber={16} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={16} lastNumber={15} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={15} lastNumber={14} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={14} lastNumber={13} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={13} lastNumber={12} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={12} lastNumber={11} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={11} lastNumber={10} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={10} lastNumber={9} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={9} lastNumber={8} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={8} lastNumber={7} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={7} lastNumber={6} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={6} lastNumber={5} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={5} lastNumber={4} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={4} lastNumber={3} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={3} lastNumber={2} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={2} lastNumber={1} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={1} lastNumber={0} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={0} lastNumber={23} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>


    </TimeSecondsStyled>
  )
}

const TimeSecondsStyled = styled.div`

position: relative;

& > div{

position: absolute;
}


`