import { useNavigation } from "@react-navigation/native";

import { Container, InputContainer } from "./styles";
import { Title } from "@components/MealInput/styles";
import { Button } from "@components/Button";
import { MealInput } from "@components/MealInput";
import { MealCheckbox } from "@components/MealCheckbox";

import { mealCreate } from "@storage/meal/mealCreate";
import { useMealForm } from "../../hooks/useMealForm";

export function MealForm() {
  const navigation = useNavigation();
  const { meal, handleInputChange, handleCheckboxChange } = useMealForm();

  async function handleSaveMeal() {
    try {
      await mealCreate(meal);
      navigation.navigate("feedback", { isPlanned: meal.isPlanned });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container showsVerticalScrollIndicator={false}>
      <MealInput
        key="nome"
        title="Nome"
        onChange={(value) => {
          handleInputChange("name", value);
        }}
      />
      <MealInput
        key="description"
        title="Descrição"
        styleType="FULL"
        onChange={(value) => {
          handleInputChange("description", value);
        }}
      />
      <InputContainer>
        <MealInput
          key="date"
          title="Data"
          onChange={(value) => {
            handleInputChange("date", value);
          }}
        />
        <MealInput
          key="time"
          title="Hora"
          onChange={(value) => {
            handleInputChange("time", value);
          }}
        />
      </InputContainer>
      <Title>Está dentro da dieta?</Title>
      <InputContainer>
        <MealCheckbox
          styleType="POSITIVE"
          title="Sim"
          isActive={meal.isPlanned}
          onPress={() => handleCheckboxChange(true)}
        />
        <MealCheckbox
          styleType="NEGATIVE"
          title="Não"
          isActive={!meal.isPlanned}
          onPress={() => handleCheckboxChange(false)}
        />
      </InputContainer>
      <Button
        title="Cadastrar Refeição"
        type="PRIMARY"
        onPress={handleSaveMeal}
      />
    </Container>
  );
}
