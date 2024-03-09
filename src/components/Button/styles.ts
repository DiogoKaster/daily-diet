import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonStyleTypeProps = "PRIMARY" | "SECONDARY";

interface ButtonStyleProps {
  type: ButtonStyleTypeProps;
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  margin-top: 8px;
  width: 100%;
  height: 50px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.colors.gray_2 : theme.colors.gray_7};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray_2};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`;

export const Title = styled.Text<ButtonStyleProps>`
  font-size: ${({ theme }) => theme.font_size.lg}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.colors.gray_7 : theme.colors.gray_2};
`;

export const Icon = styled(MaterialIcons).attrs<ButtonStyleProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.colors.gray_7 : theme.colors.gray_2,
  })
)``;
