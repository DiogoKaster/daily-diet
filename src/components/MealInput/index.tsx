import { useState } from "react";
import { Container, Input, Title, InputStyleType } from "./styles";

interface MealInputProps {
  title: string;
  styleType?: InputStyleType;
  onChange: (value: string) => void;
}

export function MealInput({
  title,
  styleType = "REDUCED",
  onChange,
}: MealInputProps) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(value: string) {
    setInputValue(value);
    if (value) {
      onChange(value);
    }
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Input
        multiline
        textBreakStrategy="simple"
        textAlignVertical={styleType === "FULL" ? "top" : "center"}
        styleType={styleType}
        value={inputValue}
        onChangeText={handleInputChange}
      />
    </Container>
  );
}
