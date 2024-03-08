import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export type TitleStyleType = "POSITIVE" | "NEGATIVE";

export interface TitleStyleProp {
  styleType: TitleStyleType;
}

export interface SubtitleStyleProp {
  bold?: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_7};
  padding: 24px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<TitleStyleProp>`
  color: ${({ theme, styleType }) =>
    styleType === "POSITIVE" ? theme.colors.green_dark : theme.colors.red_dark};
  font-size: ${({ theme }) => theme.font_size.xxl}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text<SubtitleStyleProp>`
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: ${({ theme }) => theme.font_size.lg}px;
  font-family: ${({ theme, bold }) =>
    bold ? theme.font_family.bold : theme.font_family.regular};
`;

export const Illustration = styled.Image`
  width: 224px;
  height: 288px;
  margin: 50px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding: 0 70px;
`;
