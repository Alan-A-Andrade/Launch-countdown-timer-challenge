
import Card from "./Card";
import { useState, useEffect } from "react";
import styled from "styled-components"

export default function TimerSeconds() {

  const [cardState, setCardState] = useState({ cardStage: 0, cardCount: 59 });

  function handleClick() {

    if (cardState.cardCount === 0) {

      setCardState({ ...cardState, cardStage: 0, cardCount: 59 })

    }

    else {

      setCardState({ ...cardState, cardStage: cardState.cardStage + 1, cardCount: cardState.cardCount - 1 })

    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {

      handleClick();

    }, 1000);

    return () => clearInterval(intervalId);
  });


  return (
    <TimeSecondsStyled>
      <Card number={59} lastNumber={59} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={59} lastNumber={58} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={58} lastNumber={57} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={57} lastNumber={56} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={56} lastNumber={55} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={55} lastNumber={54} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={54} lastNumber={53} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={53} lastNumber={52} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={52} lastNumber={51} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={51} lastNumber={50} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={50} lastNumber={49} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={49} lastNumber={48} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={48} lastNumber={47} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={47} lastNumber={46} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={46} lastNumber={45} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={45} lastNumber={44} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={44} lastNumber={43} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={43} lastNumber={42} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={42} lastNumber={41} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={41} lastNumber={40} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={40} lastNumber={39} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={39} lastNumber={38} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={38} lastNumber={37} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={37} lastNumber={36} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={36} lastNumber={35} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={35} lastNumber={34} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={34} lastNumber={33} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={33} lastNumber={32} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={32} lastNumber={31} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={31} lastNumber={30} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={30} lastNumber={29} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={29} lastNumber={28} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={28} lastNumber={27} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={27} lastNumber={26} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={26} lastNumber={25} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 3) % 3}></Card>
      <Card number={25} lastNumber={24} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 2) % 3}></Card>
      <Card number={24} lastNumber={23} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
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
      <Card number={0} lastNumber={59} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 1) % 3}></Card>
      <Card number={59} lastNumber={58} cardCount={cardState.cardCount} cardState={(cardState.cardStage + 0) % 3}></Card>

    </TimeSecondsStyled>
  )
}

const TimeSecondsStyled = styled.div`

position: relative;

& > div{

position: absolute;
}


`