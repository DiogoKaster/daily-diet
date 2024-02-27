import { MealDetails } from "@components/MealDetails";
import { Container } from "./styles";
import { MealHeader } from "@components/MealHeader";

export function MealCreation() {
  return (
    <Container>
      <MealHeader styleType="NEUTRAL" title="Nova Refeição" />
      <MealDetails />
    </Container>
  );
}
