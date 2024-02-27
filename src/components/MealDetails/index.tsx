import { MealInput } from "@components/MealInput";
import { Container, InputsContainer } from "./styles";

export function MealDetails() {
  return (
    <Container>
      <MealInput type="REDUCED" title="Nome" />
      <MealInput type="FULL" title="Descrição" />

      <InputsContainer>
        <MealInput type="REDUCED" title="Data" />
        <MealInput type="REDUCED" title="Hora" />
      </InputsContainer>
    </Container>
  );
}
