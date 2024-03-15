import { useNavigation } from "@react-navigation/native";
import { Container, Divider, MealName, MealTime, Status } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface MealCardProps extends TouchableOpacityProps {
  time: string;
  name: string;
  isPlanned: boolean;
}

export function MealCard({ time, name, isPlanned, ...rest }: MealCardProps) {
  const navigation = useNavigation();

  function handleSeeDetails() {
    navigation.navigate("details", { name, time });
  }

  return (
    <Container onPress={handleSeeDetails} {...rest}>
      <MealTime>{time}</MealTime>
      <Divider />
      <MealName>{name}</MealName>
      <Status isPlanned={isPlanned} />
    </Container>
  );
}
