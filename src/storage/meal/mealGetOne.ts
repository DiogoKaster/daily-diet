import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";
import { MealDTO } from "./MealDTO";
import { StorageDTO } from "../StorageDTO";

export async function mealGetOne(mealName: string) {
  try {
    const storedMeals = await mealGetAll();

    const meal: MealDTO | undefined = storedMeals
      .flatMap((storage: StorageDTO) =>
        storage.data.filter((meal: MealDTO) => meal.name === mealName)
      )
      .shift();

    return meal;
  } catch (error) {
    throw new Error(`[mealGetOne] Error: ${error}`);
  }
}
