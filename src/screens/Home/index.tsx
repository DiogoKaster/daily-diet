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
import { mealStatistics } from "@storage/meal/mealStatistics";
import { StatisticsData } from "@screens/Statistics";

export function Home() {
  const [meals, setMeals] = useState<StorageDTO[]>([]);
  const [statisticsData, setStatisticsData] = useState({} as StatisticsData);

  const navigation = useNavigation();

  async function fetchData() {
    try {
      const data = await mealGetAll();
      const statistics = await mealStatistics();

      setStatisticsData(statistics);
      setMeals(data);
    } catch (error) {
      console.error(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  function handleGoToNewMeal() {
    navigation.navigate("creation");
  }

  return (
    <Container>
      <Header />

      <MealsPercentage title={statisticsData.percentage} />

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
