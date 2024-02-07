import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type MealsPercentageStyleProps = "POSITIVE" | "NEGATIVE";

export interface MealsPercentageProps {
  interfaceStyle: MealsPercentageStyleProps;
  backButton: boolean;
}

export const Container = styled(TouchableOpacity)<MealsPercentageProps>`
  width: 100%;
  height: 102px;
  margin-top: 32px;
  border-radius: 6px;
  background-color: ${({ theme, interfaceStyle }) =>
    interfaceStyle === "POSITIVE"
      ? theme.colors.green_light
      : theme.colors.red_light};
`;
