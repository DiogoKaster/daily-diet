import styled from "styled-components/native";

export type StatisticsCardStyleProp = "NEUTRAL" | "POSITIVE" | "NEGATIVE";

interface StatisticsCardProps {
  styleType: StatisticsCardStyleProp;
  widthChange: boolean;
}

export const Container = styled.View<StatisticsCardProps>`
  width: ${({ widthChange }) => (widthChange ? "49%" : "100%")};
  height: 90px;
  margin-top: 10px;
  border-radius: 8px;
  background-color: ${({ theme, styleType }) => {
    if (styleType === "POSITIVE") {
      return theme.colors.green_light;
    }
    if (styleType === "NEGATIVE") {
      return theme.colors.red_light;
    }
    if (styleType === "NEUTRAL") {
      return theme.colors.gray_6;
    }
  }};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xl}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.gray_1};
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.gray_2};
  max-width: 80%;
  text-align: center;
`;
