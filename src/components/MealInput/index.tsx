import { Container, Input, InputTypeProps, Title } from "./styles";

interface MealInputProps {
  type: InputTypeProps;
  title: string;
}

export function MealInput({ type, title }: MealInputProps) {
  return (
    <Container type={type}>
      <Title>{title}</Title>
      <Input type={type} />
    </Container>
  );
}
