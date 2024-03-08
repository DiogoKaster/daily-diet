import { TouchableOpacityProps } from "react-native";
import { Container, StatusIcon, Title, MealCheckboxStyleType } from "./styles";

export interface MealCheckboxProps extends TouchableOpacityProps {
  title: string;
  styleType: MealCheckboxStyleType;
  isActive?: boolean;
}

export function MealCheckbox({
  title,
  styleType,
  isActive = false,
  ...rest
}: MealCheckboxProps) {
  return (
    <Container styleType={styleType} isActive={isActive} {...rest}>
      <StatusIcon styleType={styleType} />
      <Title>{title}</Title>
    </Container>
  );
}
