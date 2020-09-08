import React from "react";
import PropTypes from "prop-types";
import { InputStyled } from "./styled";

export const Input = ({ placeholder, children }) => {
  return <InputStyled placeholder={placeholder}>{children}</InputStyled>;
};

Input.propTypes = {
  placeholder: PropTypes.string,
  children: PropTypes.element.isRequired,
};
