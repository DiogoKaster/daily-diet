import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_7};
  padding: 24px;
`;

export const Title = styled.Text`
  margin-top: 32px;
  font-size: ${({ theme }) => theme.font_size.xl}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.gray_1};
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.gray_1};
  margin-top: 32px;
`;
