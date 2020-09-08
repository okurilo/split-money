import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AddItemsStyled, WrapperButton } from "./styled";

import { Button, Input } from "../components";

export const AddPeople = () => {
  return (
    <AddItemsStyled>
      <Input placeholder="Имя"></Input>
      <WrapperButton>
        <Button type="transparent">
          Новый участник <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </Button>
      </WrapperButton>
    </AddItemsStyled>
  );
};
