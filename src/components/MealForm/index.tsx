import { Container, InputContainer } from "./styles";

import { Title } from "@components/MealInput/styles";
import { Button } from "@components/Button";
import { MealInput } from "@components/MealInput";
import { MealCheckbox } from "@components/MealCheckbox";
import { useNavigation } from "@react-navigation/native";

export function MealForm() {
  const navigation = useNavigation();

  function handleCreateMeal() {
    navigation.navigate("feedback");
  }

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
      <Button
        title="Cadastrar Refeição"
        type="PRIMARY"
        onPress={handleCreateMeal}
      />
    </Container>
  );
}
