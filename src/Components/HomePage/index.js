import React from "react";
import Button from "../Button";
import Card from "../Card";

import * as S from "./styles";

const HomePage = () => {
  return (
    <>
      <S.Title>chuck norris joke generator</S.Title>
      <Card>
        <S.JokeText>
          Chuck Norris doesnt flush the toilet he scares the shit out of it
        </S.JokeText>
      </Card>
      <Button>Generate Joke</Button>
    </>
  );
};

export default HomePage;
