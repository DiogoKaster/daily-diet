import {
  Button,
  Container,
  IconLeft,
  IconUp,
  MealsPercentageColorProps,
  MealsPercentageStyleProps,
  Subtitle,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

interface MealsPercentageProps {
  interfaceColor?: MealsPercentageColorProps;
  interfaceStyle?: MealsPercentageStyleProps;
  title: number;
}

export function MealsPercentage({
  interfaceColor = "POSITIVE",
  interfaceStyle = "REDUCED",
  title,
}: MealsPercentageProps) {
  const navigation = useNavigation();

  function handleClick(destination: string) {
    if (destination === "back") {
      navigation.navigate("home");
    } else if (destination === "statistics") {
      navigation.navigate("statistics");
    }
  }

  return (
    <Container interfaceColor={interfaceColor} interfaceStyle={interfaceStyle}>
      <Button
        interfaceStyle={interfaceStyle}
        onPress={() =>
          handleClick(interfaceStyle === "FULL" ? "back" : "statistics")
        }
      >
        {interfaceStyle === "FULL" ? (
          <IconLeft iconColor={interfaceColor} />
        ) : (
          <IconUp iconColor={interfaceColor} />
        )}
      </Button>
      <Title>{title}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
