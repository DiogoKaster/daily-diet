import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";
import { MealDTO } from "./MealDTO";
import { StorageDTO } from "../StorageDTO";

export async function mealCreate(newMeal: MealDTO) {
  try {
    const storedMeals = await mealGetAll();

    if (!storedMeals || storedMeals.length === 0) {
      const newCollection: StorageDTO[] = [
        {
          title: newMeal.date,
          data: [newMeal],
        },
      ];
      await AsyncStorage.setItem(
        MEAL_COLLECTION,
        JSON.stringify(newCollection)
      );
      return;
    } else {
      const updatedMeals = storedMeals.map((storage: StorageDTO) => {
        if (storage.title === newMeal.date) {
          return {
            ...storage,
            data: [...storage.data, newMeal],
          };
        } else {
          return storage;
        }
      });

      if (
        !updatedMeals.some((meal: StorageDTO) => meal.title === newMeal.date)
      ) {
        updatedMeals.push({
          title: newMeal.date,
          data: [newMeal],
        });
      }

      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
    }
  } catch (error) {
    throw new Error(`[mealCreate] Error: ${error}`);
  }
}
