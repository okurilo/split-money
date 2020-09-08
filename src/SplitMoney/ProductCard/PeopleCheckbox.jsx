import React, { useState } from "react";
import PropTypes from "prop-types";
import { PeopleCheckboxStyled } from "./styled";
import { BaseHeightBlock } from "../styled";

export const PeopleCheckbox = ({ productId, people, handleCheckboxSelect }) => {
  const [selected, setSelected] = useState(false);
  return (
    <BaseHeightBlock>
      <PeopleCheckboxStyled
        onClick={(event) => {
          handleCheckboxSelect(productId, people.id, !selected);
          setSelected(event.target.checked);
        }}
        checked={selected}
        type="checkbox"
      ></PeopleCheckboxStyled>
    </BaseHeightBlock>
  );
};

PeopleCheckbox.propTypes = {
  people: PropTypes.object,
  handleCheckboxSelect: PropTypes.func,
};
