import React, { useState } from "react";
import {
  SplitTableStyled,
  PeopleBlockWrapper,
  SumBlockWrapper,
  ProductBlockWrapper,
  PeopleTitle,
} from "./styled";
import { BaseHeightBlock, CostTitle } from "../styled";
import { ProductCard } from "../ProductCard/ProductCard";

const peoplesMock = [
  { name: "Никита", id: 1 },
  { name: "Олег", id: 2 },
  { name: "Марина", id: 3 },
];
const costsMock = [1500, 1000, 600];
const productsMock = [
  { name: "Пиво", productId: 1, cost: 1000, peopleIdSelected: [] },
  { name: "Суши", productId: 2, cost: 1500, peopleIdSelected: [] },
  { name: "Чипсы", productId: 3, cost: 300, peopleIdSelected: [] },
];

export const SplitTable = () => {
  const [peoples, setPeoples] = useState(peoplesMock);
  const [costs, setCosts] = useState(costsMock);
  const [products, setProducts] = useState(productsMock);

  const handleCheckboxSelect = (productId, peopleId, selected) => {
    setProducts(
      products.map((product) => {
        if (product.productId === productId) {
          return {
            ...product,
            peopleIdSelected: selected
              ? product.peopleIdSelected.concat([peopleId])
              : product.peopleIdSelected.filter((el) => el !== productId),
          };
        }
        return product;
      })
    );
  };

  return (
    <SplitTableStyled>
      <PeopleBlockWrapper>
        {peoples.map((people, index) => (
          <BaseHeightBlock key={index}>
            <PeopleTitle>{people.name}</PeopleTitle>
          </BaseHeightBlock>
        ))}
      </PeopleBlockWrapper>
      <SumBlockWrapper>
        {costs.map((cost, index) => (
          <BaseHeightBlock key={index}>
            <CostTitle>{cost} рублей</CostTitle>
          </BaseHeightBlock>
        ))}
      </SumBlockWrapper>
      <ProductBlockWrapper>
        {products.map((product, index) => (
          <ProductCard
            key={index + product.productId}
            productId={product.productId}
            name={product.name}
            peoples={peoples}
            cost={product.cost}
            handleCheckboxSelect={handleCheckboxSelect}
          />
        ))}
      </ProductBlockWrapper>
    </SplitTableStyled>
  );
};
