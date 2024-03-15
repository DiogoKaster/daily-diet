import { StatusIcon } from "@components/MealCheckbox/styles";
import { Container, Title } from "./styles";

interface MealTagProps {
  isPlanned: boolean;
}

export function MealTag({ isPlanned }: MealTagProps) {
  return (
    <Container>
      <StatusIcon styleType={isPlanned ? "POSITIVE" : "NEGATIVE"} />
      <Title>dentro da dieta</Title>
    </Container>
  );
}
