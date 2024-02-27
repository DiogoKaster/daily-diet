import styled from "styled-components/native";

export type InputTypeProps = "FULL" | "REDUCED";

interface InputStyleProps {
  type: InputTypeProps;
}

export const Container = styled.View<InputStyleProps>`
  flex: 1;
  max-height: ${({ type }) => (type === "FULL" ? "120px" : "56px")};
  margin: 24px 0;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.gray_2};
`;

export const Input = styled.TextInput<InputStyleProps>`
  background-color: ${({ theme }) => theme.colors.gray_7};
  border: 1px solid ${({ theme }) => theme.colors.gray_5};
  border-radius: 8px;
  padding: 16px;
  flex: 1;
  min-width: 56px;
  min-height: 56px;
`;
