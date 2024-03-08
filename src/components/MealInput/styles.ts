import { TextInput } from "react-native";
import styled from "styled-components/native";

export type InputStyleType = "FULL" | "REDUCED";

export interface InputStyleProp {
  styleType: InputStyleType;
}

export const Container = styled.View`
  flex: 1;
  margin-top: 16px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.gray_1};
  margin-bottom: 8px;
`;

export const Input = styled(TextInput)<InputStyleProp>`
  width: 100%;
  height: ${({ styleType }) => (styleType === "FULL" ? "120px" : "48px")};
  max-height: ${({ styleType }) => (styleType === "FULL" ? "120px" : "48px")};
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray_7};
  border: 1px solid ${({ theme }) => theme.colors.gray_5};
`;
