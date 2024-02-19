import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import { Statistics } from "@screens/Statistics";

import { Loading } from "@components/Loading";

import theme from "@theme/DefaultTheme";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#333638"
        translucent
      />

      {fontsLoaded ? <Statistics /> : <Loading />}
    </ThemeProvider>
  );
}
