import styled from "styled-components";

export const SplitTableStyled = styled.div`
  height: 300px;
  padding: 10px 0px;

  display: flex;
  flex-direction: row;
  flex: 1;

  background-color: #3f4345;
  border: 1px solid #3f4345;
  border-radius: 25px;
`;

export const SplitTableWrapperBlock = styled.div`
  margin: 50px 20px;
`;

export const PeopleBlockWrapper = styled(SplitTableWrapperBlock)`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-basis: 20%;
`;

export const SumBlockWrapper = styled(SplitTableWrapperBlock)`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-basis: 20%;
`;

export const ProductBlockWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 0px 20px;
`;

export const PeopleTitle = styled.h4`
  color: #fff;
  font-weight: bold;
`;
