import {
  ButtonContainer,
  Container,
  Illustration,
  Subtitle,
  Title,
} from "./styles";
import positiveImage from "@assets/PositiveIllustration.png";
import negativeImage from "@assets/NegativeIllustration.png";
import { Button } from "@components/Button";

export function MealFeedback() {
  return (
    <Container>
      <Title styleType="POSITIVE">Continue assim!</Title>
      <Subtitle>
        Você continua <Subtitle bold>dentro da dieta</Subtitle>. Muito bem!
      </Subtitle>
      <Illustration source={positiveImage} />
      <ButtonContainer>
        <Button title="Ir para a página principal" type="PRIMARY" />
      </ButtonContainer>
    </Container>
  );
}