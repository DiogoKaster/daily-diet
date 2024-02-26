import { TouchableOpacityProps } from "react-native";
import {
  Button,
  Container,
  ArrowLeftIcon,
  Title,
  MealHeaderStyleType,
} from "./styles";

interface MealHeaderProps extends TouchableOpacityProps {
  styleType: MealHeaderStyleType;
  title: string;
}

export function MealHeader({
  styleType = "NEUTRAL",
  title,
  ...rest
}: MealHeaderProps) {
  return (
    <Container styleType={styleType}>
      <Button {...rest}>
        <ArrowLeftIcon />
      </Button>
      <Title>{title}</Title>
    </Container>
  );
}
