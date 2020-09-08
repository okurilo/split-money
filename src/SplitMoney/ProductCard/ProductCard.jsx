import React from "react";
import PropTypes from "prop-types";
import {
  ProductCardStyled,
  ProductName,
  ProductSelectors,
  ProductCost,
} from "./styled";
import { BaseHeightBlock } from "../styled";
import { PeopleCheckbox } from "./PeopleCheckbox";

export const ProductCard = ({
  productId,
  name,
  peoples,
  cost,
  handleCheckboxSelect,
}) => {
  return (
    <ProductCardStyled>
      <BaseHeightBlock>
        <ProductName>{name}</ProductName>
      </BaseHeightBlock>
      <ProductSelectors>
        {peoples.map((people) => (
          <PeopleCheckbox
            key={people.id}
            productId={productId}
            people={people}
            handleCheckboxSelect={handleCheckboxSelect}
          />
        ))}
      </ProductSelectors>
      <ProductCost>{cost}</ProductCost>
    </ProductCardStyled>
  );
};

ProductCard.propTypes = {
  productId: PropTypes.number,
  name: PropTypes.string,
  peoples: PropTypes.array,
  cost: PropTypes.number,
  handleCheckboxSelect: PropTypes.func,
};
