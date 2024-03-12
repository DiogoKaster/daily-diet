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
import { useNavigation } from "@react-navigation/native";

export function MealDetails() {
  const navigation = useNavigation();

  function handleEditMeal() {
    navigation.navigate("creation");
  }

  function handleDeleteMeal() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <MealHeader title="Refeição" styleType="POSITIVE" />
      <ContentContainer>
        <Title>Sanduíche</Title>
        <BaseText>
          Sanduíche de pão integral com atum e salada de alface de tomate
        </BaseText>

        <Subtitle>Data e hora</Subtitle>
        <BaseText>12/08/2022 às 16:00</BaseText>

        <MealTag />
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
