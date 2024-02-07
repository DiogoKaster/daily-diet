import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_1};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xl};
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.white};
`;
