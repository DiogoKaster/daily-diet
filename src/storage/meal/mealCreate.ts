import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { groupGetAll } from "./mealGetAll";
import { MealDTO } from "./MealDTO";
import { StorageDTO } from "../StorageDTO";

export async function mealCreate(newMeal: MealDTO) {
  try {
    const storedMeals = await groupGetAll();

    const newMeals = storedMeals.map((storage: StorageDTO) => {
      if (storage.title === newMeal.date) {
        return {
          ...storage,
          data: [...storage.data, newMeal],
        };
      } else {
        return [...storedMeals, { title: newMeal.date, data: [newMeal] }];
      }
    });

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newMeals));
  } catch (error) {
    throw new Error(`[mealCreate] Error: ${error}`);
  }
}
