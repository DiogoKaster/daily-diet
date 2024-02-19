import { MealsPercentage } from "@components/MealsPercentage";
import { Container, Content, Dualcards, Title } from "./styles";
import { StatisticsCard } from "@components/StatisticsCard";

export function Statistics() {
  return (
    <Container>
      <MealsPercentage interfaceStyle="FULL" />
      <Content>
        <Title>Estatísticas Gerais</Title>
        <StatisticsCard
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
          styleType="NEUTRAL"
        />
        <StatisticsCard
          title="109"
          subtitle="refeições registradas"
          styleType="NEUTRAL"
        />
        <Dualcards>
          <StatisticsCard
            title="99"
            widthChange={true}
            subtitle="refeições dentro da dieta"
            styleType="POSITIVE"
          />
          <StatisticsCard
            title="10"
            widthChange={true}
            subtitle="refeições fora da dieta"
            styleType="NEGATIVE"
          />
        </Dualcards>
      </Content>
    </Container>
  );
}
