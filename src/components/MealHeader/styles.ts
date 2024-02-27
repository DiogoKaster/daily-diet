import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";

export type MealHeaderStyleType = "NEUTRAL" | "POSITIVE" | "NEGATIVE";

export interface MealHeaderStyleProps {
  styleType: MealHeaderStyleType;
}

export const Container = styled.View<MealHeaderStyleProps>`
  background-color: ${({ styleType, theme }) => {
    switch (styleType) {
      case "POSITIVE":
        return theme.colors.green_light;
      case "NEGATIVE":
        return theme.colors.red_light;
      default:
        return theme.colors.gray_5;
    }
  }};
  width: 100%;
  height: 120px;
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xl}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.gray_1};
  margin-bottom: 16px;
`;

export const Button = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 24px;
  top: 40px;
`;

export const ArrowLeftIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray_1,
}))``;
