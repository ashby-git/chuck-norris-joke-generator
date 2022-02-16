import React, { useCallback, useEffect, useState } from "react";
import Button from "../Button";
import Card from "../Card";

import * as S from "./styles";

const HomePage = () => {
  const [joke, setJoke] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJokeHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      if (!response.ok) {
        throw new Error("Error: Something went wrong!");
      }
      const data = await response.json();

      const transformedJoke = data.value;
      setJoke(transformedJoke);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchJokeHandler();
  }, [fetchJokeHandler]);

  let content = <S.JokeText>Found no Jokes.</S.JokeText>;

  if (joke.length > 0) {
    content = <S.JokeText>{joke}</S.JokeText>;
  }

  if (error) {
    content = <S.JokeText invalid>{error}</S.JokeText>;
  }

  if (isLoading) {
    content = <S.JokeText>Loading...</S.JokeText>;
  }

  return (
    <S.Background>
      <S.LandingPageContainer>
        <S.Title>chuck norris joke generator</S.Title>
        <S.CardContainer>
          <S.ChuckImg />
          <Card>{content}</Card>
        </S.CardContainer>
        <Button onClick={fetchJokeHandler}>Generate New Joke</Button>
      </S.LandingPageContainer>
    </S.Background>
  );
};

export default HomePage;
