import React from "react";
import { Title, SplitMoneyStyled, WrapperAddBlock } from "./styled";
import { AddPeople } from "./AddPeople";
import { SplitTable } from "./SplitTable/SplitTable";
import { AddProduct } from "./AddProduct";
import { CostSum } from "./CostSum";

export const SplitMoney = () => {
  return (
    <SplitMoneyStyled>
      <Title>Давай-ка посчитаемся!</Title>
      <WrapperAddBlock>
        <AddPeople></AddPeople>
        <AddProduct></AddProduct>
      </WrapperAddBlock>
      <SplitTable></SplitTable>
      <CostSum></CostSum>
    </SplitMoneyStyled>
  );
};
