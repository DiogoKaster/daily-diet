import { useState, useCallback } from "react";
import { SectionList } from "react-native";

import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";
import { MealsPercentage } from "@components/MealsPercentage";

import { Container, Subtitle, Title } from "./styles";

import { StorageDTO } from "@storage/StorageDTO";
import { mealGetAll } from "@storage/meal/mealGetAll";

export function Home() {
  const [meals, setMeals] = useState<StorageDTO[]>([]);

  const navigation = useNavigation();

  async function fetchMeals() {
    try {
      const data = await mealGetAll();
      setMeals(data);
    } catch (error) {
      console.error(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  function handleGoToNewMeal() {
    navigation.navigate("creation");
  }

  return (
    <Container>
      <Header />

      <MealsPercentage />

      <Subtitle>Refeições</Subtitle>
      <Button
        title="Nova refeição"
        icon="add"
        type="PRIMARY"
        onPress={handleGoToNewMeal}
      />

      <SectionList
        sections={meals}
        keyExtractor={(item) => item.name + item.description}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MealCard
            time={item.time}
            name={item.name}
            isPlanned={item.isPlanned}
          />
        )}
        renderSectionHeader={({ section: { title } }) => <Title>{title}</Title>}
      />
    </Container>
  );
}
