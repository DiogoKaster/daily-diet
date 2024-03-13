import { useState } from "react";
import { MealDTO } from "@storage/meal/MealDTO";

import { Container, InputContainer } from "./styles";

import { Title } from "@components/MealInput/styles";
import { Button } from "@components/Button";
import { MealInput } from "@components/MealInput";
import { MealCheckbox } from "@components/MealCheckbox";
import { useNavigation } from "@react-navigation/native";
import { mealCreate } from "@storage/meal/mealCreate";

export function MealForm() {
  const navigation = useNavigation();
  const [isPlanned, setIsPlanned] = useState(false);
  const [meal, setMeal] = useState<MealDTO>({
    name: "",
    description: "",
    time: "",
    date: "",
    isPlanned: false,
  });

  function handleCheckboxChange(value: boolean) {
    setIsPlanned(value);
    setMeal({
      ...meal,
      isPlanned: value,
    });
  }

  function handleInputChange(field: string, value: string) {
    setMeal({
      ...meal,
      [field]: value,
    });
  }

  async function handleSaveMeal() {
    try {
      await mealCreate(meal);
      navigation.navigate("home");
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
          isActive={isPlanned}
          onPress={() => handleCheckboxChange(true)}
        />
        <MealCheckbox
          styleType="NEGATIVE"
          title="Não"
          isActive={!isPlanned}
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
