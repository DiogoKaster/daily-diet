import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";
import { MealDTO } from "./MealDTO";
import { StorageDTO } from "../StorageDTO";

export async function mealDeleteOne(mealToDelete: MealDTO) {
  try {
    const storedMeals = await mealGetAll();

    const newMeals = storedMeals.map((storage: StorageDTO) => {
      const newData = storage.data.filter(
        (meal: MealDTO) => meal.name !== mealToDelete.name
      );
      return {
        ...storage,
        data: newData,
      };
    });

    AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newMeals));
  } catch (error) {
    throw new Error(`[mealDeleteOne] Error: ${error}`);
  }
}
