import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { ArrowUpRight, ArrowLeft } from "phosphor-react-native";

export type MealsPercentageColorProps = "POSITIVE" | "NEGATIVE";

export type MealsPercentageStyleProps = "FULL" | "REDUCED";

export interface MealsPercentageProps {
  interfaceColor: MealsPercentageColorProps;
  interfaceStyle: MealsPercentageStyleProps;
}

export interface IconsProps {
  iconColor: MealsPercentageColorProps;
}

export interface ButtonPlaceProps {
  interfaceStyle: MealsPercentageStyleProps;
}

export const Container = styled(TouchableOpacity)<MealsPercentageProps>`
  width: 100%;
  height: ${({ interfaceStyle }) =>
    interfaceStyle === "FULL" ? "180px" : "102px"};
  margin-top: ${({ interfaceStyle }) =>
    interfaceStyle === "FULL" ? "0" : "32px"};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, interfaceColor }) =>
    interfaceColor === "POSITIVE"
      ? theme.colors.green_light
      : theme.colors.red_light};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.xxl}px;
    color: ${theme.colors.gray_1};
    font-family: ${theme.font_family.bold};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    color: ${theme.colors.gray_2};
    font-family: ${theme.font_family.regular};
  `}
`;

export const Button = styled(TouchableOpacity)<ButtonPlaceProps>`
  position: absolute;
  top: 16px;
  ${({ interfaceStyle }) =>
    interfaceStyle === "FULL"
      ? css`
          left: 16px;
        `
      : css`
          right: 16px;
        `}
`;

export const IconUp = styled(ArrowUpRight).attrs<IconsProps>(
  ({ theme, iconColor }) => ({
    size: 24,
    color:
      iconColor === "POSITIVE"
        ? theme.colors.green_dark
        : theme.colors.red_dark,
  })
)``;

export const IconLeft = styled(ArrowLeft).attrs<IconsProps>(
  ({ theme, iconColor }) => ({
    size: 24,
    color:
      iconColor === "POSITIVE"
        ? theme.colors.green_dark
        : theme.colors.red_dark,
  })
)``;
