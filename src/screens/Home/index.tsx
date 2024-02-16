import { useState } from "react";
import { SectionList } from "react-native";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";
import { MealsPercentage } from "@components/MealsPercentage";

import { Container, Subtitle, Title } from "./styles";

/*
  objectExample: {
    title: "12.12.2021",
    data: [
      {
        id: 1,
        name: "Café da manhã",
        description: "Pão com manteiga",
        time: "08:00",
        date: "12.12.2021",
        isPlanned: true,
      },
      {
        id: 2,
        name: "Almoço",
        description: "Arroz, feijão e frango",
        time: "12:00",
        date: "12.12.2021",
        isPlanned: false,
      },
    ]
  }
*/

export function Home() {
  const [meals, setMeals] = useState([
    {
      title: "12.12.2021",
      data: [
        {
          id: 1,
          name: "Café da manhã",
          description: "Pão com manteiga",
          time: "08:00",
          date: "12.12.2021",
          isPlanned: true,
        },
        {
          id: 2,
          name: "Almoço",
          description: "Arroz, feijão e frango",
          time: "12:00",
          date: "12.12.2021",
          isPlanned: false,
        },
      ],
    },
  ]);

  return (
    <Container>
      <Header />

      <MealsPercentage />

      <Subtitle>Refeições</Subtitle>
      <Button title="Adicionar refeição" icon="add" type="PRIMARY" />

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
