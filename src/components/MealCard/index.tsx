import { Container, Divider, MealName, MealTime, Status } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface MealCardProps extends TouchableOpacityProps {
  time: string;
  name: string;
  isPlanned: boolean;
}

export function MealCard({
  time,
  name,
  isPlanned = true,
  ...rest
}: MealCardProps) {
  return (
    <Container {...rest}>
      <MealTime>{time}</MealTime>
      <Divider />
      <MealName>{name}</MealName>
      <Status isPlanned={isPlanned} />
    </Container>
  );
}
