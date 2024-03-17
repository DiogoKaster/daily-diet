import { useCallback, useState } from "react";
import { MealHeader } from "@components/MealHeader";
import {
  BaseText,
  ButtonContainer,
  Container,
  ContentContainer,
  Subtitle,
  Title,
} from "./styles";
import { MealTag } from "@components/MealTag";
import { Button } from "@components/Button";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { mealGetOne } from "@storage/meal/mealGetOne";
import { MealDTO } from "@storage/meal/MealDTO";
import { mealDeleteOne } from "@storage/meal/mealDeleteOne";
import { mealDeleteAll } from "@storage/meal/mealDeleteAll";

export function MealDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, time } = route.params as { name: string; time: string };
  const [meal, setMeal] = useState<MealDTO>({} as MealDTO);

  async function fetchMeal() {
    try {
      const meal = await mealGetOne(name);
      if (meal) {
        setMeal(meal);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  function handleEditMeal() {
    navigation.navigate("creation");
  }

  async function handleDeleteMeal() {
    console.log(meal.name);
    await mealDeleteOne(meal.date, meal.name);
    navigation.navigate("home");
  }

  return (
    <Container>
      <MealHeader
        title="Refeição"
        styleType={meal.isPlanned ? "POSITIVE" : "NEGATIVE"}
      />
      <ContentContainer>
        <Title>{meal.name}</Title>
        <BaseText>{meal.description}</BaseText>

        <Subtitle>Data e hora</Subtitle>
        <BaseText>
          {meal.date} às {meal.time}
        </BaseText>

        <MealTag isPlanned={meal.isPlanned} />
      </ContentContainer>
      <ButtonContainer>
        <Button
          icon="drive-file-rename-outline"
          title="Editar refeição"
          type="PRIMARY"
          onPress={handleEditMeal}
        />
        <Button
          icon="delete-outline"
          title="Excluir refeição"
          type="SECONDARY"
          onPress={handleDeleteMeal}
        />
      </ButtonContainer>
    </Container>
  );
}
