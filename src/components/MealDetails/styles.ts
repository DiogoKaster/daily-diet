import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_7};
  padding: 24px;
  margin-top: -24px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  gap: 16px;
`;
