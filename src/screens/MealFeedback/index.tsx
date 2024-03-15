import { useNavigation, useRoute } from "@react-navigation/native";
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
  const route = useRoute();
  const navigation = useNavigation();

  const { isPlanned } = route.params as { isPlanned: boolean };

  function handleGoToHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      {isPlanned ? (
        <Title styleType="POSITIVE">Continue assim!</Title>
      ) : (
        <Title styleType="NEGATIVE">Vamos melhorar!</Title>
      )}

      {isPlanned ? (
        <Subtitle>
          Você continua <Subtitle bold>dentro da dieta.</Subtitle> Muito bem!
        </Subtitle>
      ) : (
        <Subtitle>
          Você <Subtitle bold>saiu da dieta</Subtitle> dessa vez, mas continue
          se esforçando e não desista!
        </Subtitle>
      )}

      {isPlanned ? (
        <Illustration source={positiveImage} />
      ) : (
        <Illustration source={negativeImage} />
      )}

      <ButtonContainer>
        <Button
          title="Ir para a página principal"
          type="PRIMARY"
          onPress={handleGoToHome}
        />
      </ButtonContainer>
    </Container>
  );
}
