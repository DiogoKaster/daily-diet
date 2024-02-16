import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type MealStatusStyleProps = {
  isPlanned: boolean;
};

export const Container = styled(TouchableOpacity)`
  margin-top: 8px;
  width: 100%;
  height: 50px;
  background-color: transparent;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray_5};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`;

export const MealTime = styled.Text`
  margin-left: 16px;
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.gray_1};
`;

export const Divider = styled.View`
  width: 2px;
  height: 35%;
  background-color: ${({ theme }) => theme.colors.gray_5};
`;

export const MealName = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.font_size.lg}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.gray_2};
`;

export const Status = styled.View<MealStatusStyleProps>`
  margin-right: 16px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: ${({ theme, isPlanned }) =>
    isPlanned ? theme.colors.green_mid : theme.colors.red_mid};
`;
