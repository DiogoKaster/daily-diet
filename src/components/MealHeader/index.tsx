import { TouchableOpacityProps } from "react-native";
import {
  Button,
  Container,
  ArrowLeftIcon,
  Title,
  MealHeaderStyleType,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

interface MealHeaderProps extends TouchableOpacityProps {
  styleType: MealHeaderStyleType;
  title: string;
}

export function MealHeader({
  styleType = "NEUTRAL",
  title,
  ...rest
}: MealHeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("home");
  }

  return (
    <Container styleType={styleType}>
      <Button onPress={handleGoBack} {...rest}>
        <ArrowLeftIcon />
      </Button>
      <Title>{title}</Title>
    </Container>
  );
}
