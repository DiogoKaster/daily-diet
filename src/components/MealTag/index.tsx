import { StatusIcon } from "@components/MealCheckbox/styles";
import { Container, Title } from "./styles";

export function MealTag() {
  return (
    <Container>
      <StatusIcon styleType="POSITIVE" />
      <Title>dentro da dieta</Title>
    </Container>
  );
}
