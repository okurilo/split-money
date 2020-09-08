import styled from "styled-components";
import { Input } from "../../components/Input/Input";

export const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;

  margin-right: 30px;
  padding: 20px;

  background-color: #e7cd14;
  border: 1px solid #e7cd14;
  border-radius: 15px;
`;

export const ProductName = styled.div`
  color: #fff;
`;

export const ProductSelectors = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  color: #fff;
`;

export const ProductCost = styled.div`
  color: #fff;
`;

export const PeopleCheckboxStyled = styled(Input)`
  width: 20px;
  height: 20px;
`;
