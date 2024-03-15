import { MealsPercentage } from "@components/MealsPercentage";
import { Container, Content, Dualcards, Title } from "./styles";
import { StatisticsCard } from "@components/StatisticsCard";
import { useCallback, useState } from "react";
import { mealStatistics } from "@storage/meal/mealStatistics";
import { useFocusEffect } from "@react-navigation/native";

export type StatisticsData = {
  totalMeals: number;
  plannedMeals: number;
  unPlannedMeals: number;
  percentage: number;
};

export function Statistics() {
  const [statisticsData, setStatisticsData] = useState({} as StatisticsData);

  async function fetchStatistics() {
    try {
      const statistics = await mealStatistics();
      if (statistics) {
        setStatisticsData(statistics);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchStatistics();
    }, [])
  );

  return (
    <Container>
      <MealsPercentage
        title={statisticsData.percentage}
        interfaceStyle="FULL"
        interfaceColor={
          statisticsData.percentage >= 50 ? "POSITIVE" : "NEGATIVE"
        }
      />
      <Content>
        <Title>Estatísticas Gerais</Title>
        <StatisticsCard
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
          styleType="NEUTRAL"
        />
        <StatisticsCard
          title={statisticsData.totalMeals}
          subtitle="refeições registradas"
          styleType="NEUTRAL"
        />
        <Dualcards>
          <StatisticsCard
            title={statisticsData.plannedMeals}
            widthChange={true}
            subtitle="refeições dentro da dieta"
            styleType="POSITIVE"
          />
          <StatisticsCard
            title={statisticsData.unPlannedMeals}
            widthChange={true}
            subtitle="refeições fora da dieta"
            styleType="NEGATIVE"
          />
        </Dualcards>
      </Content>
    </Container>
  );
}
