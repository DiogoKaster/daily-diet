import { MealDTO } from "@storage/meal/MealDTO";
import { useState } from "react";

export function useMealForm() {
  const [meal, setMeal] = useState<MealDTO>({
    name: "",
    description: "",
    time: "",
    date: "",
    isPlanned: false,
  });

  function handleInputChange(field: string, value: string) {
    setMeal({
      ...meal,
      [field]: value,
    });
  }

  function handleCheckboxChange(value: boolean) {
    setMeal({
      ...meal,
      isPlanned: value,
    });
  }

  return {
    meal,
    handleInputChange,
    handleCheckboxChange,
  };
}
