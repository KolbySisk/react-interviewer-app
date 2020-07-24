import React from "react";
import * as Styles from "./styles";

const Button = ({ children, callback }) => {
  return <Styles.Button onClick={callback}>{children}</Styles.Button>;
};

export default Button;
