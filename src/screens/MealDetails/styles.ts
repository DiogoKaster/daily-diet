import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_7};
`;

export const ContentContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_7};
  padding: 24px;
  margin-top: -24px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const ButtonContainer = styled.View`
  padding: 24px;
`;

export const BaseText = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.gray_1};
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xl}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.gray_1};
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.gray_1};
  margin-bottom: 8px;
`;
