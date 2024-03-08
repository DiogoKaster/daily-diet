import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type MealCheckboxStyleType = "POSITIVE" | "NEGATIVE";

export interface MealCheckboxStyleProp {
  styleType?: MealCheckboxStyleType;
  isActive: boolean;
}

export interface MealCheckboxStyleStatusProp {
  styleType?: MealCheckboxStyleType;
}

export const Container = styled(TouchableOpacity)<MealCheckboxStyleProp>`
  flex: 1;
  background-color: ${({ theme, styleType, isActive }) => {
    if (styleType === "POSITIVE" && isActive) {
      return theme.colors.green_light;
    }
    if (styleType === "NEGATIVE" && isActive) {
      return theme.colors.red_light;
    }
    return theme.colors.gray_6;
  }};
  height: 50px;
  max-height: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 16px;
  border-radius: 8px;
  border: 1px solid
    ${({ theme, styleType, isActive }) => {
      if (styleType === "POSITIVE" && isActive) {
        return theme.colors.green_dark;
      }
      if (styleType === "NEGATIVE" && isActive) {
        return theme.colors.red_dark;
      }
      return theme.colors.gray_6;
    }};
`;

export const StatusIcon = styled.View<MealCheckboxStyleStatusProp>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme, styleType }) =>
    styleType === "POSITIVE" ? theme.colors.green_dark : theme.colors.red_dark};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.gray_1};
`;
