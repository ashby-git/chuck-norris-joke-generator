import React from "react";

import * as S from "./styles";

const Button = (props) => {
  return (
    <S.EightBitButton onClick={props.onClick}>
      {props.children}
    </S.EightBitButton>
  );
};

export default Button;
