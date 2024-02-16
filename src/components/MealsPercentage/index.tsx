import { TouchableOpacityProps } from "react-native";
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

interface MealsPercentageProps extends TouchableOpacityProps {
  interfaceColor?: MealsPercentageColorProps;
  interfaceStyle?: MealsPercentageStyleProps;
  backButton?: boolean;
}

export function MealsPercentage({
  interfaceColor = "POSITIVE",
  interfaceStyle = "REDUCED",
  ...rest
}: MealsPercentageProps) {
  return (
    <Container
      interfaceColor={interfaceColor}
      interfaceStyle={interfaceStyle}
      {...rest}
    >
      <Button interfaceStyle={interfaceStyle}>
        {interfaceStyle === "FULL" ? (
          <IconLeft iconColor={interfaceColor} />
        ) : (
          <IconUp iconColor={interfaceColor} />
        )}
      </Button>
      <Title>50,96%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
