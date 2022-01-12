import styled from "styled-components/macro";

export const Card = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: black;
  opacity: 0.8;
  min-height: 40vh;
  width: 60vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: grid;
  line-height: 3rem;

  @media (max-width: 800px) {
    width: 80vw;
    line-height: 2.75rem;
  }
`;
