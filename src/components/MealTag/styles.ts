import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 8px;
  width: 40%;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  max-height: 34px;
  border-radius: 16px;
  flex-direction: row;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.gray_6};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.gray_1};
  margin-bottom: 2px;
`;
