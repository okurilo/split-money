import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AddItemsStyled, WrapperButton, WrapperInput } from "./styled";

import { Button, Input } from "../components";

export const AddProduct = () => {
  return (
    <AddItemsStyled>
      <WrapperInput>
        <Input placeholder="Название"></Input>
        <Input placeholder="Стоимость"></Input>
      </WrapperInput>
      <WrapperButton>
        <Button type="transparent">
          Новый продукт <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </Button>
      </WrapperButton>
    </AddItemsStyled>
  );
};
