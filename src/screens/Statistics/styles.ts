import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_7};
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  align-items: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-top: -20px;
  background-color: ${({ theme }) => theme.colors.gray_7};
`;

export const Dualcards = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.gray_1};
  margin-bottom: 8px;
  margin-top: 8px;
`;
