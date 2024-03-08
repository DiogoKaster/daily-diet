import { MealInput } from "@components/MealInput";
import { Container, InputContainer } from "./styles";
import { Title } from "@components/MealInput/styles";
import { MealCheckbox } from "@components/MealCheckbox";
import { Button } from "@components/Button";

export function MealDetails() {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <MealInput title="Nome" />
      <MealInput title="Descrição" styleType="FULL" />
      <InputContainer>
        <MealInput title="Data" />
        <MealInput title="Hora" />
      </InputContainer>
      <Title>Está dentro da dieta?</Title>
      <InputContainer>
        <MealCheckbox styleType="POSITIVE" title="Sim" />
        <MealCheckbox styleType="NEGATIVE" title="Não" />
      </InputContainer>
      <Button title="Cadastrar Refeição" type="PRIMARY" />
    </Container>
  );
}
