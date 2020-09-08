import React from "react";
import PropTypes from "prop-types";

import { StyledButton, TransparentButton } from "./styled";

import { buttonTypes } from "../../utils";

export const Button = (props) => {
  const { type, children } = props;

  if (type === buttonTypes.transparent) {
    return <TransparentButton>{children}</TransparentButton>;
  }

  return <StyledButton>{children}</StyledButton>;
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.element,
};
