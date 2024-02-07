import { Header } from "@components/Header";
import { Container } from "./styles";
import { MealsPercentage } from "@components/MealsPercentage";

export function Home() {
  return (
    <Container>
      <Header />

      <MealsPercentage />
    </Container>
  );
}
