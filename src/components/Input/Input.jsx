import React from "react";
import PropTypes from "prop-types";
import { InputStyled } from "./styled";

export const Input = ({ placeholder, type, children, className, onClick }) => {
  if (type === "checkbox") {
    return (
      <input onClick={onClick} className={className} type={type}>
        {children}
      </input>
    );
  }
  return (
    <InputStyled onClick={onClick} type={type} placeholder={placeholder}>
      {children}
    </InputStyled>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  children: PropTypes.element,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
