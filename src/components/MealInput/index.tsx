import { Container, Input, Title, InputStyleType } from "./styles";

interface MealInputProps {
  title: string;
  styleType?: InputStyleType;
}

export function MealInput({ title, styleType = "REDUCED" }: MealInputProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Input
        multiline
        textBreakStrategy="simple"
        textAlignVertical={styleType === "FULL" ? "top" : "center"}
        styleType={styleType}
      />
    </Container>
  );
}
