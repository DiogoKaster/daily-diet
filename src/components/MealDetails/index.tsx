import { MealInput } from "@components/MealInput";
import { Container, InputContainer } from "./styles";

export function MealDetails() {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <MealInput title="Nome" />
      <MealInput title="Descrição" styleType="FULL" />
      <InputContainer>
        <MealInput title="Data" />
        <MealInput title="Hora" />
      </InputContainer>
    </Container>
  );
}
