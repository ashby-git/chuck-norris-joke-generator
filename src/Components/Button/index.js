import React from "react";

import * as S from "./styles";

const Button = (props) => {
  return <S.EightBitButton>{props.children}</S.EightBitButton>;
};

export default Button;
