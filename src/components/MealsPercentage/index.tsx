import { TouchableOpacityProps } from "react-native";
import { Container, MealsPercentageStyleProps } from "./styles";

interface MealsPercentageProps extends TouchableOpacityProps {
  interfaceStyle?: MealsPercentageStyleProps;
  backButton?: boolean;
}

export function MealsPercentage({
  interfaceStyle = "POSITIVE",
  backButton = false,
  ...rest
}: MealsPercentageProps) {
  return (
    <Container
      interfaceStyle={interfaceStyle}
      backButton={backButton}
      {...rest}
    ></Container>
  );
}
