import styled from "styled-components/macro";

import background from "../../Assets/8-Bit-Wallpaper4.png";
import chuckImg from "../../Assets/chuck-norris-pixel.png";

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  overflow-x: hidden;
`;

export const LandingPageContainer = styled.div`
  display: grid;
  justify-content: center;
  margin: 0 1.5em;
`;

export const CardContainer = styled.div`
  position: relative;
  margin: 0 2em 3em 2em;
`;

export const ChuckImg = styled.img.attrs({
  src: `${chuckImg}`,
})`
  position: absolute;
  margin: -100px 0 0 90%;
  z-index: 2;

  @media (max-width: 950px) {
  }
`;

export const Title = styled.h1`
  font-family: "Press Start 2P", cursive;
  font-size: 2.5rem;
  text-transform: uppercase;
  text-align: center;
  margin: 1em 0 1em 0;
`;

export const JokeText = styled.p`
  font-family: "VT323", monospace;
  font-size: 2rem;
  color: ${(props) => (props.invalid ? "red" : "white")};
  text-align: center;

  @media (max-width: 750px) {
    font-size: 1.5rem;
  }
`;
